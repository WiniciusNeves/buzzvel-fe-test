import type { NavLink } from "./navigation";

export type FooterColumn = {
  readonly title: string;
  readonly links: readonly NavLink[];
};

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#categories" },
      { label: "Categories", href: "#categories" },
      { label: "Instructors", href: "#people" },
      { label: "For Teams", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#how-it-works" },
      { label: "Careers", href: "#contact" },
      { label: "Journal", href: "#testimonials" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#contact" },
      { label: "Privacy", href: "#contact" },
    ],
  },
] as const satisfies readonly FooterColumn[];
