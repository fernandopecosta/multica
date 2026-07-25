"use client";

import Link from "next/link";
import { cn } from "@multica/ui/lib/utils";
import { useAuthStore } from "@multica/core/auth";
import { docsHrefForLocale, useLocale } from "../i18n";
import { landingBrand } from "../branding";
import { brutalist, brutalistButtonClassName } from "../brutalist-styles";
import { useDashboardCtaHref } from "../utils/use-dashboard-cta";
import { GitHubMark, githubUrl } from "./shared";

export function HowItWorksSection() {
  const { t, locale } = useLocale();
  const user = useAuthStore((s) => s.user);
  const ctaHref = useDashboardCtaHref();

  return (
    <section
      id="how-it-works"
      className={cn(brutalist.sectionOrange, "border-y-[3px] border-[var(--landing-ink)]")}
    >
      <div className="mx-auto max-w-[1320px] px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <p className={brutalist.label}>{t.howItWorks.label}</p>
        <h2
          className={cn(
            brutalist.heading,
            "mt-4 text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem]",
          )}
        >
          {t.howItWorks.headlineMain}
          <br />
          <span className="text-[var(--landing-blue)]">
            {t.howItWorks.headlineFaded}
          </span>
        </h2>

        <div
          className={cn(
            "mt-16 grid gap-0 sm:grid-cols-2 lg:grid-cols-4",
            brutalist.border,
            brutalist.shadow,
          )}
        >
          {t.howItWorks.steps.map((step, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col border-[var(--landing-ink)] bg-[var(--landing-orange)] p-8 lg:p-10",
                i < t.howItWorks.steps.length - 1 &&
                  "border-b-[3px] sm:border-b-0 sm:border-r-[3px]",
              )}
            >
              <span className="inline-flex w-fit border-2 border-[var(--landing-ink)] bg-[var(--landing-blue)] px-2 py-1 text-[13px] font-black tabular-nums text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[16px] font-black uppercase leading-snug tracking-tight sm:text-[17px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.7] sm:text-[15px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Link href={ctaHref} className={brutalistButtonClassName("solid")}>
            {user ? t.header.dashboard : t.howItWorks.cta}
          </Link>
          <Link
            href={docsHrefForLocale(locale)}
            className={brutalistButtonClassName("ghost")}
          >
            {t.howItWorks.ctaDocs}
          </Link>
          {landingBrand.links.github ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={brutalistButtonClassName("ghost")}
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
