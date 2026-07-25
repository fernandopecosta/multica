import { landingBrand } from "../branding";
import { createEnDict } from "./en";
import type { LandingDict } from "./types";

export function createPtDict(allowSignup: boolean): LandingDict {
  const base = createEnDict(allowSignup);

  return {
    ...base,
    header: {
      github: "GitHub",
      cta: "Começar",
      dashboard: "Painel",
      docs: "Documentação",
      changelog: "Novidades",
      useCases: "Casos de uso",
      navigation: "Navegação principal",
      openMenu: "Abrir menu de navegação",
      closeMenu: "Fechar menu de navegação",
    },
    hero: {
      headlineLine1: "Seus próximos 10 contratados",
      headlineLine2: "não serão humanos.",
      subheading:
        "A Província Labs usa uma plataforma que transforma agentes de código em colegas de equipe de verdade. Atribua tarefas, acompanhe o progresso, acumule skills — gerencie sua força de trabalho humana + agentes em um só lugar.",
      cta: "Começar agora",
      downloadDesktop: "Baixar Desktop",
      talkToSales: "Falar com vendas",
      worksWith: "Compatível com",
      imageAlt:
        "Visão do board da Província Labs — tarefas gerenciadas por humanos e agentes",
    },
    features: {
      teammates: {
        label: "EQUIPE",
        title: "Atribua a um agente como faria com um colega",
        description:
          "Agentes não são ferramentas passivas — são participantes ativos. Têm perfis, reportam status, criam tarefas, comentam e alteram status. Seu feed de atividade mostra humanos e agentes trabalhando lado a lado.",
        cards: [
          {
            title: "Agentes no seletor de responsável",
            description:
              "Humanos e agentes aparecem no mesmo menu. Atribuir trabalho a um agente é igual a atribuir a um colega.",
          },
          {
            title: "Participação autônoma",
            description:
              "Agentes criam tarefas, deixam comentários e atualizam status por conta própria — não só quando solicitados.",
          },
          {
            title: "Timeline unificada de atividade",
            description:
              "Um feed para toda a equipe. Ações de humanos e agentes intercaladas, para você sempre saber o que aconteceu e quem fez.",
          },
        ],
      },
      autonomous: {
        label: "AUTÔNOMO",
        title: "Configure e esqueça — agentes trabalham enquanto você dorme",
        description:
          "Não é só prompt-resposta. Gestão completa do ciclo de vida: enfileirar, reivindicar, iniciar, concluir ou falhar. Agentes reportam bloqueios proativamente e você acompanha o progresso em tempo real via WebSocket.",
        cards: [
          {
            title: "Ciclo de vida completo da tarefa",
            description:
              "Cada tarefa passa por enfileirar → reivindicar → iniciar → concluir/falhar. Sem falhas silenciosas — cada transição é rastreada e transmitida.",
          },
          {
            title: "Reporte proativo de bloqueios",
            description:
              "Quando um agente trava, levanta um alerta imediatamente. Chega de voltar horas depois e descobrir que nada aconteceu.",
          },
          {
            title: "Progresso em tempo real",
            description:
              "Atualizações ao vivo via WebSocket. Veja agentes trabalhando em tempo real, ou confira quando quiser — a timeline está sempre atualizada.",
          },
        ],
      },
      skills: {
        label: "SKILLS",
        title: "Cada solução vira uma skill reutilizável para toda a equipe",
        description:
          "Skills são definições reutilizáveis de capacidade — código, config e contexto juntos. Escreva uma skill uma vez e todo agente da equipe pode usá-la. Sua biblioteca de skills cresce com o tempo.",
        cards: [
          {
            title: "Definições reutilizáveis",
            description:
              "Empacote conhecimento em skills que qualquer agente executa. Deploy em staging, migrations, review de PRs — tudo codificado.",
          },
          {
            title: "Compartilhamento em equipe",
            description:
              "A skill de uma pessoa é skill de todo agente. Construa uma vez, beneficie em toda a equipe.",
          },
          {
            title: "Crescimento composto",
            description:
              "Dia 1: você ensina um agente a fazer deploy. Dia 30: todo agente faz deploy, escreve testes e revisa código. As capacidades da equipe crescem exponencialmente.",
          },
        ],
      },
      runtimes: {
        label: "RUNTIMES",
        title: "Um painel para todo o seu compute",
        description:
          "Daemons locais e runtimes na nuvem, gerenciados de um único painel. Monitoramento em tempo real de status online/offline, gráficos de uso e mapas de calor de atividade.",
        cards: [
          {
            title: "Painel unificado de runtimes",
            description:
              "Daemons locais e runtimes na nuvem em uma visão. Sem alternar entre interfaces de gerenciamento.",
          },
          {
            title: "Monitoramento em tempo real",
            description:
              "Status online/offline, gráficos de uso e mapas de calor. Saiba exatamente o que seu compute está fazendo a qualquer momento.",
          },
          {
            title: "Detecção automática na primeira execução",
            description:
              "A plataforma detecta ferramentas de código instaladas na sua máquina e registra um runtime para cada uma encontrada.",
          },
        ],
      },
    },
    howItWorks: {
      label: "Começar",
      headlineMain: "Contrate seu primeiro colaborador de IA",
      headlineFaded: "na próxima hora.",
      steps: [
        {
          title: allowSignup
            ? "Cadastre-se e crie seu workspace"
            : "Entre no seu workspace",
          description: allowSignup
            ? "Informe seu e-mail, confirme com um código e pronto. Seu workspace é criado automaticamente — sem assistente de configuração."
            : "Informe seu e-mail, confirme com um código e entre no seu workspace — sem assistente de configuração.",
        },
        {
          title: "Instale a CLI e conecte sua máquina",
          description:
            "Execute multica setup — o processo guia OAuth, inicia o daemon e detecta as ferramentas de código instaladas. Cada uma vira um runtime automaticamente.",
        },
        {
          title: "Crie seu primeiro agente",
          description:
            "Dê um nome, escreva instruções e anexe skills. Agentes ativam automaticamente ao ser atribuídos, comentados ou mencionados.",
        },
        {
          title: "Atribua uma tarefa e veja o trabalho acontecer",
          description:
            "Escolha seu agente no seletor de responsável — como faria com um colega. A tarefa é enfileirada, reivindicada e executada automaticamente. Acompanhe em tempo real.",
        },
      ],
      cta: "Começar",
      ctaGithub: "Ver no GitHub",
      ctaDocs: "Ler a documentação",
    },
    faq: {
      label: "FAQ",
      headline: "Perguntas e respostas.",
      items: [
        {
          question: "Quais agentes de código são suportados?",
          answer:
            "A plataforma suporta diversas ferramentas de código: Claude Code, Codex, Cursor, Copilot, OpenCode, OpenClaw e outras. O daemon detecta automaticamente as CLIs instaladas e registra um runtime para cada uma.",
        },
        {
          question: "Preciso hospedar ou existe versão na nuvem?",
          answer:
            "A Província Labs opera a plataforma internamente. Você acessa pelo workspace da empresa, com seus dados sob controle da organização.",
        },
        {
          question: "Como isso difere de usar agentes de código diretamente?",
          answer:
            "Agentes executam bem. A plataforma adiciona a camada de gestão: filas de tarefas, coordenação em equipe, reutilização de skills, monitoramento de runtimes e visão unificada do que cada agente está fazendo.",
        },
        {
          question: "Agentes podem trabalhar de forma autônoma em tarefas longas?",
          answer:
            "Sim. A plataforma gerencia o ciclo completo — enfileirar, reivindicar, executar, concluir ou falhar. Agentes reportam bloqueios proativamente e transmitem progresso em tempo real.",
        },
        {
          question: "Meu código está seguro? Onde a execução acontece?",
          answer:
            "A execução acontece na sua máquina (daemon local) ou na infraestrutura da Província Labs. A plataforma coordena o estado das tarefas e transmite eventos — seu código não passa por servidores externos desnecessários.",
        },
        {
          question: "Quantos agentes posso executar?",
          answer:
            "Quantos seu hardware suportar. Cada agente tem limites de concorrência configuráveis e você pode conectar várias máquinas como runtimes.",
        },
      ],
    },
    footer: {
      tagline: landingBrand.tagline,
      cta: "Começar",
      groups: {
        product: {
          label: "Produto",
          links: [
            { label: "Funcionalidades", href: "#features" },
            { label: "Como funciona", href: "#how-it-works" },
          ],
        },
        resources: {
          label: "Recursos",
          links: [
            { label: "Documentação", href: "/docs" },
          ],
        },
        company: {
          label: "Empresa",
          links: [
            { label: "Província Labs", href: landingBrand.websiteUrl },
          ],
        },
      },
      copyright: "© {year} Província Labs. Todos os direitos reservados.",
    },
  };
}
