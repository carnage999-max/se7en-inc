import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (!payload?.name || !payload?.email || !payload?.message) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const toList =
      process.env.CONTACT_TO?.split(",").map((item) => item.trim()).filter(Boolean) ?? [];

    if (!process.env.RESEND_API_KEY || toList.length === 0) {
      return NextResponse.json({ error: "Email configuration missing" }, { status: 500 });
    }

    const subject = "SE7EN INC. Contact";
    const text = `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`;
    const html = `
      <div style="background:#0f0d0b;padding:36px;font-family:Inter,Arial,sans-serif;color:#ece6dc;">
        <div style="max-width:680px;margin:0 auto;border:1px solid rgba(193,160,88,0.35);background:#14110f;">
          <div style="padding:26px 28px;background:linear-gradient(165deg,#0f0d0b,#14110f 55%,#0f0d0b);">
            <div style="font-family:Cinzel,Times New Roman,serif;letter-spacing:0.28em;font-size:11px;color:#c1a058;text-transform:uppercase;">
              SE7EN INC.
            </div>
            <div style="margin-top:6px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#b8b0a4;">
              Holding Corporation for World-Changing Ideas
            </div>
            <div style="height:1px;background:linear-gradient(120deg,#8d6a2f,#c1a058,#e0c07a);margin:18px 0 0;"></div>
          </div>
          <div style="padding:26px 28px;">
            <h1 style="margin:0 0 6px;font-family:Cinzel,Times New Roman,serif;font-size:20px;color:#ece6dc;letter-spacing:0.08em;text-transform:uppercase;">
              Corporate Engagement Inquiry
            </h1>
            <p style="margin:0 0 18px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#b8b0a4;">
              SE7EN INC. Contact
            </p>
            <div style="border:1px solid rgba(79,74,68,0.6);padding:18px;background:rgba(15,13,11,0.75);">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#c1a058;">Name</p>
              <p style="margin:0 0 16px;font-size:15px;color:#ece6dc;">${payload.name}</p>
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#c1a058;">Email</p>
              <p style="margin:0 0 16px;font-size:15px;color:#ece6dc;">${payload.email}</p>
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#c1a058;">Message</p>
              <p style="margin:0;font-size:15px;line-height:1.7;color:#ece6dc;white-space:pre-wrap;">${payload.message}</p>
            </div>
          </div>
          <div style="height:2px;background:linear-gradient(120deg,#8d6a2f,#c1a058,#e0c07a);"></div>
          <div style="padding:18px 28px;background:#0f0d0b;color:#8f877c;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;">
            Institutional permanence. Structured execution. Authority by design.
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "SE7EN INC. <noreply@se7eninc.com>",
      to: toList,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Request failed" }, { status: 500 });
  }
}
