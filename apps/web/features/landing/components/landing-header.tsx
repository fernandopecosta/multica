"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@multica/ui/lib/utils";
import { useAuthStore } from "@multica/core/auth";
import { useLocale } from "../i18n";
import { landingBrand } from "../branding";
import { brutalist } from "../brutalist-styles";
import { useDashboardCtaHref } from "../utils/use-dashboard-cta";
import { formatStarCount, useGithubStars } from "../utils/use-github-stars";
import { GitHubMark, githubUrl, headerButtonClassName } from "./shared";
import { LandingLogo } from "./landing-logo";

function navLabel(
  locale: string,
  labels: { "pt-BR": string; en: string },
): string {
  return locale === "pt-BR" ? labels["pt-BR"] : labels.en;
}

export function LandingHeader({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const { t, locale } = useLocale();
  const user = useAuthStore((s) => s.user);
  const stars = useGithubStars();
  const starsLabel =
    landingBrand.showGithubStars && stars != null
      ? formatStarCount(stars)
      : null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = landingBrand.navLinks.map((link) => ({
    href: link.href,
    label: navLabel(locale, link.labels),
  }));
  const ctaHref = useDashboardCtaHref();
  const ctaLabel = user ? t.header.dashboard : t.header.cta;
  const isDark = variant === "dark";

  return (
    <header
      className={cn(
        "relative inset-x-0 top-0 z-30 border-b-[3px] border-[var(--landing-ink)]",
        isDark ? "absolute bg-[var(--landing-blue)]/95" : "bg-[var(--landing-paper)]",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-6 lg:gap-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <LandingLogo variant={variant} />
          </Link>

          <nav
            aria-label={t.header.navigation}
            className="hidden items-center gap-1 md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClassName(variant)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <button
            type="button"
            aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className={cn(headerButtonClassName("ghost", variant), "px-3 md:hidden")}
          >
            {isMenuOpen ? (
              <X className="size-4" aria-hidden />
            ) : (
              <Menu className="size-4" aria-hidden />
            )}
          </button>
          {landingBrand.showGithubInHeader && landingBrand.links.github ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                headerButtonClassName("ghost", variant),
                "hidden lg:inline-flex",
              )}
            >
              <GitHubMark className="size-3.5" />
              {t.header.github}
              {starsLabel ? <GitHubStarsBadge label={starsLabel} /> : null}
            </Link>
          ) : null}
          <Link
            href={ctaHref}
            className={headerButtonClassName("solid", variant)}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          className={cn(
            "absolute left-4 right-4 top-[calc(100%+8px)] z-50 border-[3px] border-[var(--landing-ink)] bg-[var(--landing-blue)] p-2 text-white md:hidden",
            brutalist.shadow,
          )}
        >
          <nav aria-label={t.header.navigation} className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={mobileNavLinkClassName(variant)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function GitHubStarsBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 tabular-nums">
      <span aria-hidden className="h-3 w-px bg-current opacity-25" />
      {label}
    </span>
  );
}

function navLinkClassName(variant: "dark" | "light") {
  return cn(
    "inline-flex h-9 items-center px-3 text-[12px] font-black uppercase tracking-[0.1em] transition-colors",
    variant === "dark"
      ? "text-white/80 hover:text-[var(--landing-orange)]"
      : "text-[var(--landing-ink)]/70 hover:text-[var(--landing-blue)]",
  );
}

function mobileNavLinkClassName(variant: "dark" | "light") {
  return cn(
    "flex min-h-11 items-center gap-2 px-3 text-[13px] font-black uppercase tracking-[0.08em] transition-colors",
    variant === "dark"
      ? "text-white/90 hover:bg-white/10"
      : "text-[var(--landing-ink)] hover:bg-[var(--landing-blue-light)]",
  );
}
