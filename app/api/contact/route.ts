import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  organisation?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

const optionalFields = ["phone", "organisation", "service"] as const;

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0f172a; width: 180px;">${label}</td>
      <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #334155;">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid form submission." },
      { status: 400 },
    );
  }

  if (getString(payload.website)) {
    return NextResponse.json({ success: true });
  }

  const name = getString(payload.name);
  const email = getString(payload.email);
  const message = getString(payload.message);
  const phone = getString(payload.phone);
  const organisation = getString(payload.organisation);
  const service = getString(payload.service);

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      {
        success: false,
        error: "Contact form is not configured yet.",
      },
      { status: 500 },
    );
  }

  const rows = [
    fieldRow("Name", name),
    fieldRow("Email", email),
    ...optionalFields
      .map((field) => {
        const label =
          field === "organisation"
            ? "Company / Organisation"
            : field === "service"
              ? "Service / Interest"
              : "Phone";
        const value =
          field === "organisation"
            ? organisation
            : field === "service"
              ? service
              : phone;
        return value ? fieldRow(label, value) : "";
      })
      .filter(Boolean),
    fieldRow("Message", message),
  ].join("");

  const html = `
    <div style="font-family: Arial, sans-serif; background: #f8fafc; padding: 24px;">
      <div style="max-width: 680px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
        <div style="background: #4f8f4f; color: #ffffff; padding: 20px 24px;">
          <h1 style="font-size: 20px; line-height: 1.3; margin: 0;">New Atria website enquiry</h1>
        </div>
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;

  const text = [
    "New Atria website enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    organisation ? `Company / Organisation: ${organisation}` : "",
    service ? `Service / Interest: ${service}` : "",
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Atria enquiry from ${name}`,
      html,
      text,
    });

    if (result.error) {
      return NextResponse.json(
        { success: false, error: "Unable to send your message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to send your message right now." },
      { status: 502 },
    );
  }
}
