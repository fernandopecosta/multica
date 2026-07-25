import type { Metadata } from "next";
import { MulticaLanding } from "@/features/landing/components/multica-landing";
import { RedirectIfAuthenticated } from "@/features/landing/components/redirect-if-authenticated";
import { landingBrand } from "@/features/landing/branding";

export const metadata: Metadata = {
  title: {
    absolute: `${landingBrand.name} — Gestão de Projetos para Equipes Humanas + Agentes`,
  },
  description:
    "Plataforma interna da Província Labs para transformar agentes de código em colegas de equipe. Atribua tarefas, acompanhe progresso e gerencie skills.",
  openGraph: {
    title: `${landingBrand.name} — Gestão de Projetos para Equipes Humanas + Agentes`,
    description:
      "Gerencie sua força de trabalho humana + agentes em um só lugar.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function LandingPage() {
  return (
    <>
      <RedirectIfAuthenticated />
      <MulticaLanding />
    </>
  );
}
