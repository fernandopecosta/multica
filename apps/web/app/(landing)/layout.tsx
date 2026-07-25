import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { LocaleProvider } from "@/features/landing/i18n";
import { getRequestLocale } from "@/lib/request-locale";
import { landingBrand } from "@/features/landing/branding";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-landing-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-landing-display",
  weight: ["500", "600", "700"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: landingBrand.name,
      url: landingBrand.websiteUrl,
    },
    {
      "@type": "SoftwareApplication",
      name: landingBrand.name,
      applicationCategory: "ProjectManagement",
      operatingSystem: "Web",
      description:
        "Plataforma de gestão de projetos para equipes humanas e agentes de IA.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
      },
    },
  ],
};

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialLocale = await getRequestLocale();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} landing-light h-full overflow-x-hidden overflow-y-auto bg-[var(--landing-paper)] font-[family-name:var(--font-landing-sans)]`}
      >
        <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>
      </div>
    </>
  );
}
