export const landingBrand = {
  name: "Província Labs",
  nameDisplay: "província labs",
  tagline:
    "Gestão de projetos para equipes humanas e agentes de IA. Fork do Multica utilizado internamente pela Província Labs.",
  websiteUrl: "https://provincialabs.com.br",
  metadataBase: "https://app.provincialabs.com.br",

  logo: {
    src: "/images/provincia-logo.svg",
    alt: "Província Labs",
  },

  colors: {
    heroBg: "#0f0a1a",
    footerBg: "#1a1030",
    surface: "#0a0d12",
    sectionDark: "#0f0a1a",
  },

  images: {
    heroBackground: "/images/provincia-hero-bg.svg",
    heroProduct: "/images/landing-hero.png",
  },

  links: {
    website: "https://provincialabs.com.br",
    github: null as string | null,
    twitter: null as string | null,
    discord: null as string | null,
    linkedin: null as string | null,
  },

  showGithubStars: false,
  showOpenSourceSection: false,
  showTalkToSales: false,
  showDownloadDesktop: false,
  showGithubInHeader: false,
  showAgentPartners: true,

  navLinkHrefs: ["#features", "#how-it-works"] as const,

  navLinks: [
    {
      href: "#features",
      labels: { "pt-BR": "Funcionalidades", en: "Features" },
    },
    {
      href: "#how-it-works",
      labels: { "pt-BR": "Como funciona", en: "How it works" },
    },
  ] as const,

  /** Locales shown in the landing footer language switcher. */
  landingLocales: ["pt-BR", "en"] as const,
} as const;

export type LandingBrandLocale = (typeof landingBrand.landingLocales)[number];
