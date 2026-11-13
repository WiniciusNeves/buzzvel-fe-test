import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  tone?: "primary" | "inverse";
  className?: string;
};

export function Eyebrow({ children, tone = "primary", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-eyebrow font-semibold uppercase",
        tone === "primary" ? "text-primary" : "text-white",
        className,
      )}
    >
      {children}
    </p>
  );
}
