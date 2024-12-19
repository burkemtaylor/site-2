import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

const API_KEY = process.env.MAILTRAP_API_KEY || "";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("Data", body);

  const options = {
    method: "POST",
    url: "https://send.api.mailtrap.io/api/send",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Api-Token": API_KEY,
    },
    data: {
      to: [{ email: "burkemtaylor@gmail.com", name: "Burke Taylor" }],
      from: { email: "contact@burketaylor.com", name: "BT Site" },
      subject: `New Contact Form Submission from ${body.name}`,
      text: `Hello, you have a new message from ${body.name} (${body.email}): ${body.message}`,
    },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Service Error" },
      {
        status: 500,
      },
    );
  }
}
