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
import { neo, neoButtonClassName } from "../brutalist-styles";
import { useDashboardCtaHref } from "../utils/use-dashboard-cta";

export function LandingFooter() {
  const { t, locale, setLocale } = useLocale();
  const user = useAuthStore((s) => s.user);
  const ctaHref = useDashboardCtaHref();
  const groups = Object.values(t.footer.groups);
  const visibleLocales = landingBrand.landingLocales;

  return (
    <footer
      className={cn(
        neo.sectionBlue,
        "border-t-2 border-[var(--landing-ink)] text-white",
      )}
    >
      <div className="flex h-1.5">
        <div className="flex-1 bg-[var(--landing-coral)]" aria-hidden />
        <div className="flex-1 bg-[var(--landing-mint)]" aria-hidden />
        <div className="flex-1 bg-[var(--landing-violet)]" aria-hidden />
      </div>
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 border-b border-white/15 py-16 sm:py-20 lg:flex-row lg:gap-20">
          <div className="lg:w-[340px] lg:shrink-0">
            <p className="max-w-[300px] rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-[14px] leading-[1.7] text-white/85 sm:text-[15px]">
              {t.footer.tagline}
            </p>
            <div className="mt-4 flex items-center gap-3">
              {landingBrand.links.twitter ? (
                <Link
                  href={twitterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/50 transition-colors hover:text-[var(--landing-coral)]"
                >
                  <XMark className="size-4" />
                </Link>
              ) : null}
              {landingBrand.links.github ? (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/50 transition-colors hover:text-[var(--landing-mint)]"
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
                  className="text-white/50 transition-colors hover:text-[var(--landing-violet-soft)]"
                >
                  <DiscordMark className="size-4" />
                </Link>
              ) : null}
            </div>
            <div className="mt-6">
              <Link href={ctaHref} className={neoButtonClassName("coral")}>
                {user ? t.header.dashboard : t.footer.cta}
              </Link>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map((group) => (
              <div key={group.label}>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--landing-mint)]">
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
                        className="text-[14px] text-white/65 transition-colors hover:text-white"
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
          <p className="text-[12px] font-medium text-white/50">
            {t.footer.copyright.replace(
              "{year}",
              String(new Date().getFullYear()),
            )}
          </p>
          <div className="flex overflow-hidden rounded-xl border-2 border-white/25">
            {visibleLocales.map((l) => (
              <button
                type="button"
                key={l}
                onClick={() => setLocale(l)}
                className={cn(
                  "px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors",
                  l === locale
                    ? "bg-[var(--landing-coral)] text-[var(--landing-ink)]"
                    : "text-white/55 hover:bg-white/10 hover:text-white",
                )}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
