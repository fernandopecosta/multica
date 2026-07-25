import { cn } from "@multica/ui/lib/utils";

/** Brutalist landing utilities — blue + orange palette via CSS vars on `.landing-light`. */
export const brutalist = {
  label:
    "text-[11px] font-black uppercase tracking-[0.22em] text-[var(--landing-orange)]",
  heading:
    "font-black uppercase leading-[0.92] tracking-[-0.03em] text-[var(--landing-ink)]",
  headingOnDark:
    "font-black uppercase leading-[0.92] tracking-[-0.03em] text-white",
  body: "text-[15px] leading-7 text-[var(--landing-ink)]/80 sm:text-[16px]",
  bodyOnDark: "text-[15px] leading-7 text-white/88 sm:text-[16px]",
  border: "border-[3px] border-[var(--landing-ink)]",
  borderThin: "border-2 border-[var(--landing-ink)]",
  shadow: "shadow-[5px_5px_0_0_var(--landing-ink)]",
  shadowOrange: "shadow-[5px_5px_0_0_var(--landing-orange)]",
  sectionLight: "bg-[var(--landing-paper)] text-[var(--landing-ink)]",
  sectionBlue: "bg-[var(--landing-blue)] text-white",
  sectionOrange: "bg-[var(--landing-orange)] text-[var(--landing-ink)]",
} as const;

export function brutalistButtonClassName(
  tone: "solid" | "ghost" | "orange",
  opts?: { onDark?: boolean },
) {
  const base =
    "inline-flex items-center justify-center gap-2 border-[3px] border-[var(--landing-ink)] px-5 py-3 text-[13px] font-black uppercase tracking-[0.08em] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none";

  if (tone === "orange") {
    return cn(
      base,
      brutalist.shadow,
      "bg-[var(--landing-orange)] text-[var(--landing-ink)] hover:bg-[var(--landing-orange-dark)]",
    );
  }

  if (tone === "solid") {
    return cn(
      base,
      brutalist.shadow,
      opts?.onDark
        ? "bg-white text-[var(--landing-ink)]"
        : "bg-[var(--landing-blue)] text-white",
    );
  }

  return cn(
    base,
    opts?.onDark
      ? "bg-transparent text-white hover:bg-white/10"
      : "bg-[var(--landing-paper)] text-[var(--landing-ink)] hover:bg-[var(--landing-blue-light)]",
  );
}
