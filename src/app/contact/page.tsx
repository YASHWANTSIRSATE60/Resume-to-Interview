import { PageHero } from "@/components/marketing/page-hero";
import { ContactForm } from "@/features/contact/contact-form";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Connect with the R2I team for product or partnership inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the R2I team"
        description="Share your questions and we will respond as soon as possible."
      />
      <section className="mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-brand-border bg-white p-6">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
