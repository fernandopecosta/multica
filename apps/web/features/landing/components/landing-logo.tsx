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
        "text-[18px] font-semibold tracking-[0.04em] lowercase sm:text-[20px]",
        variant === "dark" ? "text-white/92" : "text-[#0a0d12]",
        wordmarkClassName,
      )}
    >
      {landingBrand.nameDisplay}
    </span>
  );
}
