import { PageHero } from "@/components/marketing/page-hero";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pricing",
  description: "Review transparent pricing architecture for R2I plans and billing readiness.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple and transparent"
        description="R2I billing infrastructure is prepared for tiered plans and subscription lifecycle management."
      />
      <section className="mx-auto grid w-full max-w-5xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:px-8">
        <Card>
          <CardTitle>Starter</CardTitle>
          <CardDescription className="mt-2">
            Foundation for individual candidates beginning their AI-assisted application workflow.
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>Professional</CardTitle>
          <CardDescription className="mt-2">
            Expanded capabilities for active seekers who require deeper workflow control and analytics.
          </CardDescription>
        </Card>
      </section>
    </>
  );
}
