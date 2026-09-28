import { Card, CardDescription, CardTitle } from "@/components/ui/card";

type FeatureGridItem = {
  title: string;
  description: string;
};

type FeatureGridProps = {
  items: FeatureGridItem[];
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
      {items.map((item) => (
        <Card key={item.title}>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription className="mt-2">{item.description}</CardDescription>
        </Card>
      ))}
    </section>
  );
}
