import { PageHero } from "@/components/marketing/page-hero";
import { createPageMetadata } from "@/lib/metadata";

const faqs = [
  {
    question: "What does R2I do?",
    answer: "R2I is an AI Career Agent that guides users from resume to interview through a structured workflow.",
  },
  {
    question: "Is my data isolated per account?",
    answer: "Yes. The architecture is designed with user data isolation and protected routes as core requirements.",
  },
  {
    question: "Can I access R2I on mobile devices?",
    answer: "Yes. The public site and app shell foundation are built responsively for desktop and mobile usage.",
  },
] as const;

export const metadata = createPageMetadata({
  title: "Frequently Asked Questions",
  description: "Get quick answers to common R2I product and architecture questions.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions"
        description="Answers about product scope, security architecture, and platform foundations."
      />
      <section className="mx-auto w-full max-w-4xl space-y-4 px-4 py-12 sm:px-6 lg:px-8">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-xl border border-brand-border bg-white p-6">
            <h2 className="text-lg font-semibold text-brand-navy">{faq.question}</h2>
            <p className="mt-2 text-brand-muted">{faq.answer}</p>
          </article>
        ))}
      </section>
    </>
  );
}
