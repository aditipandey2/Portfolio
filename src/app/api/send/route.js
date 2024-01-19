import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = "aditipandey@outlook.com";

export async function POST(req, res) {
  // Log the raw request body
  const requestBody = await req.text();
  console.log('Request Body:', requestBody);

  // Check if the request body is empty
  if (!requestBody) {
    return NextResponse.json({ error: 'Empty request body' });
  }

  try {
    const { email, subject, message } = JSON.parse(requestBody);
    console.log(email, subject, message);

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to parse JSON or send email' });
  }
}
