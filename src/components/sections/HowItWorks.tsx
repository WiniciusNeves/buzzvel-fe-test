import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepVisual } from "@/components/ui/StepVisual";
import { steps } from "@/content/home";
import { cn } from "@/lib/cn";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="cream" aria-labelledby="how-it-works-title">
      <SectionHeading
        id="how-it-works-title"
        eyebrow="How Luma works"
        title="Less browsing. More learning."
        align="center"
        className="reveal"
      />
      <div className="relative mt-10 md:mt-20 lg:mt-[108px]">
        <span
          aria-hidden="true"
          className="absolute top-7 right-[30%] left-[52px] hidden h-px bg-line-soft md:block"
        />
        <ol className="relative grid gap-0 md:grid-cols-3 md:gap-10 lg:gap-20">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={cn("relative reveal", index > 0 && "pt-[76px] md:pt-0")}
            >
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-[30px] left-7 h-[46px] w-px bg-line md:hidden"
                />
              ) : null}
              <StepVisual visual={step.visual} />
              <p className="mt-6 text-xs leading-4 font-semibold tracking-[0.15em] text-subtle uppercase">
                Step {step.number}
              </p>
              <h3 className="mt-4 font-display text-xl leading-8 font-semibold tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[320px] text-[0.9375rem] leading-6 text-muted lg:text-base lg:leading-7">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
