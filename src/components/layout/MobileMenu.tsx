"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { buttonClassName } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { headerActions, primaryNav } from "@/content/navigation";

const DESKTOP_QUERY = "(min-width: 1024px)";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    }

    const desktopQuery =
      typeof window.matchMedia === "function" ? window.matchMedia(DESKTOP_QUERY) : null;
    function handleViewportChange(event: MediaQueryListEvent) {
      if (event.matches) setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery?.addEventListener("change", handleViewportChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery?.removeEventListener("change", handleViewportChange);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-9 items-center justify-center rounded-lg text-ink transition-colors hover:bg-primary-soft"
      >
        {isOpen ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
      </button>

      <div
        id={panelId}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full h-[calc(100dvh-68px)] overflow-y-auto border-t border-line bg-cream px-5 pt-6 pb-10 motion-safe:animate-reveal"
      >
        {isOpen ? (
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {primaryNav.map((item) => (
                <li key={item.href} className="border-b border-line-soft">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-4 font-display text-xl font-bold text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href={headerActions.signup.href}
                onClick={closeMenu}
                className={buttonClassName({ fullWidth: true })}
              >
                {headerActions.signup.label}
              </Link>
              <Link
                href={headerActions.login.href}
                onClick={closeMenu}
                className={buttonClassName({ variant: "secondary", fullWidth: true })}
              >
                {headerActions.login.label}
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </div>
  );
}
