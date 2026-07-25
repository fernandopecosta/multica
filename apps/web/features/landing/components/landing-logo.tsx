import Image from "next/image";
import { cn } from "@multica/ui/lib/utils";
import { landingBrand } from "../branding";

/** Official logo aspect ratio (834×343). */
const LOGO_ASPECT = 834 / 343;

export function LandingLogo({
  className,
  wordmarkClassName,
  showWordmark = false,
  variant = "dark",
  size = "header",
}: {
  className?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  variant?: "dark" | "light";
  size?: "header" | "footer";
}) {
  const height = size === "footer" ? 56 : 44;
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <>
      <Image
        src={landingBrand.logo.src}
        alt={landingBrand.logo.alt}
        width={width}
        height={height}
        className={cn("h-auto w-auto object-contain", className)}
        style={{ height, width: "auto", maxWidth: width }}
        priority={size === "header"}
      />
      {showWordmark ? (
        <span
          className={cn(
            "text-[17px] font-extrabold lowercase tracking-[0.06em] sm:text-[18px]",
            variant === "dark" ? "text-white" : "text-[var(--landing-ink)]",
            wordmarkClassName,
          )}
        >
          {landingBrand.nameDisplay}
        </span>
      ) : null}
    </>
  );
}
