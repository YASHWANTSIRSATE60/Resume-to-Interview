import { PageHero } from "@/components/marketing/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Read the terms that govern usage of the R2I platform.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="These terms define responsibilities and expectations for R2I platform usage."
      />
      <section className="mx-auto w-full max-w-4xl space-y-4 px-4 py-12 text-brand-muted sm:px-6 lg:px-8">
        <p>By using R2I, you agree to lawful and appropriate use of the platform.</p>
        <p>Platform functionality may evolve as additional product modules are released.</p>
      </section>
    </>
  );
}
