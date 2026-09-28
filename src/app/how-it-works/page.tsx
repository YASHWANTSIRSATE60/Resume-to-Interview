import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { PageHero } from "@/components/marketing/page-hero";
import { howItWorksSteps } from "@/features/marketing/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "How R2I Works",
  description: "Understand the R2I workflow from candidate profile creation to interview preparation.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Workflow"
        title="A clear path from resume to interview"
        description="R2I is built around a structured journey so you can progress with confidence."
      />
      <section className="mx-auto grid w-full max-w-5xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:px-8">
        {howItWorksSteps.map((step) => (
          <Card key={step.title}>
            <CardTitle>{step.title}</CardTitle>
            <CardDescription className="mt-2">{step.description}</CardDescription>
          </Card>
        ))}
      </section>
    </>
  );
}
