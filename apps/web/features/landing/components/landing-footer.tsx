"use client";

import Link from "next/link";
import { cn } from "@multica/ui/lib/utils";
import { useAuthStore } from "@multica/core/auth";
import {
  XMark,
  GitHubMark,
  DiscordMark,
  githubUrl,
  twitterUrl,
  discordUrl,
} from "./shared";
import { useLocale, localeLabels } from "../i18n";
import { landingBrand } from "../branding";
import { brutalist, brutalistButtonClassName } from "../brutalist-styles";
import { useDashboardCtaHref } from "../utils/use-dashboard-cta";
import { LandingLogo } from "./landing-logo";

export function LandingFooter() {
  const { t, locale, setLocale } = useLocale();
  const user = useAuthStore((s) => s.user);
  const ctaHref = useDashboardCtaHref();
  const groups = Object.values(t.footer.groups);
  const visibleLocales = landingBrand.landingLocales;

  return (
    <footer
      className={cn(
        brutalist.sectionBlue,
        "border-t-[3px] border-[var(--landing-ink)] text-white",
      )}
    >
      <div className="h-2 bg-[var(--landing-orange)]" aria-hidden />
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 border-b-[3px] border-white/20 py-16 sm:py-20 lg:flex-row lg:gap-20">
          <div className="lg:w-[340px] lg:shrink-0">
            <Link href="#product" className="flex items-center gap-3">
              <LandingLogo variant="dark" />
            </Link>
            <p className="mt-4 max-w-[300px] border-l-4 border-[var(--landing-orange)] pl-4 text-[14px] leading-[1.7] text-white/75 sm:text-[15px]">
              {t.footer.tagline}
            </p>
            <div className="mt-4 flex items-center gap-3">
              {landingBrand.links.twitter ? (
                <Link
                  href={twitterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/50 transition-colors hover:text-[var(--landing-orange)]"
                >
                  <XMark className="size-4" />
                </Link>
              ) : null}
              {landingBrand.links.github ? (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/50 transition-colors hover:text-[var(--landing-orange)]"
                >
                  <GitHubMark className="size-4" />
                </Link>
              ) : null}
              {landingBrand.links.discord ? (
                <Link
                  href={discordUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  className="text-white/50 transition-colors hover:text-[var(--landing-orange)]"
                >
                  <DiscordMark className="size-4" />
                </Link>
              ) : null}
            </div>
            <div className="mt-6">
              <Link
                href={ctaHref}
                className={brutalistButtonClassName("orange")}
              >
                {user ? t.header.dashboard : t.footer.cta}
              </Link>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map((group) => (
              <div key={group.label}>
                <h4 className="text-[11px] font-black uppercase tracking-[0.16em] text-[var(--landing-orange)]">
                  {group.label}
                </h4>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="text-[14px] font-medium text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between py-6">
          <p className="text-[12px] font-medium uppercase tracking-wide text-white/45">
            {t.footer.copyright.replace(
              "{year}",
              String(new Date().getFullYear()),
            )}
          </p>
          <div className="flex items-center border-2 border-white/25">
            {visibleLocales.map((l) => (
              <button
                type="button"
                key={l}
                onClick={() => setLocale(l)}
                className={cn(
                  "px-3 py-1.5 text-[11px] font-black uppercase tracking-wider transition-colors",
                  l === locale
                    ? "bg-[var(--landing-orange)] text-[var(--landing-ink)]"
                    : "text-white/50 hover:text-white",
                )}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden border-t-[3px] border-white/15 pb-6 pt-4">
          <span
            className={cn(
              brutalist.headingOnDark,
              "text-[clamp(4rem,18vw,14rem)] lowercase opacity-90",
            )}
          >
            {landingBrand.nameDisplay}
          </span>
        </div>
      </div>
    </footer>
  );
}
