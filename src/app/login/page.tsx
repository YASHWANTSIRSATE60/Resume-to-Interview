import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Login",
  description: "Access your R2I account.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <section className="mx-auto w-full max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-brand-border bg-white p-6">
        <h1 className="text-2xl font-semibold text-brand-navy">Welcome back</h1>
        <p className="mt-2 text-sm text-brand-muted">Sign in to continue your R2I journey.</p>
        <form className="mt-6 space-y-4" method="post" action="/api/auth/login">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand-navy">
              Email
            </label>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-brand-navy">
              Password
            </label>
            <Input id="password" name="password" type="password" required autoComplete="current-password" />
          </div>
          <button type="submit" className={cn(buttonVariants({ className: "w-full" }))}>
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-brand-muted">
          New to R2I? <Link href="/signup" className="text-brand-navy underline">Create an account</Link>
        </p>
      </div>
    </section>
  );
}
