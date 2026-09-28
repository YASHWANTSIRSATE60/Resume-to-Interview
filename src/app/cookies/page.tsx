import { PageHero } from "@/components/marketing/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description: "Learn how cookies are used to support secure session behavior in R2I.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        description="R2I uses essential cookies to support authentication and secure route access."
      />
      <section className="mx-auto w-full max-w-4xl space-y-4 px-4 py-12 text-brand-muted sm:px-6 lg:px-8">
        <p>Essential cookies are used for sign-in state and account authorization boundaries.</p>
        <p>Non-essential tracking cookies are not required for this foundation release.</p>
      </section>
    </>
  );
}
