"use client";

import { useState } from "react";
import { cn } from "@multica/ui/lib/utils";
import { useLocale } from "../i18n";
import { brutalist } from "../brutalist-styles";

export function FAQSection() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className={cn(
        brutalist.sectionLight,
        "border-t-[3px] border-[var(--landing-ink)]",
      )}
    >
      <div className="mx-auto max-w-[860px] px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="text-center">
          <p className={brutalist.label}>{t.faq.label}</p>
          <h2
            className={cn(
              brutalist.heading,
              "mt-4 text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem]",
            )}
          >
            {t.faq.headline}
          </h2>
        </div>

        <div className="mt-14 space-y-0 sm:mt-16">
          {t.faq.items.map((faq, i) => (
            <div
              key={i}
              className={cn(
                brutalist.borderThin,
                i > 0 && "-mt-[2px]",
                openIndex === i && "bg-[var(--landing-blue-light)]",
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
              >
                <span className="text-[15px] font-black uppercase leading-snug tracking-tight sm:text-[16px]">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "mt-0.5 flex size-8 shrink-0 items-center justify-center border-2 border-[var(--landing-ink)] bg-[var(--landing-orange)] text-[var(--landing-ink)] transition-transform",
                    openIndex === i && "rotate-45 bg-[var(--landing-blue)] text-white",
                  )}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
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
                  <p className="border-t-2 border-[var(--landing-ink)] px-5 pb-5 pt-4 text-[14px] leading-[1.7] sm:text-[15px]">
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
