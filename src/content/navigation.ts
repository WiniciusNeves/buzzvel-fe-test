export type NavLink = {
  readonly label: string;
  readonly href: string;
};

export const primaryNav = [
  { label: "Courses", href: "#categories" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#people" },
  { label: "About", href: "#how-it-works" },
] as const satisfies readonly NavLink[];

export const headerActions = {
  login: { label: "Log in", href: "#contact" },
  signup: { label: "Start learning", href: "#categories" },
} as const satisfies Record<string, NavLink>;
