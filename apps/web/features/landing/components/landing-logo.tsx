import Image from "next/image";
import { cn } from "@multica/ui/lib/utils";
import { landingBrand } from "../branding";

const LOGO_ASPECT = landingBrand.logo.width / landingBrand.logo.height;

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
  const height = size === "footer" ? 48 : 36;
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <>
      <Image
        src={landingBrand.logo.src}
        alt={landingBrand.logo.alt}
        width={landingBrand.logo.width}
        height={landingBrand.logo.height}
        className={cn("h-auto w-auto object-contain object-left", className)}
        style={{ height, width: "auto", maxWidth: width }}
        priority={size === "header"}
      />
      {showWordmark ? (
        <span
          className={cn(
            "font-[family-name:var(--font-landing-sans)] text-[17px] font-bold lowercase tracking-[0.04em] sm:text-[18px]",
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
