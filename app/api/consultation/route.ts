import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import fs from "fs";

export async function POST(req: Request) {
  try {
    const { name, email, phone, date, time, subject } = await req.json();

    if (!name || !email || !phone || !date || !time || !subject) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // ---- GOOGLE CALENDAR SETUP ----
    const SCOPES = ["https://www.googleapis.com/auth/calendar"];
    const auth = new google.auth.GoogleAuth({
      keyFile: "./lucentix-service-account.json",
      scopes: SCOPES,
    });
    const calendar = google.calendar({ version: "v3", auth });

    // Combine date + time into RFC3339 format
    const startDateTime = new Date(`${date}T${time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + 45 * 60000); // 45 min meeting

    // ---- CREATE EVENT ----
    const event = {
        summary: `Lucentix Consultation — ${subject}`,
        description: `Consultation with ${name} (${email}, ${phone})`,
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: "Asia/Kolkata",
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: "Asia/Kolkata",
        },
      };

    const response = await calendar.events.insert({
        calendarId: "voravinit1@gmail.com",
        requestBody: event,
      });

    const meetLink = `https://meet.google.com/${Math.random().toString(36).substring(2, 7)}-${Math.random()
        .toString(36)
        .substring(2, 7)}-${Math.random().toString(36).substring(2, 7)}`;

    // ---- EMAIL SETUP ----
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ---- Email to you ----
    await transporter.sendMail({
      from: `"Lucentix Website" <no-reply@lucentix.com>`,
      to: "voravinit1@gmail.com",
      subject: `New Consultation Booking — ${subject} (${name})`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Google Meet Link:</strong> <a href="${meetLink}">${meetLink}</a></p>
      `,
    });

    // ---- Email to client ----
    await transporter.sendMail({
      from: `"Lucentix" <no-reply@lucentix.com>`,
      to: email,
      subject: `Your Lucentix Consultation — ${subject}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for scheduling a consultation with Lucentix.</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>Your consultation will be held via Google Meet:</p>
        <p><a href="${meetLink}">${meetLink}</a></p>
        <p>Warm regards,<br><strong>The Lucentix Team</strong></p>
      `,
    });

    return NextResponse.json({ ok: true, meetLink });
  } catch (error) {
    console.error("Consultation error:", error);
    return NextResponse.json({ error: "Failed to create consultation" }, { status: 500 });
  }
}