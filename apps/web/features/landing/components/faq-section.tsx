"use client";

import { useState } from "react";
import { cn } from "@multica/ui/lib/utils";
import { useLocale } from "../i18n";
import { neo } from "../brutalist-styles";

export function FAQSection() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className={cn(
        neo.sectionLight,
        "border-t-2 border-[var(--landing-ink)]",
      )}
    >
      <div className="mx-auto max-w-[860px] px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="text-center">
          <p className={neo.label}>{t.faq.label}</p>
          <h2
            className={cn(
              neo.heading,
              "mt-4 text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem]",
            )}
          >
            {t.faq.headline}
          </h2>
        </div>

        <div className="mt-14 space-y-3 sm:mt-16">
          {t.faq.items.map((faq, i) => (
            <div
              key={i}
              className={cn(
                neo.card,
                openIndex === i ? neo.shadowBlue : neo.shadowMint,
                openIndex === i && "bg-[var(--landing-sky)]",
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
              >
                <span className="text-[15px] font-bold leading-snug sm:text-[16px]">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border-2 border-[var(--landing-ink)] transition-all",
                    openIndex === i
                      ? "rotate-45 bg-[var(--landing-coral)]"
                      : "bg-[var(--landing-violet-soft)]",
                  )}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M6 1v10M1 6h10" />
                  </svg>
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-200 ease-out",
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="border-t-2 border-[var(--landing-ink)]/10 px-5 pb-5 pt-4 text-[14px] leading-[1.7] text-[var(--landing-ink)]/70 sm:text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
