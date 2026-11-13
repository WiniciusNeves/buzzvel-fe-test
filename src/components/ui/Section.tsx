import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

export type SectionTone = "cream" | "white" | "primary" | "sun" | "ink";

const toneClassName = {
  cream: "bg-cream text-ink",
  white: "bg-white text-ink",
  primary: "bg-primary text-white",
  sun: "bg-sun-soft text-ink",
  ink: "bg-ink text-white",
} as const satisfies Record<SectionTone, string>;

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: SectionTone;
  containerClassName?: string;
};

export function Section({
  tone = "cream",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-[60px] lg:py-[100px]", toneClassName[tone], className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
