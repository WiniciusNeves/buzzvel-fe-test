"use client";

import { type FormEvent, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  type ContactField,
  type ContactRequest,
  contactSchema,
  type FieldErrors,
  getFieldErrors,
  MAX_QUESTION_LENGTH,
} from "./contactSchema";
import { InputField, TextAreaField } from "./FormField";
import { submitContactRequest } from "./submitContactRequest";

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; firstName: string }
  | { status: "error" };

type ContactFormProps = {
  submitRequest?: (request: ContactRequest) => Promise<void>;
};

const fieldOrder = ["name", "email", "question"] as const satisfies readonly ContactField[];

function readFormValues(form: HTMLFormElement): Record<ContactField, unknown> {
  const data = new FormData(form);
  return {
    name: data.get("name"),
    email: data.get("email"),
    question: data.get("question"),
  };
}

export function ContactForm({ submitRequest = submitContactRequest }: ContactFormProps) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const formRef = useRef<HTMLFormElement>(null);
  const idPrefix = useId();
  const fieldId = (field: ContactField) => `${idPrefix}-${field}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const result = contactSchema.safeParse(readFormValues(form));

    if (!result.success) {
      const nextErrors = getFieldErrors(result);
      setErrors(nextErrors);
      setSubmission({ status: "idle" });
      const firstInvalid = fieldOrder.find((field) => nextErrors[field] !== undefined);
      if (firstInvalid)
        form.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstInvalid))}`)?.focus();
      return;
    }

    setErrors({});
    setSubmission({ status: "submitting" });
    try {
      await submitRequest(result.data);
      formRef.current?.reset();
      setSubmission({ status: "success", firstName: result.data.name.split(" ")[0] ?? "" });
    } catch (error: unknown) {
      if (!(error instanceof Error)) throw error;
      setSubmission({ status: "error" });
    }
  }

  const isSubmitting = submission.status === "submitting";

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} aria-busy={isSubmitting}>
      <div className="flex flex-col gap-6">
        <InputField
          id={fieldId("name")}
          name="name"
          label="Full name"
          placeholder="Your name"
          autoComplete="name"
          error={errors.name}
        />
        <InputField
          id={fieldId("email")}
          name="email"
          type="email"
          label="Email"
          placeholder="youremail@example.com"
          autoComplete="email"
          inputMode="email"
          error={errors.email}
        />
        <TextAreaField
          id={fieldId("question")}
          name="question"
          label="Your question"
          placeholder="Tell us how we can help..."
          maxLength={MAX_QUESTION_LENGTH}
          error={errors.question}
        />
      </div>

      <Button type="submit" fullWidth disabled={isSubmitting} className="mt-6">
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>

      <div className="mt-4 empty:hidden" aria-live="polite">
        {submission.status === "success" ? (
          <p role="status" className="rounded-lg bg-primary-soft px-4 py-3 text-sm text-ink">
            Thanks, {submission.firstName}! We’ll get back to you within 24 hours.
          </p>
        ) : null}
      </div>
      {submission.status === "error" ? (
        <p role="alert" className="mt-4 rounded-lg bg-[#fdecea] px-4 py-3 text-sm text-[#8a2414]">
          We couldn’t send your message. Please try again.
        </p>
      ) : null}
    </form>
  );
}
