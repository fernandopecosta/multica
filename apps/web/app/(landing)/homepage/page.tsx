import type { Metadata } from "next";
import { MulticaLanding } from "@/features/landing/components/multica-landing";
import { landingBrand } from "@/features/landing/branding";

export const metadata: Metadata = {
  title: "Homepage",
  description:
    "Província Labs — plataforma para transformar agentes de código em colegas de equipe.",
  openGraph: {
    title: `${landingBrand.name} — Gestão de Projetos para Equipes Humanas + Agentes`,
    description:
      "Gerencie sua força de trabalho humana + agentes em um só lugar.",
    url: "/homepage",
  },
  alternates: {
    canonical: "/homepage",
  },
};

export default function HomepagePage() {
  return <MulticaLanding />;
}
