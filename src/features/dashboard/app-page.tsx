type AppPageProps = {
  title: string;
  description: string;
};

export function AppPage({ title, description }: AppPageProps) {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold text-brand-navy">{title}</h1>
      <p className="max-w-3xl text-brand-muted">{description}</p>
      <div className="rounded-lg border border-dashed border-brand-border bg-white p-6 text-sm text-brand-muted">
        This workspace is ready for feature implementation.
      </div>
    </section>
  );
}
