import Image from "next/image";
import { cn } from "@multica/ui/lib/utils";
import { landingBrand } from "../branding";

export function LandingLogo({
  className,
  wordmarkClassName,
  showWordmark = true,
  variant = "dark",
}: {
  className?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  variant?: "dark" | "light";
}) {
  return (
    <>
      <Image
        src={landingBrand.logo.src}
        alt={landingBrand.logo.alt}
        width={20}
        height={20}
        className={cn("size-5 shrink-0", className)}
      />
      {showWordmark ? (
        <span
          className={cn(
            "text-[18px] font-semibold tracking-[0.04em] lowercase sm:text-[20px]",
            variant === "dark" ? "text-white/92" : "text-[#0a0d12]",
            wordmarkClassName,
          )}
        >
          {landingBrand.nameDisplay}
        </span>
      ) : null}
    </>
  );
}

export function LandingLogoMark({
  className,
}: {
  className?: string;
}) {
  return (
    <Image
      src={landingBrand.logo.src}
      alt={landingBrand.logo.alt}
      width={160}
      height={160}
      className={cn("shrink-0", className)}
    />
  );
}
