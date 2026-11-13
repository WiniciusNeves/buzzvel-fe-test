import { z } from "zod";

export const MIN_QUESTION_LENGTH = 10;
export const MAX_QUESTION_LENGTH = 1000;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().pipe(z.email("Please enter a valid email address.")),
  question: z
    .string()
    .trim()
    .min(MIN_QUESTION_LENGTH, `Tell us a bit more (at least ${MIN_QUESTION_LENGTH} characters).`)
    .max(MAX_QUESTION_LENGTH, `Please keep it under ${MAX_QUESTION_LENGTH} characters.`),
});

export type ContactRequest = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactRequest;
export type FieldErrors = Partial<Record<ContactField, string>>;

const contactFields = contactSchema.keyof().options;

function isContactField(value: unknown): value is ContactField {
  return contactFields.some((field) => field === value);
}

export function getFieldErrors(result: z.ZodSafeParseResult<ContactRequest>): FieldErrors {
  if (result.success) return {};

  const errors: FieldErrors = {};
  for (const issue of result.error.issues) {
    const [field] = issue.path;
    if (isContactField(field) && errors[field] === undefined) {
      errors[field] = issue.message;
    }
  }
  return errors;
}
