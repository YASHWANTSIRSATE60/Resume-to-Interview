import { FeatureGrid } from "@/components/marketing/feature-grid";
import { PageHero } from "@/components/marketing/page-hero";
import { coreFeatures } from "@/features/marketing/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "R2I Features",
  description: "Explore the production-ready product foundation and core modules available in R2I.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Designed for career momentum"
        description="Every module in R2I supports your end-to-end job search and interview preparation workflow."
      />
      <FeatureGrid items={[...coreFeatures]} />
    </>
  );
}
