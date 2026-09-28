import { PageHero } from "@/components/marketing/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About R2I",
  description: "Learn about the mission and architecture principles behind R2I.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for modern job seekers"
        description="R2I is designed as a secure, modular AI Career Agent that supports every step from resume to interview."
      />
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-base leading-7 text-brand-muted">
          Our focus is to create a trustworthy platform with strong data boundaries, accessibility, and maintainable architecture.
          This foundation enables reliable delivery of future AI career workflows without compromising user privacy or product quality.
        </p>
      </section>
    </>
  );
}
