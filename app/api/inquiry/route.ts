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

    // Configure transporter
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
      to: process.env.OWNER_EMAIL || "voravinit1@gmail.com",
      subject: `Lucentix Inquiry — ${productName}`,
      html: `
        <div style="font-family: 'Cormorant Garamond', serif; color: #2a2a2a; background: #faf8f3; padding: 30px; border-radius: 10px; border: 1px solid #e0dcd5; max-width: 600px; margin: auto;">
          <h2 style="color: #b4975a;">New Product Inquiry</h2>
          <img src="${productImage}" alt="${productName}" style="width: 100%; max-width: 300px; border-radius: 8px; margin: 16px 0;" />
          <p><strong>Product:</strong> ${productName}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr style="margin: 20px 0; border-top: 1px solid #e0dcd5;" />
          <p style="font-size: 13px; color: #999;">Inquiry submitted via the Lucentix Collection page.</p>
        </div>
      `,
    });

    // ✨ Auto-reply to customer — fully branded
    await transporter.sendMail({
      from: `"Lucentix Jewels" <no-reply@lucentix.com>`,
      to: email,
      subject: `Thank you for your interest in ${productName} — Ref #${Date.now()}`,
      html: `
        <div style="
          font-family:'Cormorant Garamond', serif;
          background-color:#faf8f3 !important;
          color:#2a2a2a !important;
          padding:40px;
          border-radius:12px;
          max-width:600px;
          margin:auto;
          border:1px solid #e0dcd5;
          color-scheme: light;
        ">
          <!-- Header -->
          <div style="text-align:center; margin-bottom:24px;">
            <img src="https://lucentix.com/logo.png" alt="Lucentix Logo" style="height:60px; margin-bottom:12px;" />
            <h1 style="font-family:'Playfair Display',serif; font-size:28px; color:#b4975a !important; margin:0;">
              Lucentix Jewels
            </h1>
          </div>

          <!-- Greeting -->
           <p style="font-size:18px; color:#2a2a2a !important; margin-top:20px;">
            Hi <strong>${name}</strong>,
          </p>

          <!-- Body -->
          <p style="font-size:16px; line-height:1.6;">
            Thank you for your interest in our <strong>${productName}</strong>.  
            Our team has received your inquiry and will personally get in touch within <strong>24 hours</strong> with pricing and availability details.
          </p>

          <!-- Product image -->
          <div style="text-align:center; margin:20px 0;">
            <img src="${productImage}" alt="${productName}" style="width:100%; max-width:320px; border-radius:10px; border:1px solid #eae7e0;" />
            <p style="margin-top:10px; font-style:italic; color:#555;">${productName}</p>
          </div>

          <!-- Appreciation -->
          <p style="font-size:16px; line-height:1.6;">
            Each Lucentix piece is handcrafted to reflect the light of your story — timeless, refined, and unmistakably yours.
          </p>

          <!-- Footer -->
          <p style="margin-top:30px; font-size:13px; color:#2a2a2a !important;">
            Warm regards,<br/>
            <strong>The Lucentix Team</strong><br/>
            <a href="https://lucentix.com" style="color:#b4975a !important; text-decoration:none;">www.lucentix.com</a>
          </p>

          <hr style="margin:32px 0; border:none; border-top:1px solid #e0dcd5;" />

          <p style="font-size:13px; color:#999; text-align:center;">
            © ${new Date().getFullYear()} Lucentix Jewels. All rights reserved.<br/>
            You’re receiving this email because you made a product inquiry on our website.
          </p>
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