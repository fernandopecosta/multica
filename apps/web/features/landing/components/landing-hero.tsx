"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@multica/ui/lib/utils";
import { useAuthStore } from "@multica/core/auth";
import { useLocale } from "../i18n";
import { landingBrand } from "../branding";
import { neo, neoButtonClassName } from "../brutalist-styles";
import { useDashboardCtaHref } from "../utils/use-dashboard-cta";
import {
  ClaudeCodeLogo,
  CodexLogo,
  GeminiCliLogo,
  OpenClawLogo,
  OpenCodeLogo,
} from "./shared";

export function LandingHero() {
  const { t } = useLocale();
  const user = useAuthStore((s) => s.user);
  const ctaHref = useDashboardCtaHref();

  return (
    <div className="relative min-h-full overflow-hidden text-white">
      <LandingBackdrop />

      <main className="relative z-10">
        <section
          id="product"
          className="mx-auto max-w-[1320px] px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36"
        >
          <div className="mx-auto max-w-[1120px] text-center">
            <span
              className={cn(
                neo.label,
                "inline-flex rounded-full border-2 border-white/30 bg-white/10 px-4 py-1.5 text-white/90 backdrop-blur-sm",
              )}
            >
              Província Labs × Multica
            </span>
            <h1
              className={cn(
                neo.headingOnDark,
                "mt-6 text-[3rem] sm:text-[4rem] lg:text-[5.25rem]",
              )}
            >
              {t.hero.headlineLine1}
              <br />
              <span className="text-[var(--landing-coral)]">
                {t.hero.headlineLine2}
              </span>
            </h1>

            <p
              className={cn(
                neo.bodyOnDark,
                "mx-auto mt-7 max-w-[820px] rounded-2xl border-2 border-white/25 bg-[var(--landing-ink)]/45 px-6 py-5 backdrop-blur-md",
              )}
            >
              {t.hero.subheading}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={ctaHref}
                className={neoButtonClassName("coral")}
              >
                {user ? t.header.dashboard : t.hero.cta}
              </Link>
              {landingBrand.showDownloadDesktop ? (
                <Link
                  href="/download"
                  className={neoButtonClassName("ghostOnDark")}
                >
                  <Download className="size-4" aria-hidden />
                  {t.hero.downloadDesktop}
                </Link>
              ) : null}
              {landingBrand.showTalkToSales ? (
                <Link
                  href="/contact-sales"
                  className="group inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-3 text-[14px] font-semibold text-white/85 transition-colors hover:text-[var(--landing-mint)]"
                >
                  {t.hero.talkToSales}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              ) : null}
            </div>
          </div>

          {landingBrand.showAgentPartners ? (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/70">
                {t.hero.worksWith}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { Logo: ClaudeCodeLogo, name: "Claude Code" },
                  { Logo: CodexLogo, name: "Codex" },
                  { Logo: GeminiCliLogo, name: "Gemini CLI" },
                  { Logo: OpenClawLogo, name: "OpenClaw" },
                  { Logo: OpenCodeLogo, name: "OpenCode" },
                ].map(({ Logo, name }) => (
                  <div
                    key={name}
                    className={cn(
                      "flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/90 px-3 py-2 text-[var(--landing-ink)]",
                      neo.shadowMint,
                    )}
                  >
                    <Logo className="size-4" />
                    <span className="text-[12px] font-semibold">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div id="preview" className="mt-10 sm:mt-12">
            <ProductImage alt={t.hero.imageAlt} />
          </div>
        </section>
      </main>
    </div>
  );
}

function LandingBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Image
        src={landingBrand.images.heroBackground}
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--landing-ink)]/55 via-[var(--landing-ink)]/35 to-[var(--landing-blue)]/75" />
    </div>
  );
}

function ProductImage({ alt }: { alt: string }) {
  return (
    <div className={cn(neo.card, neo.shadowViolet, "overflow-hidden")}>
      <Image
        src={landingBrand.images.heroProduct}
        alt={alt}
        width={3532}
        height={2382}
        priority
        className="block h-auto w-full"
        sizes="(max-width: 1320px) 100vw, 1320px"
        quality={85}
      />
    </div>
  );
}
