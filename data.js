// Portfolio Data Configuration File
// Edit this file to customize the portfolio content easily!

window.PORTFOLIO_DATA = {
  personal: {
    name: "WESLEY COSTA",
    profileImg: "assets/profile.jpg",
    role: "Desenvolvedor Full Stack & Arquiteto UI/UX",
    tagline: "React • Node.js • Supabase • Custom CSS & OKLCH Styles • Código Limpo",
    welcomeText: "Olá, eu sou Wesley Costa",
    shortIntro: "Desenvolvo plataformas web premium de alta performance, unindo robustez técnica a um design UI/UX refinado.",
    quote: '"Construindo o futuro com IA, uma rede neural de cada vez."',
  },
  about: {
    title: "Desenvolvedor Full Stack apaixonado por criar experiências digitais premium",
    luckyButtonText: "Wesley Costa",
    quote: '"Construindo o futuro com IA, uma rede neural de cada vez."',
    paragraphs: [
      "Especializo-me em engenharia de aplicações web completas do zero, integrando arquiteturas sólidas de back-end, modelos de banco de dados otimizados (Supabase / PostgreSQL) e front-ends interativos pixel-perfect.",
      "Com um olhar apurado para detalhes de UI/UX, projeto dashboards de nível executivo, layouts responsivos limpos e ferramentas operacionais que otimizam os fluxos de trabalho empresariais. Meu foco principal é a manutenibilidade do código, alta performance e excelência visual."
    ],
    highlights: [
      { label: "Fluente em algoritmos", icon: "code" },
      { label: "Movido a cafeína", icon: "coffee" },
      { label: "Apaixonado por IA", icon: "heart" }
    ]
  },
  skills: [
    {
      category: "Linguagens de Programação",
      skills: [
        { name: "JavaScript (ES6+)", level: 95, icon: "⚡" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "SQL", level: 90, icon: "🗃️" },
        { name: "HTML5 & CSS3 (OKLCH)", level: 95, icon: "🎨" },
        { name: "Python", level: 75, icon: "🐍" }
      ]
    },
    {
      category: "Frameworks e Bibliotecas",
      skills: [
        { name: "React", level: 92, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "🌐" },
        { name: "Node.js & Express", level: 90, icon: "🟢" },
        { name: "Tailwind CSS", level: 95, icon: "💨" }
      ]
    },
    {
      category: "Dados e Persistência",
      skills: [
        { name: "Supabase", level: 95, icon: "⚡" },
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "LocalStorage & Cache APIs", level: 95, icon: "💾" }
      ]
    },
    {
      category: "Ferramentas e Deploy",
      skills: [
        { name: "Fluxo Git & GitHub", level: 95, icon: "🌱" },
        { name: "Vercel", level: 90, icon: "▲" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "Figma (Design UI/UX)", level: 85, icon: "📐" }
      ]
    }
  ],
  experience: [
    {
      title: "Desenvolvedor Full Stack Líder",
      company: "Projeto CenterShip",
      period: "Maio de 2026 - Presente",
      description: "Liderando o design de arquitetura, modelagem de dados e deploy do CenterShip Financeiro — um aplicativo financeiro estático de alta fidelidade integrado ao Supabase e camadas de banco de dados locais em Vanilla JS. Desenvolvi geradores de propostas comerciais prontos para impressão, KPIs de painel executivo e fluxos de autenticação seguros.",
      icon: "briefcase",
      skills: ["JavaScript", "CSS (OKLCH)", "Supabase", "Git/GitHub", "Vercel"]
    },
    {
      title: "Desenvolvedor Web Full Stack",
      company: "RM Sobras Reciclagem Industrial",
      period: "2025 - 2026",
      description: "Projetei e programei um painel operacional para rastreamento de reciclagem de resíduos industriais. Criei calculadoras sob medida, relatórios interativos e análises operacionais em tempo real.",
      icon: "cpu",
      skills: ["React", "Node.js", "Express", "PostgreSQL", "CSS Grid"]
    },
    {
      title: "Desenvolvedor Freelancer & Especialista UI/UX",
      company: "Contratos Independentes",
      period: "2024 - 2025",
      description: "Criação de landing pages, painéis administrativos e ativos visuais para clientes locais. Apliquei métricas de densidade executiva, micro-animações e padrões responsivos para maximizar o apelo visual e a taxa de conversão.",
      icon: "palette",
      skills: ["Design UI/UX", "Figma", "HTML/CSS", "JavaScript", "Tailwind"]
    }
  ],
  projects: [
    {
      title: "CenterShip Financeiro",
      category: "Full Stack",
      description: "Plataforma web financeira estática premium integrada ao Supabase, KPIs executivos, gráficos interativos personalizados e propostas comerciais prontas para impressão.",
      icon: "wallet",
      tech: ["HTML5", "CSS3", "Vanilla JS", "Supabase", "PostgreSQL"],
      gradient: "from-blue-500 to-indigo-600",
      demoLink: "https://portfolio-ai-engineer-eight.vercel.app/",
      githubLink: "https://github.com/wescostt3/centership-financeiro",
      caseStudy: {
        problem: "As planilhas de rastreamento financeiro eram complexas, não colaborativas e difíceis de acessar em trânsito. O cliente precisava de uma ferramenta leve e segura para faturamento rápido, relatórios em PDF e logs de cobrança MEI.",
        solution: "Desenvolvi uma aplicação web estática de alto desempenho que utiliza integração Supabase leve com fallbacks para localStorage nos modos de demonstração offline. Projetei um sistema CSS baseado em oklch para temas claro/escuro premium.",
        impact: "Reduzi o tempo de geração de propostas em 75% e ativei a validação de faturamento em tempo real para prestadores de serviços MEI terceirizados."
      }
    },
    {
      title: "RM Sobras Reciclagem",
      category: "Full Stack",
      description: "Sistema de gerenciamento operacional para rastreamento de sucatas de reciclagem industrial, incluindo fórmulas de precificação personalizadas e dashboards analíticos reativos.",
      icon: "recycle",
      tech: ["HTML5", "Tailwind CSS", "JavaScript", "Node.js"],
      gradient: "from-emerald-400 to-teal-600",
      demoLink: "https://github.com/wescostt3/riosul",
      githubLink: "https://github.com/wescostt3/riosul",
      caseStudy: {
        problem: "Os pátios de reciclagem industrial perdiam a precisão do valor de estoque e preços de sucata devido à oscilação das cotações de metais e rastreamento em papel.",
        solution: "Construí uma plataforma reativa de gestão que calcula margens em tempo real e rastreia os materiais desde a entrada até o envio, visualizando tudo em um painel responsivo.",
        impact: "Aumentei a precisão do inventário em 98% e reduzi em 40% os erros operacionais de classificação de materiais."
      }
    },
    {
      title: "CenterShip Next.js Rebuild",
      category: "Frontend/Design",
      description: "Reconstrução moderna do portal operacional da CenterShip usando React, Next.js, TypeScript e ganchos de ciclo de vida modernos.",
      icon: "layers",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      gradient: "from-purple-500 to-pink-600",
      demoLink: "https://github.com/wescostt3/centership-nextjs",
      githubLink: "https://github.com/wescostt3/centership-nextjs",
      caseStudy: {
        problem: "A versão estática precisava de escalabilidade, otimização de SEO para propostas voltadas para clientes e renderização estática estruturada.",
        solution: "Engenharia de componentes em React/TypeScript usando o Next.js App Router, criando widgets de entrada e painéis altamente modulares e reutilizáveis.",
        impact: "Alcançou pontuação Lighthouse de 100/100 em Desempenho e estabeleceu uma biblioteca de componentes robusta para rápida prototipagem de novos recursos SaaS."
      }
    }
  ],
  contact: {
    email: "wescostt3@gmail.com",
    phone: "https://github.com/wescostt3",
    github: "https://github.com/wescostt3",
    linkedin: "https://www.linkedin.com/in/wescostt3"
  }
};
