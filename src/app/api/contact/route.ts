import { NextResponse } from "next/server";

import { toSafeError } from "@/lib/errors";
import { submitContactMessage } from "@/services/contact/contact-service";
import { contactMessageSchema } from "@/validators/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactMessageSchema.parse(body);

    await submitContactMessage(parsed);

    return NextResponse.json({ message: "Message received." }, { status: 202 });
  } catch (error) {
    const safe = toSafeError(error, "Unable to submit message.");
    return NextResponse.json({ message: safe.message }, { status: safe.statusCode });
  }
}
