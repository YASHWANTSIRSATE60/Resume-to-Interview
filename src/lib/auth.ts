import { randomUUID } from "node:crypto";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import type { AuthSession, UserRole } from "@/types/auth";

const SESSION_COOKIE = "r2i_session";
const ROLE_COOKIE = "r2i_role";
const USER_COOKIE = "r2i_user";

export async function getSession(): Promise<AuthSession | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  const email = store.get(USER_COOKIE)?.value;
  const role = (store.get(ROLE_COOKIE)?.value as UserRole | undefined) ?? "user";

  if (!token || !email) {
    return null;
  }

  return {
    token,
    user: {
      id: token,
      email,
      role,
    },
  };
}

export async function requireSession() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return session;
}

export async function requireAdminSession() {
  const session = await requireSession();

  if (session.user.role !== "admin") {
    redirect("/app");
  }

  return session;
}

export function buildSessionCookies(email: string, role: UserRole = "user") {
  const token = randomUUID();

  return [
    {
      name: SESSION_COOKIE,
      value: token,
    },
    {
      name: USER_COOKIE,
      value: email,
    },
    {
      name: ROLE_COOKIE,
      value: role,
    },
  ] as const;
}

export function authCookieNames() {
  return [SESSION_COOKIE, USER_COOKIE, ROLE_COOKIE] as const;
}
