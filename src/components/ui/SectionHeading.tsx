import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  level?: 1 | 2;
  align?: "start" | "center";
  tone?: "default" | "inverse";
  className?: string;
};

const titleSizeByLevel = {
  1: "text-[2.5rem] leading-[1.1] lg:text-[4rem] lg:leading-[1.1]",
  2: "text-[2rem] leading-[1.125] lg:text-[3rem] lg:leading-[1.17]",
} as const;

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  level = 2,
  align = "start",
  tone = "default",
  className,
}: SectionHeadingProps) {
  const TitleTag = level === 1 ? "h1" : "h2";
  const isInverse = tone === "inverse";

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Eyebrow tone={isInverse ? "inverse" : "primary"}>{eyebrow}</Eyebrow>
      <TitleTag
        id={id}
        className={cn(
          "mt-4 font-display font-extrabold tracking-[-0.025em]",
          titleSizeByLevel[level],
          isInverse ? "text-white" : "text-ink",
        )}
      >
        {title}
      </TitleTag>
      {description ? (
        <p
          className={cn(
            "text-base leading-[1.625rem] lg:text-lg lg:leading-7",
            level === 1 ? "mt-6" : "mt-4",
            isInverse ? "text-white" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
