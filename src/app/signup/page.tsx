import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Sign Up",
  description: "Create your R2I account.",
  path: "/signup",
});

export default function SignupPage() {
  return (
    <section className="mx-auto w-full max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-brand-border bg-white p-6">
        <h1 className="text-2xl font-semibold text-brand-navy">Create account</h1>
        <p className="mt-2 text-sm text-brand-muted">Start building your AI-assisted career workflow.</p>
        <form className="mt-6 space-y-4" method="post" action="/api/auth/signup">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-brand-navy">
              Full name
            </label>
            <Input id="fullName" name="fullName" required autoComplete="name" />
          </div>
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
            <Input id="password" name="password" type="password" required autoComplete="new-password" />
          </div>
          <button type="submit" className={cn(buttonVariants({ className: "w-full" }))}>
            Sign up
          </button>
        </form>
        <p className="mt-4 text-sm text-brand-muted">
          Already have an account? <Link href="/login" className="text-brand-navy underline">Login</Link>
        </p>
      </div>
    </section>
  );
}
