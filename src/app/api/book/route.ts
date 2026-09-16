import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "welcome@km-education.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailAppPassword) {
    console.error("GMAIL_USER / GMAIL_APP_PASSWORD is not configured");
    return NextResponse.json({ error: "Booking is temporarily unavailable." }, { status: 500 });
  }

  const body = await req.json();
  const { studentName, parentName, email, phone, subjects, englishTexts } = body as {
    studentName?: string;
    parentName?: string;
    email?: string;
    phone?: string;
    subjects?: string[];
    englishTexts?: string;
  };

  if (!studentName || !parentName || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const subjectList = Array.isArray(subjects) ? subjects : [];

  const html = `
    <h2>New Free Trial Request</h2>
    <p><strong>Student Name:</strong> ${escapeHtml(studentName)}</p>
    <p><strong>Parent Name:</strong> ${escapeHtml(parentName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Subject(s):</strong> ${subjectList.length ? escapeHtml(subjectList.join(", ")) : "—"}</p>
    ${englishTexts ? `<p><strong>VCE English texts/framework:</strong> ${escapeHtml(englishTexts).replace(/\n/g, "<br>")}</p>` : ""}
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `KM Education <${gmailUser}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Free Trial Request — ${studentName}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Booking submission failed:", err);
    return NextResponse.json({ error: "Failed to send booking request." }, { status: 500 });
  }
}
