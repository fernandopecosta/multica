"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@multica/ui/lib/utils";
import { useAuthStore } from "@multica/core/auth";
import { useLocale } from "../i18n";
import { landingBrand } from "../branding";
import { brutalist } from "../brutalist-styles";
import { useDashboardCtaHref } from "../utils/use-dashboard-cta";
import {
  ClaudeCodeLogo,
  CodexLogo,
  GeminiCliLogo,
  OpenClawLogo,
  OpenCodeLogo,
  heroButtonClassName,
} from "./shared";

export function LandingHero() {
  const { t } = useLocale();
  const user = useAuthStore((s) => s.user);
  const ctaHref = useDashboardCtaHref();

  return (
    <div
      className="relative min-h-full overflow-hidden text-white"
      style={{ backgroundColor: landingBrand.colors.heroBg }}
    >
      <LandingBackdrop />

      <main className="relative z-10">
        <section
          id="product"
          className="mx-auto max-w-[1320px] px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36"
        >
          <div className="mx-auto max-w-[1120px] text-center">
            <p className={cn(brutalist.label, "text-[var(--landing-orange)]")}>
              Província Labs × Multica
            </p>
            <h1
              className={cn(
                brutalist.headingOnDark,
                "mt-4 text-[3rem] sm:text-[4.2rem] lg:text-[5.5rem]",
              )}
            >
              {t.hero.headlineLine1}
              <br />
              <span className="text-[var(--landing-orange)]">
                {t.hero.headlineLine2}
              </span>
            </h1>

            <p
              className={cn(
                brutalist.bodyOnDark,
                "mx-auto mt-7 max-w-[820px] border-[3px] border-white/25 bg-white/5 px-6 py-5 text-left sm:text-center",
              )}
            >
              {t.hero.subheading}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={ctaHref} className={heroButtonClassName("solid")}>
                {user ? t.header.dashboard : t.hero.cta}
              </Link>
              {landingBrand.showDownloadDesktop ? (
                <Link href="/download" className={heroButtonClassName("ghost")}>
                  <Download className="size-4" aria-hidden />
                  {t.hero.downloadDesktop}
                </Link>
              ) : null}
              {landingBrand.showTalkToSales ? (
                <Link
                  href="/contact-sales"
                  className="group inline-flex items-center justify-center gap-1.5 px-3 py-3 text-[13px] font-black uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-[var(--landing-orange)]"
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
              <span className="text-[12px] font-black uppercase tracking-[0.16em] text-white/60">
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
                      "flex items-center gap-2 border-2 border-white/30 bg-white/5 px-3 py-2 text-white",
                      brutalist.shadowOrange,
                    )}
                  >
                    <Logo className="size-4" />
                    <span className="text-[12px] font-bold uppercase tracking-wide">
                      {name}
                    </span>
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
        className="object-cover object-center opacity-35 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-[var(--landing-blue)]/88" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,107,0,0.06)_0px,rgba(255,107,0,0.06)_1px,transparent_1px,transparent_48px),repeating-linear-gradient(90deg,rgba(255,107,0,0.04)_0px,rgba(255,107,0,0.04)_1px,transparent_1px,transparent_48px)]" />
    </div>
  );
}

function ProductImage({ alt }: { alt: string }) {
  return (
    <div className={cn(brutalist.border, brutalist.shadow, "bg-white")}>
      <div className="relative overflow-hidden">
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
    </div>
  );
}
