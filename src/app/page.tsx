import Link from "next/link";

import { FeatureGrid } from "@/components/marketing/feature-grid";
import { PageHero } from "@/components/marketing/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { coreFeatures, homepageJourney } from "@/features/marketing/content";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "From Resume to Interview, Powered by AI",
  description:
    "R2I is your AI Career Agent for profile building, job discovery, matching, tailoring, and interview preparation.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="R2I"
        title="From Resume to Interview, Powered by AI"
        description="Your AI Career Agent for a focused, structured path from profile creation to interview readiness."
      />
      <section className="mx-auto mt-8 w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-brand-border bg-white p-4">
          {homepageJourney.map((step) => (
            <span
              key={step}
              className="rounded-full border border-brand-border bg-brand-bg px-3 py-1 text-xs font-medium text-brand-muted"
            >
              {step}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/signup" className={cn(buttonVariants({ size: "lg" }))}>
            Start with R2I
          </Link>
          <Link href="/how-it-works" className={cn(buttonVariants({ size: "lg", variant: "secondary" }))}>
            Explore workflow
          </Link>
        </div>
      </section>
      <FeatureGrid items={[...coreFeatures]} />
    </>
  );
}
