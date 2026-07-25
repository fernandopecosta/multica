import { cn } from "@multica/ui/lib/utils";
import { landingBrand } from "../branding";

export function LandingLogo({
  wordmarkClassName,
  showWordmark = true,
  variant = "dark",
}: {
  wordmarkClassName?: string;
  showWordmark?: boolean;
  variant?: "dark" | "light";
}) {
  if (!showWordmark) return null;

  return (
    <span
      className={cn(
        "text-[17px] font-extrabold lowercase tracking-[0.06em] sm:text-[18px]",
        variant === "dark" ? "text-white" : "text-[var(--landing-ink)]",
        wordmarkClassName,
      )}
    >
      {landingBrand.nameDisplay}
    </span>
  );
}
