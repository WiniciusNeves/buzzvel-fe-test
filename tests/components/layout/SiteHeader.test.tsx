import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/layout/SiteHeader";

function renderHeader() {
  const user = userEvent.setup();
  render(<SiteHeader />);
  const toggle = screen.getByRole("button", { name: /open menu/i });
  return { user, toggle };
}

describe("SiteHeader", () => {
  it("exposes the primary navigation as a labelled landmark", () => {
    renderHeader();

    const nav = screen.getByRole("navigation", { name: "Primary" });

    expect(within(nav).getByRole("link", { name: "Courses" })).toHaveAttribute(
      "href",
      "#categories",
    );
  });

  it("keeps the mobile menu closed by default", () => {
    const { toggle } = renderHeader();

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Mobile" })).not.toBeInTheDocument();
  });

  it("opens the mobile menu when the toggle is pressed", async () => {
    const { user, toggle } = renderHeader();

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveAccessibleName(/close menu/i);
    const menu = screen.getByRole("navigation", { name: "Mobile" });
    expect(within(menu).getByRole("link", { name: "Start learning" })).toBeInTheDocument();
  });

  it("closes the menu on Escape and returns focus to the toggle", async () => {
    const { user, toggle } = renderHeader();
    await user.click(toggle);

    await user.keyboard("{Escape}");

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });

  it("closes the menu after a link is chosen", async () => {
    const { user, toggle } = renderHeader();
    await user.click(toggle);
    const menu = screen.getByRole("navigation", { name: "Mobile" });

    await user.click(within(menu).getByRole("link", { name: "Community" }));

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("locks page scroll only while the menu is open", async () => {
    const { user, toggle } = renderHeader();

    await user.click(toggle);
    expect(document.body.style.overflow).toBe("hidden");

    await user.click(toggle);
    expect(document.body.style.overflow).toBe("");
  });

  it("makes the rest of the page inert while the menu is open", async () => {
    const user = userEvent.setup();
    render(
      <>
        <SiteHeader />
        <main>Page content</main>
        <footer>Footer</footer>
      </>,
    );
    const toggle = screen.getByRole("button", { name: /open menu/i });

    await user.click(toggle);
    expect(screen.getByRole("main", { hidden: true })).toHaveAttribute("inert");
    expect(screen.getByRole("contentinfo", { hidden: true })).toHaveAttribute("inert");

    await user.keyboard("{Escape}");
    expect(screen.getByRole("main")).not.toHaveAttribute("inert");
  });
});
