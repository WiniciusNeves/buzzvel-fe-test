import { CategoryCard } from "@/components/ui/CategoryCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/content/home";

export function Categories() {
  return (
    <Section id="categories" tone="white" aria-labelledby="categories-title">
      <SectionHeading
        id="categories-title"
        eyebrow="Find your next skill"
        title="Learn something worth knowing."
        description="Short, practical courses designed around skills you can put to work immediately."
        className="max-w-[560px] reveal"
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
        {categories.map((category) => (
          <li key={category.number} className="reveal">
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
