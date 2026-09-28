type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <header className="mx-auto w-full max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-burgundy">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 text-balance text-3xl font-semibold text-brand-navy sm:text-4xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-brand-muted sm:text-lg">{description}</p>
    </header>
  );
}
