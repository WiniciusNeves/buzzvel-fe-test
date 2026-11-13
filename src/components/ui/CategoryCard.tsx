import Link from "next/link";
import type { Category } from "@/content/home";
import { ArrowRightIcon } from "./icons";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition duration-200 focus-within:border-primary hover:-translate-y-1 hover:border-primary hover:shadow-card lg:min-h-[264px] lg:p-7">
      <span className="self-start rounded-md bg-primary-soft px-2 py-1 text-xs leading-4 font-semibold tracking-[0.1em] text-primary">
        {category.number}
      </span>
      <h3 className="mt-6 font-display text-xl leading-7 font-semibold tracking-[-0.01em] text-ink lg:leading-8">
        {category.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-subtle">{category.description}</p>
      <Link
        href={category.href}
        aria-label={`Explore ${category.title}`}
        className="mt-6 inline-flex items-center gap-2.5 self-start text-sm font-semibold text-ink after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-primary lg:mt-auto lg:pt-6"
      >
        Explore
        <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
