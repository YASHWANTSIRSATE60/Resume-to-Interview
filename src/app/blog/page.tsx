import { PageHero } from "@/components/marketing/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description: "Product updates, architecture notes, and career workflow guidance from the R2I team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights and updates"
        description="Editorial and product content publishing architecture is ready for upcoming posts."
      />
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="rounded-xl border border-brand-border bg-white p-6 text-brand-muted">
          No posts published yet.
        </p>
      </section>
    </>
  );
}
