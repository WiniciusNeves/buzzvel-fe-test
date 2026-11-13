import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

const controlClassName =
  "w-full rounded-lg border bg-cream px-4 text-sm text-ink placeholder:text-subtle transition-colors focus-visible:border-primary focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20";

type FieldShellProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
};

function FieldShell({ id, label, error, children }: FieldShellProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#c2341b]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type InputFieldProps = Omit<ComponentPropsWithoutRef<"input">, "id"> & {
  id: string;
  label: string;
  error?: string;
};

export function InputField({ id, label, error, className, ...props }: InputFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error}>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          controlClassName,
          "h-12",
          error ? "border-[#c2341b]" : "border-line",
          className,
        )}
        {...props}
      />
    </FieldShell>
  );
}

type TextAreaFieldProps = Omit<ComponentPropsWithoutRef<"textarea">, "id"> & {
  id: string;
  label: string;
  error?: string;
};

export function TextAreaField({ id, label, error, className, ...props }: TextAreaFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error}>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          controlClassName,
          "min-h-[120px] resize-y py-3",
          error ? "border-[#c2341b]" : "border-line",
          className,
        )}
        {...props}
      />
    </FieldShell>
  );
}
