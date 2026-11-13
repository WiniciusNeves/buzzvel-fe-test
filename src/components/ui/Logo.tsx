import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  tone?: "ink" | "white";
  className?: string;
};

export function Logo({ tone = "ink", className }: LogoProps) {
  return (
    <Link
      href="#main"
      aria-label="Luma home"
      className={cn(
        "font-display text-[1.3125rem] leading-none font-extrabold tracking-[-0.04em]",
        tone === "ink" ? "text-ink" : "text-white",
        className,
      )}
    >
      luma.
    </Link>
  );
}
