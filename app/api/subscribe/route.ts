import { NextResponse } from "next/server";

// Get Mailchimp configuration from environment variables
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const DATA_CENTER = process.env.MAILCHIMP_DATA_CENTER;

// Validate required environment variables
if (!MAILCHIMP_API_KEY || !AUDIENCE_ID || !DATA_CENTER) {
  throw new Error("Missing Mailchimp environment variables");
}

export async function POST(request: Request) {
  try {
    // Parse request body
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Prepare request to Mailchimp API
    const url = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
    const data = {
      email_address: email,
      status: "subscribed",
    };

    // Send request to Mailchimp
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    // Handle response
    if (response.ok) {
      return NextResponse.json(
        { message: "Subscribed successfully!" },
        { status: 201 }
      );
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.detail },
        { status: response.status }
      );
    }
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json(
      { error: "Server error, please try again" },
      { status: 500 }
    );
  }
}
