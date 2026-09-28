import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { buildSessionCookies } from "@/lib/auth";
import { toSafeError } from "@/lib/errors";
import { authenticateUser } from "@/services/auth/auth-service";
import { loginSchema } from "@/validators/auth";

export async function POST(request: Request) {
  try {
    const body = Object.fromEntries((await request.formData()).entries());
    const parsed = loginSchema.parse(body);
    const user = await authenticateUser(parsed);

    const store = await cookies();
    for (const cookie of buildSessionCookies(user.email, user.role)) {
      store.set(cookie.name, cookie.value, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
    }

    return NextResponse.redirect(new URL("/app", request.url));
  } catch (error) {
    const safe = toSafeError(error, "Login failed.");
    return NextResponse.json({ message: safe.message }, { status: safe.statusCode });
  }
}
