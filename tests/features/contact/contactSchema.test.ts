import { describe, expect, it } from "vitest";
import { contactSchema, getFieldErrors } from "@/features/contact/contactSchema";

const validInput = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  question: "Do you offer team plans for ten people?",
};

describe("contactSchema", () => {
  it("accepts a complete request and trims surrounding whitespace", () => {
    const result = contactSchema.safeParse({ ...validInput, name: "  Ada Lovelace  " });

    expect(result.success).toBe(true);
    expect(result.data?.name).toBe("Ada Lovelace");
  });

  it("rejects a name shorter than two characters", () => {
    const result = contactSchema.safeParse({ ...validInput, name: "A" });

    expect(getFieldErrors(result)).toEqual({ name: "Please enter your full name." });
  });

  it("rejects an invalid email address", () => {
    const result = contactSchema.safeParse({ ...validInput, email: "ada@" });

    expect(getFieldErrors(result)).toEqual({ email: "Please enter a valid email address." });
  });

  it("rejects a question that is too short to be useful", () => {
    const result = contactSchema.safeParse({ ...validInput, question: "Hi" });

    expect(getFieldErrors(result)).toEqual({
      question: "Tell us a bit more (at least 10 characters).",
    });
  });

  it("reports every missing field at once", () => {
    const result = contactSchema.safeParse({ name: "", email: "", question: "" });

    expect(Object.keys(getFieldErrors(result))).toEqual(["name", "email", "question"]);
  });

  it("returns no errors for a valid request", () => {
    expect(getFieldErrors(contactSchema.safeParse(validInput))).toEqual({});
  });
});
