import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { ArrowRightIcon } from "./icons";

type ArrowLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function ArrowLink({ className, children, ...props }: ArrowLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-2.5 text-[0.9375rem] font-semibold underline-offset-4 hover:underline",
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
