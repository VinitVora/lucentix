import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message, consultationType } =
      await req.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // for port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to the owner
    const ownerMail = {
      from: `"Lucentix Website" <no-reply@lucentix.com>`,
      to: "voravinit1@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Consultation Type:</strong> ${consultationType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Email to the customer — refined, no dark blocks
    const userMail = {
      from: `"Lucentix Jewels" <no-reply@lucentix.com>`,
      to: email,
      subject: `Thank you for contacting Lucentix — Ref #${Date.now()}`, // Prevent Gmail thread merge
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

          <!-- Main Body -->
          <p style="font-size:16px; line-height:1.6; color:#2a2a2a !important;">
            Thank you for reaching out to <strong>Lucentix Jewels</strong>.
            We’ve received your message and our team will respond within <strong>24 hours</strong>.
          </p>

          <!-- Summary Box -->
          <div style="
            background-color:#ffffff !important;
            padding:20px;
            border-radius:10px;
            border:1px solid #eae7e0;
            margin:24px 0;
          ">
            <p style="font-size:17px; margin:0 0 12px 0; font-weight:bold; color:#b4975a !important;">Your Request Summary</p>
            <p style="margin:0; color:#2a2a2a !important;"><strong>Consultation Type:</strong> ${consultationType}</p>
            <p style="margin:0; color:#2a2a2a !important;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin:0; color:#2a2a2a !important;"><strong>Your Message:</strong> ${message}</p>
          </div>

          <!-- Appreciation -->
          <p style="font-size:16px; line-height:1.6; color:#2a2a2a !important;">
            We appreciate your trust in our craftsmanship.
            Your story inspires every piece we create.
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
            You’re receiving this email because you contacted us via our website.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(ownerMail);
    await transporter.sendMail(userMail);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending contact form email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}