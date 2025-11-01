import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, selections } = await req.json();

    if (!name || !email || !phone || !selections) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure transporter — same SMTP setup you used earlier
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Lucentix (you)
    const designSummary = Object.entries(selections)
      .map(([step, value]) => `<p><strong>${step}:</strong> ${value}</p>`)
      .join("");

    await transporter.sendMail({
      from: `"Lucentix Website" <no-reply@lucentix.com>`,
      to: "voravinit1@gmail.com", // change to your email
      subject: `New Bespoke Design Request from ${name}`,
      html: `
        <h2>New Bespoke Jewelry Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr />
        <h3>Design Specifications:</h3>
        ${designSummary}
        <hr />
        <p>This request was submitted via the Lucentix bespoke design page.</p>
      `,
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: `"Lucentix" <no-reply@lucentix.com>`,
      to: email,
      subject: "Thank you for your bespoke jewelry request",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for sharing your design preferences with us.</p>
        <p>Here’s a summary of your bespoke jewelry request:</p>
        ${designSummary}
        <p>Our design team will reach out shortly to discuss your vision and next steps.</p>
        <p>Warm regards,<br><strong>Lucentix Team</strong></p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Failed to send bespoke design request" }, { status: 500 });
  }
}
