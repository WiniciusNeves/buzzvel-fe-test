import Image from "next/image";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredCourse } from "@/content/home";

export function FeaturedCourse() {
  return (
    <Section
      id="featured-course"
      tone="primary"
      aria-labelledby="featured-course-title"
      containerClassName="grid items-center gap-12 lg:grid-cols-2 lg:gap-[60px]"
    >
      <div className="relative reveal">
        <div className="relative aspect-[362/280] overflow-hidden rounded-2xl md:aspect-[16/9] lg:aspect-[538/408]">
          <Image
            src={featuredCourse.image.src}
            alt={featuredCourse.image.alt}
            fill
            quality={90}
            sizes="(min-width: 1024px) 538px, (min-width: 768px) 688px, calc(100vw - 40px)"
            className="object-cover"
          />
        </div>
        <p className="absolute -top-3 -left-3 rounded bg-sun px-3 py-1.5 text-xs leading-4 font-semibold tracking-[0.12em] text-ink uppercase">
          Featured course
        </p>
      </div>

      <div className="reveal">
        <SectionHeading
          id="featured-course-title"
          tone="inverse"
          eyebrow="Most popular this month"
          title={featuredCourse.title}
        />
        <p className="mt-6 text-[0.9375rem] leading-6 lg:text-base lg:leading-7">
          {featuredCourse.description}
        </p>
        <p className="mt-6 text-[0.9375rem] lg:text-base">
          with {featuredCourse.instructor.name} · {featuredCourse.instructor.role}
        </p>
        <ul aria-label="Course details" className="mt-6 flex flex-wrap gap-3">
          {featuredCourse.facts.map((fact) => (
            <li
              key={fact}
              className="rounded-lg border border-line/80 px-3.5 py-2 text-sm leading-5 lg:px-3.5"
            >
              {fact}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:gap-7">
          <ButtonLink href="#contact" variant="sun" className="w-full sm:w-auto">
            View course
          </ButtonLink>
          <ArrowLink href="#categories">Browse all courses</ArrowLink>
        </div>
      </div>
    </Section>
  );
}
