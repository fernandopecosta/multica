import { Instrument_Serif, Noto_Serif_SC } from "next/font/google";
import { LocaleProvider } from "@/features/landing/i18n";
import { getRequestLocale } from "@/lib/request-locale";
import { landingBrand } from "@/features/landing/branding";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif-zh",
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
      <div className={`${instrumentSerif.variable} ${notoSerifSC.variable} landing-light h-full overflow-x-hidden overflow-y-auto bg-white`}>
        <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>
      </div>
    </>
  );
}
