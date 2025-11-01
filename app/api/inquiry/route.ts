import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, productName, productImage } = await req.json();

    if (!name || !email || !phone || !productName || !productImage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Lucentix owner
    await transporter.sendMail({
      from: `"Lucentix Website" <no-reply@lucentix.com>`,
      to: "voravinit1@gmail.com",
      subject: `Lucentix Inquiry — ${productName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #222;">
          <h2 style="color: #b4975a;">New Price Inquiry</h2>
          <img src="${productImage}" alt="${productName}" style="width: 300px; height: auto; border-radius: 8px; margin-bottom: 16px;" />
          <p><strong>Product:</strong> ${productName}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr />
          <p style="font-size: 12px; color: #777;">This inquiry came from the Lucentix collection page.</p>
        </div>
      `,
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: `"Lucentix" <no-reply@lucentix.com>`,
      to: email,
      subject: "Thank you for your inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; color: #222;">
          <p>Hi ${name},</p>
          <p>Thank you for your interest in our <strong>${productName}</strong>.</p>
          <img src="${productImage}" alt="${productName}" style="width: 300px; height: auto; border-radius: 8px; margin: 12px 0;" />
          <p>Our team will reach out shortly with more details.</p>
          <p>Warm regards,<br><strong>Lucentix Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry" },
      { status: 500 }
    );
  }
}
