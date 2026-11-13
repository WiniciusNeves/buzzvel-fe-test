import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("has a single h1 and labels every section with a heading", () => {
    render(<HomePage />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    const sectionTitles = screen
      .getAllByRole("heading", { level: 2 })
      .map((heading) => heading.textContent);
    expect(sectionTitles).toEqual(
      expect.arrayContaining([
        "Learn something worth knowing.",
        "Designing products people understand.",
        "Less browsing. More learning.",
        "Meet international students & teachers",
        "Get in touch",
        "What will you learn next?",
      ]),
    );
  });

  it("exposes header, main and footer landmarks", () => {
    render(<HomePage />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("gives every image an alt attribute", () => {
    const { container } = render(<HomePage />);

    const images = Array.from(container.querySelectorAll("img"));
    expect(images.length).toBeGreaterThan(0);
    expect(images.every((image) => image.hasAttribute("alt"))).toBe(true);
  });

  it("points in-page links at sections that exist", () => {
    const { container } = render(<HomePage />);

    const anchorTargets = new Set(
      Array.from(container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')).map((link) =>
        link.getAttribute("href"),
      ),
    );
    for (const target of anchorTargets) {
      expect(container.querySelector(target ?? ""), `missing ${target}`).not.toBeNull();
    }
  });

  it("presents the course categories as a list of four cards", () => {
    render(<HomePage />);

    const categoriesSection = screen.getByRole("region", {
      name: "Learn something worth knowing.",
    });
    expect(within(categoriesSection).getAllByRole("article")).toHaveLength(4);
    expect(
      within(categoriesSection).getByRole("link", { name: "Explore Product Design" }),
    ).toBeInTheDocument();
  });
});
