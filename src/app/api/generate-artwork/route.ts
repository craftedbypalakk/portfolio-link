import { NextRequest, NextResponse } from "next/server";

const IMAGEN_API_KEY = process.env.IMAGEN_API_KEY ?? "";
const IMAGEN_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict";

const MAX_PROMPT_LENGTH = 1000;

export const POST = async (request: NextRequest) => {
  if (!IMAGEN_API_KEY) {
    return NextResponse.json(
      { error: "Image generation is not configured." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const prompt =
      typeof body?.prompt === "string"
        ? body.prompt.slice(0, MAX_PROMPT_LENGTH)
        : "";

    if (!prompt) {
      return NextResponse.json(
        { error: "A valid prompt is required." },
        { status: 400 }
      );
    }

    let response: Response | null = null;
    let retries = 0;
    const maxRetries = 5;

    while (retries <= maxRetries) {
      try {
        response = await fetch(`${IMAGEN_ENDPOINT}?key=${IMAGEN_API_KEY}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            instances: [{ prompt }],
            parameters: { sampleCount: 1 },
          }),
        });
        if (response.ok) break;
      } catch {
        if (retries === maxRetries) {
          return NextResponse.json(
            { error: "Generation service is unreachable." },
            { status: 502 }
          );
        }
      }

      const delay = Math.pow(2, retries) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
      retries++;
    }

    if (!response?.ok) {
      return NextResponse.json(
        { error: "Generation failed." },
        { status: 502 }
      );
    }

    const result = await response.json();
    const base64Data: string | undefined =
      result.predictions?.[0]?.bytesBase64Encoded;

    if (!base64Data) {
      return NextResponse.json(
        { error: "No image data received." },
        { status: 502 }
      );
    }

    return NextResponse.json({ image: base64Data });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
};
