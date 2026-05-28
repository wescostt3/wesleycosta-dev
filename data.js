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
      description: "Dashboard financeiro completo com conciliação, KPIs em tempo real, geração de propostas em papel timbrado, comprovantes e gráficos integrados ao Supabase.",
      logoImg: "assets/centership-logo.svg",
      tech: ["HTML5", "CSS3 (OKLCH)", "Vanilla JS", "Supabase", "PostgreSQL"],
      gradient: "from-blue-500 to-indigo-600",
      demoLink: "https://centership-financeiro.vercel.app/",
      githubLink: "https://github.com/wescostt3/centership-financeiro",
      caseStudy: {
        problem: "Gestão financeira integrada corporativa necessitava de conciliação semanal rápida, controle de propostas comerciais de serviços e relatórios de fluxo de caixa em PDF.",
        solution: "Desenvolvimento de um dashboard financeiro de alto desempenho integrado ao Supabase, apresentando fluxos de caixa, painéis de auditoria, faturamentos semanais e gerador de propostas otimizadas para impressão.",
        impact: "Aumento de 85% na velocidade de faturamento empresarial e auditoria de contas a pagar e receber em tempo real."
      }
    },
    {
      title: "Sushique Protótipo",
      category: "Frontend/Design",
      description: "Experiência digital premium para culinária japonesa artesanal. Site institucional fluido com interface mobile de pedidos e atalhos de widgets reativos.",
      logoImg: "assets/sushique-logo.svg",
      tech: ["HTML5", "CSS3", "JavaScript", "Design Responsivo", "Mobile Views"],
      gradient: "from-red-500 to-amber-600",
      demoLink: "https://sushique-prototipo.vercel.app",
      githubLink: "https://github.com/wescostt3/sushique-prototipo",
      caseStudy: {
        problem: "Restaurantes premium exigem presença online sofisticada que transmita a qualidade física da culinária japonesa e facilite pedidos rápidos e reservas de mesas.",
        solution: "Criação de um portal responsivo elegante com identidade visual baseada em tons de bege e bordô, acoplado a um protótipo de aplicativo nativo Android e widgets.",
        impact: "Navegação fluida e imersiva com taxas de conversão de reservas aprimoradas através de design UI/UX executivo focado no usuário."
      }
    },
    {
      title: "De Ponto a Ponto",
      category: "Full Stack",
      description: "Sistema de gestão de jornada corporativa e ponto facial REP-P homologado pela portaria 671 do MTE, com auditorias automatizadas de folha de pagamento.",
      logoImg: "assets/deponto-logo.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "REST API", "Supabase"],
      gradient: "from-purple-500 to-pink-600",
      demoLink: "https://de-ponto-a-ponto-ltda.vercel.app/",
      githubLink: "https://github.com/wescostt3/de-ponto-a-ponto-ltda",
      caseStudy: {
        problem: "Empresas enfrentam altos riscos legais e inconsistências de ponto nas folhas mensais de funcionários por falta de auditorias automatizadas e hardware seguro.",
        solution: "Construção de uma aplicação reativa integrada a hardware REP-P de reconhecimento facial e rotinas automáticas de validação e conciliação de marcações de folha.",
        impact: "Garantia de conformidade jurídica com a portaria 671 MTE e redução expressiva de 90% em inconsistências na folha mensal do departamento pessoal."
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
