import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerColumns } from "@/content/footer";

const COPYRIGHT_YEAR = 2026;

export function SiteFooter() {
  return (
    <footer className="bg-ink pt-[60px] pb-5 text-white lg:pt-20 lg:pb-10">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-[416px_repeat(3,minmax(0,208px))] lg:justify-between lg:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo tone="white" />
            <p className="mt-4 max-w-[240px] text-sm leading-6 text-on-ink">
              Practical learning for curious people.
            </p>
          </div>
          {footerColumns.map((column) => (
            <nav key={column.title} aria-labelledby={`footer-${column.title.toLowerCase()}`}>
              <h2
                id={`footer-${column.title.toLowerCase()}`}
                className="text-xs leading-4 font-semibold tracking-[0.12em] text-[#e7e7ec] uppercase"
              >
                {column.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm leading-6 text-on-ink transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 border-t border-white/25 pt-6 lg:mt-16 lg:pt-8">
          <p className="text-sm leading-5 text-[#e7e7ec]">© {COPYRIGHT_YEAR} Luma Learning</p>
        </div>
      </Container>
    </footer>
  );
}
