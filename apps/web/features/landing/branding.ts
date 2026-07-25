export const landingBrand = {
  name: "Província Labs",
  nameDisplay: "província labs",
  tagline:
    "Gestão de projetos para equipes humanas e agentes de IA. Fork do Multica utilizado internamente pela Província Labs.",
  websiteUrl: "https://provincialabs.com.br",
  metadataBase: "https://app.provincialabs.com.br",

  logo: {
    src: "/images/provincia-labs-logo.png",
    alt: "Província Labs",
  },

  colors: {
    heroBg: "#0F172A",
    footerBg: "#1E3A8A",
    surface: "#0F172A",
    sectionDark: "#2563EB",
    blue: "#2563EB",
    blueDark: "#1D4ED8",
    sky: "#E0F2FE",
    coral: "#FB7185",
    coralDark: "#F43F5E",
    mint: "#2DD4BF",
    mintSoft: "#CCFBF1",
    violet: "#8B5CF6",
    violetSoft: "#EDE9FE",
    ink: "#0F172A",
    paper: "#F8FAFC",
  },

  images: {
    heroBackground: "/images/landing-bg.jpg",
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

  landingLocales: ["pt-BR", "en"] as const,
} as const;

export type LandingBrandLocale = (typeof landingBrand.landingLocales)[number];
