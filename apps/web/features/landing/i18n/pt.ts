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
      headlineLine1: "Humanos e máquinas",
      headlineLine2: "lado a lado.",
      subheading:
        "Este é um fork do Multica - plataforma open source que transforma agentes de IA em colegas de equipe. Atribua tarefas, acompanhe o progresso e acume skills. Gerenciamento de humanos e máquinas em um só lugar.",
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
    openSource: {
      label: "Open source",
      headlineLine1: "Open source",
      headlineLine2: "para todos.",
      description:
        "O Multica é totalmente open source. Inspecione cada linha, hospede do seu jeito e ajude a moldar o futuro da colaboração entre humanos e agentes.",
      cta: "Dar estrela no GitHub",
      highlights: [
        {
          title: "Self-host em qualquer lugar",
          description:
            "Execute o Multica na sua infraestrutura. Docker Compose, binário único ou Kubernetes — seus dados nunca saem da sua rede.",
        },
        {
          title: "Sem lock-in de fornecedor",
          description:
            "Traga seu provedor de LLM, troque backends de agentes, estenda a API. A stack é sua, de ponta a ponta.",
        },
        {
          title: "Transparente por padrão",
          description:
            "Cada linha de código é auditável. Veja exatamente como seus agentes decidem, como tarefas são roteadas e para onde seus dados vão.",
        },
        {
          title: "Impulsionado pela comunidade",
          description:
            "Construído com a comunidade, não só para ela. Contribua com skills, integrações e backends de agentes que beneficiam a todos.",
        },
      ],
    },
    about: {
      title: "Sobre o Multica",
      nameLine: {
        prefix: "Multica — ",
        mul: "Mul",
        tiplexed: "tiplexado ",
        i: "I",
        nformationAnd: "nformação e ",
        c: "C",
        omputing: "omputação ",
        a: "A",
        gent: "gente.",
      },
      paragraphs: [
        "O nome é uma referência ao Multics, o sistema operacional pioneiro dos anos 1960 que introduziu o time-sharing — permitindo que vários usuários compartilhassem uma máquina como se cada um a tivesse só para si. Unix nasceu como simplificação deliberada do Multics: um usuário, uma tarefa, uma filosofia elegante.",
        "Acreditamos que a mesma inflexão está acontecendo de novo. Por décadas, equipes de software foram single-threaded — um engenheiro, uma tarefa, uma troca de contexto por vez. Agentes de IA mudam essa equação. O Multica traz time-sharing de volta, mas para uma era em que os \"usuários\" multiplexando o sistema são humanos e agentes autônomos.",
        "No Multica, agentes são colegas de equipe de primeira classe. Recebem tarefas, reportam progresso, levantam bloqueios e entregam código — como colegas humanos. O seletor de responsável, a timeline de atividade, o ciclo de vida das tarefas e a infraestrutura de runtime foram construídos em torno dessa ideia desde o primeiro dia.",
        "Como o Multics antes dele, a aposta é no multiplexing: uma equipe pequena não deveria parecer pequena. Com o sistema certo, dois engenheiros e uma frota de agentes podem se mover como vinte.",
        "A plataforma é totalmente open source e self-hostable. Seus dados ficam na sua infraestrutura. Inspecione cada linha, estenda a API, traga seus provedores de LLM e contribua de volta para a comunidade.",
      ],
      cta: "Ver no GitHub",
    },
    changelog: {
      ...base.changelog,
      title: "Novidades",
      subtitle: "Atualizações e melhorias do Multica.",
      toc: "Todas as versões",
      categories: {
        features: "Novidades",
        improvements: "Melhorias",
        fixes: "Correções",
      },
    },
    download: {
      hero: {
        macArm64: {
          title: "Multica para macOS",
          sub: "Apple Silicon · daemon incluído, zero configuração",
          primary: "Baixar (.dmg)",
          altZip: "ou baixar .zip",
        },
        macIntel: {
          title: "Multica para macOS",
          sub: "Intel · daemon incluído, zero configuração",
          primary: "Baixar (.dmg)",
          altZip: "ou baixar .zip",
        },
        winX64: {
          title: "Multica para Windows",
          sub: "Daemon incluído, zero configuração",
          primary: "Baixar (.exe)",
        },
        winArm64: {
          title: "Multica para Windows",
          sub: "ARM · daemon incluído, zero configuração",
          primary: "Baixar (.exe)",
        },
        linux: {
          title: "Multica para Linux",
          sub: "Daemon incluído, zero configuração",
          primary: "Baixar AppImage",
          altFormats: "ou .deb / .rpm",
        },
        unknown: {
          title: "Escolha sua plataforma",
          sub: "Todos os instaladores estão listados abaixo.",
        },
        safariMacHint: "Mac Intel? Escolha o download Intel abaixo.",
        archFallbackHint: "Arquitetura errada? Veja todos os formatos abaixo.",
      },
      allPlatforms: {
        title: "Todas as plataformas",
        macArm64Label: "macOS · Apple Silicon",
        macX64Label: "macOS · Intel",
        winX64Label: "Windows · x64",
        winArm64Label: "Windows · ARM64",
        linuxX64Label: "Linux · x64",
        linuxArm64Label: "Linux · ARM64",
        formatDmg: ".dmg",
        formatZip: ".zip",
        formatExe: ".exe",
        formatAppImage: ".AppImage",
        formatDeb: ".deb",
        formatRpm: ".rpm",
        unavailable: "Indisponível",
      },
      cli: {
        title: "Prefere a CLI?",
        sub: "Para servidores, dev boxes remotas e setups headless. Mesmo daemon do Desktop, instalado via terminal.",
        installLabel: "Instalar",
        startLabel: "Iniciar daemon",
        sshNote: "Já está em um servidor? Os mesmos comandos funcionam via SSH.",
        copyLabel: "Copiar",
        copiedLabel: "Copiado",
      },
      cloud: {
        title: "Runtime na nuvem (lista de espera)",
        sub: "Hospedamos o runtime para você. Ainda não disponível — deixe seu e-mail para ser avisado.",
      },
      footer: {
        releaseNotes: "O que há de novo na {version}",
        allReleases: "Ver todas as versões",
        currentVersion: "Versão atual: {version}",
        versionUnavailable: "Versão indisponível — confira no GitHub",
      },
    },
    contactSales: {
      pageTitle: "Falar com vendas",
      pageDescription:
        "Converse com a equipe Multica sobre implementar fluxos humanos + agentes na sua empresa.",
      eyebrow: "Falar com vendas",
      title: "Vamos entender suas necessidades",
      subtitle: "Ajude-nos a preparar a melhor solução antes de entrarmos em contato.",
      notice: {
        badge: "Nosso sistema reconhece apenas domínios de e-mail corporativos.",
        body: "Solicitações de e-mails pessoais (ex.: @gmail.com, @outlook.com) não serão detectadas nem processadas.",
      },
      fields: {
        firstName: "Nome",
        lastName: "Sobrenome",
        businessEmail: "E-mail corporativo",
        businessEmailHint:
          "E-mail da empresa obrigatório. Use um domínio corporativo válido para que possamos retornar o contato.",
        companyName: "Nome da empresa",
        companySize: "Tamanho da empresa",
        countryRegion: "País / Região",
        useCase: "Como você pretende usar ou colaborar com o Multica?",
        goals: "Seus objetivos ou desafios",
        goalsHint:
          "Conte o que gostaria de alcançar com o Multica ou os desafios que enfrenta. Quanto mais detalhes, melhor poderemos ajudar.",
        selectPlaceholder: "Selecione",
        submit: "Enviar",
        submitting: "Enviando…",
      },
      companySizes: [
        { value: "1-10", label: "1 – 10 funcionários" },
        { value: "11-50", label: "11 – 50 funcionários" },
        { value: "51-200", label: "51 – 200 funcionários" },
        { value: "201-500", label: "201 – 500 funcionários" },
        { value: "501-1000", label: "501 – 1.000 funcionários" },
        { value: "1000+", label: "Mais de 1.000 funcionários" },
      ],
      useCases: [
        { value: "evaluate", label: "Avaliando o Multica para minha equipe" },
        { value: "adopt_team", label: "Implementando o Multica em equipe ou empresa" },
        { value: "self_host", label: "Self-host na nossa infraestrutura" },
        { value: "integrate", label: "Integrando o Multica com ferramentas existentes" },
        { value: "partner", label: "Parceria ou revenda" },
        { value: "other", label: "Outro" },
      ],
      countries: base.contactSales.countries,
      consent: {
        intro:
          "A Multica, Inc. respeita sua privacidade. Usaremos suas informações pessoais apenas para gerenciar sua conta e entregar os produtos ou serviços solicitados. Ocasionalmente, gostaríamos de compartilhar atualizações de produto, boas práticas e insights relevantes. Informe abaixo se deseja receber nossas comunicações.",
        outreach:
          "Desejo receber comunicação individual da Multica, Inc., incluindo atualizações de serviço, suporte e follow-ups comerciais.",
        updates:
          "Desejo receber atualizações de produto, insights e convites para eventos da Multica.",
        unsubscribe:
          "Você pode cancelar a inscrição a qualquer momento. Para mais detalhes sobre como tratamos seus dados e direitos de privacidade, consulte nossa",
        submitConsent:
          "Ao clicar em \"Enviar\", você consente que a Multica, Inc. armazene e processe suas informações para entregar o conteúdo solicitado.",
        privacyLinkLabel: "Política de Privacidade.",
        privacyLinkHref: "/about",
      },
      success: {
        title: "Obrigado — recebemos sua mensagem.",
        message:
          "Um membro da equipe Multica responderá em até três dias úteis. Enquanto isso, explore a documentação ou dê uma estrela no GitHub.",
        cta: "Voltar ao início",
      },
      errors: {
        generic: "Algo deu errado — tente novamente em instantes.",
        rateLimit:
          "Recebemos algumas solicitações deste endereço recentemente. Tente novamente em breve.",
        freeEmail:
          "Use um e-mail corporativo — provedores gratuitos (gmail, outlook, etc.) não são aceitos.",
        invalidEmail: "Esse endereço de e-mail não parece válido.",
      },
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
