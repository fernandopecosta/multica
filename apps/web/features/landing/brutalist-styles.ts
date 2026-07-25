import { cn } from "@multica/ui/lib/utils";

const display = "font-[family-name:var(--font-landing-display)]";
const body = "font-[family-name:var(--font-landing-sans)]";

/** Neo-brutalism landing tokens — modern blue palette + coral, mint, violet. */
export const neo = {
  label: cn(
    body,
    "text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--landing-coral)]",
  ),
  heading: cn(
    display,
    "text-[var(--landing-ink)] font-bold leading-[1.05] tracking-[-0.04em]",
  ),
  headingOnDark: cn(
    display,
    "font-bold leading-[1.05] tracking-[-0.04em] text-white",
  ),
  body: cn(body, "text-[15px] font-normal leading-7 text-[var(--landing-ink)]/75 sm:text-[16px]"),
  bodyOnDark: cn(body, "text-[15px] font-normal leading-7 text-white/90 sm:text-[16px]"),
  border: "border-2 border-[var(--landing-ink)]",
  card: "rounded-2xl border-2 border-[var(--landing-ink)] bg-white",
  shadowBlue: "shadow-[4px_4px_0_0_var(--landing-blue)]",
  shadowCoral: "shadow-[4px_4px_0_0_var(--landing-coral)]",
  shadowMint: "shadow-[4px_4px_0_0_var(--landing-mint)]",
  shadowViolet: "shadow-[4px_4px_0_0_var(--landing-violet)]",
  sectionLight: "bg-[var(--landing-paper)] text-[var(--landing-ink)]",
  sectionSky: "bg-[var(--landing-sky)] text-[var(--landing-ink)]",
  sectionMint: "bg-[var(--landing-mint-soft)] text-[var(--landing-ink)]",
  sectionBlue: "bg-[var(--landing-blue)] text-white",
  sectionViolet: "bg-[var(--landing-violet-soft)] text-[var(--landing-ink)]",
} as const;

export type NeoButtonTone = "primary" | "coral" | "ghost" | "ghostOnDark";

export function neoButtonClassName(
  tone: NeoButtonTone,
  opts?: { onDark?: boolean },
) {
  const base = cn(
    body,
    "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[var(--landing-ink)] px-5 py-3 text-[13px] font-semibold tracking-tight transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
  );

  switch (tone) {
    case "coral":
      return cn(
        base,
        neo.shadowCoral,
        "bg-[var(--landing-coral)] text-[var(--landing-ink)] hover:bg-[var(--landing-coral-dark)]",
      );
    case "primary":
      return cn(
        base,
        neo.shadowBlue,
        opts?.onDark
          ? "bg-white text-[var(--landing-blue)] hover:bg-[var(--landing-sky)]"
          : "bg-[var(--landing-blue)] text-white hover:bg-[var(--landing-blue-dark)]",
      );
    case "ghostOnDark":
      return cn(
        base,
        "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
      );
    case "ghost":
    default:
      return cn(
        base,
        neo.shadowMint,
        "bg-white text-[var(--landing-ink)] hover:bg-[var(--landing-sky)]",
      );
  }
}

/** @deprecated Use `neo` — kept for incremental migration. */
export const brutalist = neo;

/** @deprecated Use `neoButtonClassName`. */
export function brutalistButtonClassName(
  tone: "solid" | "ghost" | "orange",
  opts?: { onDark?: boolean },
) {
  if (tone === "orange") return neoButtonClassName("coral", opts);
  if (tone === "solid") return neoButtonClassName("primary", opts);
  return neoButtonClassName(opts?.onDark ? "ghostOnDark" : "ghost", opts);
}
