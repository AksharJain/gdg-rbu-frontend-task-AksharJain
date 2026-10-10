import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { question } = body;

    if (!question || typeof question !== "string") {
      return NextResponse.json({ error: "Invalid question" }, { status: 400 });
    }

    if (question.length > 300) {
      return NextResponse.json({ error: "Question too long (max 300 characters)" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server error: API key missing" }, { status: 500 });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [
              { text: "You are the assistant for GDG RBU (Google Developer Groups on Campus, Ramdeobaba University, Nagpur). Answer short and friendly, only about GDG RBU, its events, joining, and tech community topics. If asked something unrelated, politely say you can only help with GDG RBU." }
            ]
          },
          contents: [
            {
              parts: [{ text: question }]
            }
          ],
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API Error:", errText);
      return NextResponse.json({ error: "Failed to generate answer" }, { status: 500 });
    }

    const data = await response.json();
    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!answer) {
      return NextResponse.json({ error: "No answer generated" }, { status: 500 });
    }

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
