import { PageHero } from "@/components/marketing/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Understand how R2I handles account and platform data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="R2I is designed with user data isolation and secure processing controls."
      />
      <section className="mx-auto w-full max-w-4xl space-y-4 px-4 py-12 text-brand-muted sm:px-6 lg:px-8">
        <p>We process only data required to operate the service and improve user outcomes.</p>
        <p>Access controls, protected routes, and validation layers are part of the platform foundation.</p>
      </section>
    </>
  );
}
