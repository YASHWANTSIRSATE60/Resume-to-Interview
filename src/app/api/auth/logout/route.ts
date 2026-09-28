import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { authCookieNames } from "@/lib/auth";

export async function POST(request: Request) {
  const store = await cookies();

  for (const name of authCookieNames()) {
    store.set(name, "", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 0,
    });
  }

  return NextResponse.redirect(new URL("/", request.url));
}
