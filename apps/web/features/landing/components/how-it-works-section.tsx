"use client";

import Link from "next/link";
import { cn } from "@multica/ui/lib/utils";
import { useAuthStore } from "@multica/core/auth";
import { useLocale } from "../i18n";
import { landingBrand } from "../branding";
import { neo, neoButtonClassName } from "../brutalist-styles";
import { useDashboardCtaHref } from "../utils/use-dashboard-cta";
import { GitHubMark, githubUrl } from "./shared";

export function HowItWorksSection() {
  const { t } = useLocale();
  const user = useAuthStore((s) => s.user);
  const ctaHref = useDashboardCtaHref();

  return (
    <section
      id="how-it-works"
      className={cn(
        neo.sectionViolet,
        "border-y-2 border-[var(--landing-ink)]",
      )}
    >
      <div className="mx-auto max-w-[1320px] px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <p className={neo.label}>{t.howItWorks.label}</p>
        <h2
          className={cn(
            neo.heading,
            "mt-4 text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem]",
          )}
        >
          {t.howItWorks.headlineMain}
          <br />
          <span className="text-[var(--landing-blue)]">
            {t.howItWorks.headlineFaded}
          </span>
        </h2>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.howItWorks.steps.map((step, i) => (
            <div
              key={i}
              className={cn(
                neo.card,
                i % 2 === 0 ? neo.shadowBlue : neo.shadowCoral,
                "p-8 lg:p-9",
              )}
            >
              <span className="inline-flex rounded-lg border-2 border-[var(--landing-ink)] bg-[var(--landing-mint-soft)] px-2.5 py-1 text-[13px] font-bold tabular-nums text-[var(--landing-ink)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[16px] font-bold leading-snug sm:text-[17px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-[var(--landing-ink)]/70 sm:text-[15px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Link href={ctaHref} className={neoButtonClassName("primary")}>
            {user ? t.header.dashboard : t.howItWorks.cta}
          </Link>
          {landingBrand.links.github ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={neoButtonClassName("ghost")}
            >
              <GitHubMark className="size-4" />
              {t.howItWorks.ctaGithub}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
