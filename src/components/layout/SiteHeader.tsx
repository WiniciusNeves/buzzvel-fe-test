import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { headerActions, primaryNav } from "@/content/navigation";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-sm">
      <Container className="relative flex h-[68px] items-center justify-between lg:h-[70px]">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={headerActions.login.href}
            className="px-4 py-2.5 text-sm text-muted transition-colors hover:text-ink"
          >
            {headerActions.login.label}
          </Link>
          <ButtonLink href={headerActions.signup.href} size="md">
            {headerActions.signup.label}
          </ButtonLink>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
