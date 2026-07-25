"use client";

import { LandingHeader } from "./landing-header";
import { LandingHero } from "./landing-hero";
import { FeaturesSection } from "./features-section";
import { HowItWorksSection } from "./how-it-works-section";
import { OpenSourceSection } from "./open-source-section";
import { FAQSection } from "./faq-section";
import { LandingFooter } from "./landing-footer";
import { landingBrand } from "../branding";

export function MulticaLanding() {
  return (
    <>
      <div className="relative">
        <LandingHeader />
        <LandingHero />
      </div>

      <FeaturesSection />
      <HowItWorksSection />
      {landingBrand.showOpenSourceSection ? <OpenSourceSection /> : null}
      <FAQSection />
      <LandingFooter />
    </>
  );
}
