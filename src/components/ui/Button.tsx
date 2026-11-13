import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "sun";
export type ButtonSize = "md" | "lg";

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

const variantClassName = {
  primary: "bg-primary text-white hover:bg-primary-strong",
  secondary: "border border-line bg-white text-ink hover:border-ink",
  sun: "bg-sun text-ink hover:bg-sun-strong",
} as const satisfies Record<ButtonVariant, string>;

const sizeClassName = {
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-7 text-[0.9375rem]",
} as const satisfies Record<ButtonSize, string>;

export function buttonClassName({
  variant = "primary",
  size = "lg",
  fullWidth = false,
  className,
}: ButtonStyleOptions = {}): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    variantClassName[variant],
    sizeClassName[size],
    fullWidth && "w-full",
    className,
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & Omit<ButtonStyleOptions, "className">;

export function Button({
  variant,
  size,
  fullWidth,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, fullWidth, className })}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> &
  Omit<ButtonStyleOptions, "className">;

export function ButtonLink({ variant, size, fullWidth, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClassName({ variant, size, fullWidth, className })} {...props} />;
}
