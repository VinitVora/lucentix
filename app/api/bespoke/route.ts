import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, selections } = await req.json();

    if (!name || !email || !phone || !selections) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Lucentix (owner)
    const designSummary = Object.entries(selections)
      .map(([step, value]) => `<p><strong>${step}:</strong> ${value}</p>`)
      .join("");

    await transporter.sendMail({
      from: `"Lucentix Website" <no-reply@lucentix.com>`,
      to: process.env.OWNER_EMAIL || "voravinit1@gmail.com",
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

    // ✨ Polished customer email
    await transporter.sendMail({
      from: `"Lucentix Jewels" <no-reply@lucentix.com>`,
      to: email,
      subject: `Your Bespoke Jewelry Request — Ref #${Date.now()}`,
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
            Thank you for taking the first step towards creating your <strong>bespoke Lucentix piece</strong>.
            Our artisans are excited to collaborate with you and bring your vision to life.
          </p>

          <p style="font-size:16px; line-height:1.6;">
            Below is a summary of your design preferences for our initial review:
          </p>

          <!-- Summary -->
          <div style="
            background-color:#ffffff !important;
            padding:20px;
            border-radius:10px;
            border:1px solid #eae7e0;
            margin:24px 0;
          ">
            <p style="font-size:17px; margin:0 0 12px 0; font-weight:bold; color:#b4975a !important;">
              Your Design Summary
            </p>
            ${designSummary}
          </div>

          <!-- Appreciation -->
          <p style="font-size:16px; line-height:1.6;">
            Our design specialist will connect with you within <strong>24 hours</strong>
            to discuss materials, gemstones, and any personal touches that make your piece truly yours.
          </p>

          <p style="margin-top:30px; font-size:13px; color:#2a2a2a !important;">
            Warm regards,<br/>
            <strong>The Lucentix Team</strong><br/>
            <a href="https://lucentix.com" style="color:#b4975a !important; text-decoration:none;">www.lucentix.com</a>
          </p>

          <hr style="margin:32px 0; border:none; border-top:1px solid #e0dcd5;" />

          <p style="font-size:13px; color:#999; text-align:center;">
            © ${new Date().getFullYear()} Lucentix Jewels. All rights reserved.<br/>
            You’re receiving this email because you submitted a bespoke jewelry request on our website.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { error: "Failed to send bespoke design request" },
      { status: 500 }
    );
  }
}
