import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
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

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "KM Education <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Free Trial Request — ${studentName}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send booking request." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Booking submission failed:", err);
    return NextResponse.json({ error: "Failed to send booking request." }, { status: 500 });
  }
}
