import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ContactForm } from "@/features/contact/ContactForm";
import type { ContactRequest } from "@/features/contact/contactSchema";

function setup(submitRequest = vi.fn<(request: ContactRequest) => Promise<void>>()) {
  const user = userEvent.setup();
  render(<ContactForm submitRequest={submitRequest} />);
  return { user, submitRequest };
}

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Full name"), "Ada Lovelace");
  await user.type(screen.getByLabelText("Email"), "ada@example.com");
  await user.type(screen.getByLabelText("Your question"), "Do you offer team plans?");
}

describe("ContactForm", () => {
  it("shows inline errors and does not submit an empty form", async () => {
    const { user, submitRequest } = setup();

    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(submitRequest).not.toHaveBeenCalled();
    expect(screen.getByLabelText("Full name")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText("Full name")).toHaveAccessibleDescription(
      "Please enter your full name.",
    );
    expect(screen.getByLabelText("Email")).toHaveAccessibleDescription(
      "Please enter a valid email address.",
    );
  });

  it("moves focus to the first invalid field", async () => {
    const { user } = setup();
    await user.type(screen.getByLabelText("Full name"), "Ada Lovelace");

    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(screen.getByLabelText("Email")).toHaveFocus();
  });

  it("sends the validated request and confirms success", async () => {
    const { user, submitRequest } = setup(vi.fn().mockResolvedValue(undefined));
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(submitRequest).toHaveBeenCalledWith({
      name: "Ada Lovelace",
      email: "ada@example.com",
      question: "Do you offer team plans?",
    });
    expect(await screen.findByRole("status")).toHaveTextContent(
      "Thanks, Ada! We’ll get back to you within 24 hours.",
    );
    expect(screen.getByLabelText("Full name")).toHaveValue("");
  });

  it("disables the button while the request is being sent", async () => {
    let resolveRequest: () => void = () => {};
    const pending = new Promise<void>((resolve) => {
      resolveRequest = resolve;
    });
    const { user } = setup(vi.fn().mockReturnValue(pending));
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(screen.getByRole("button", { name: "Sending…" })).toBeDisabled();
    resolveRequest();
    expect(await screen.findByRole("button", { name: "Send message" })).toBeEnabled();
  });

  it("explains the failure and keeps the typed data when sending fails", async () => {
    const { user } = setup(vi.fn().mockRejectedValue(new Error("Network down")));
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "We couldn’t send your message. Please try again.",
    );
    expect(screen.getByLabelText("Full name")).toHaveValue("Ada Lovelace");
  });
});
