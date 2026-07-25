import Image from "next/image";
import { cn } from "@multica/ui/lib/utils";
import { landingBrand } from "../branding";

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
  const heights = {
    header: 36,
    footer: 48,
  };
  const height = heights[size];
  const width = size === "footer" ? 220 : 180;

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
