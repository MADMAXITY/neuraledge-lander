import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, industry, message } = body;

    // Send email using Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey || !toEmail || !fromEmail) {
      throw new Error("Email configuration missing");
    }

    const emailBody = `
New Contact Form Submission from NeuralEdge

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Industry: ${industry}

Message:
${message}

---
Sent from NeuralEdge Contact Form
    `.trim();

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        subject: `New Contact: ${name} (${industry})`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
