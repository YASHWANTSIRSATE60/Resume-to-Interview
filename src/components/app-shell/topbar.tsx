import Link from "next/link";

import { authCookieNames } from "@/lib/auth";

export function AppTopbar() {
  return (
    <header className="border-b border-brand-border bg-white px-4 py-3 sm:px-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-brand-muted">Authenticated workspace</p>
        <form action="/api/auth/logout" method="post">
          <button
            type="submit"
            className="rounded-md border border-brand-border px-3 py-1.5 text-sm text-brand-navy hover:bg-brand-bg"
            aria-label={`Sign out and clear ${authCookieNames().join(", ")}`}
          >
            Sign out
          </button>
        </form>
      </div>
      <div className="mt-3 lg:hidden">
        <Link href="/app" className="text-sm text-brand-navy underline underline-offset-4">
          View app sections
        </Link>
      </div>
    </header>
  );
}
