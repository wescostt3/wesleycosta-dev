// Portfolio Data Configuration File
// Edit this file to customize the portfolio content easily!

window.PORTFOLIO_DATA = {
  personal: {
    name: "WESLEY COSTA",
    profileImg: "assets/profile.png",
    role: "Full Stack Developer & UI/UX Architect",
    tagline: "React • Node.js • Supabase • Custom CSS & OKLCH Styles • Clean Code",
    welcomeText: "Hi, I'm Wesley Costa",
    shortIntro: "I develop premium web platforms that marry technical robustness with exquisite UI/UX design.",
    quote: '"Simplicity is the ultimate sophistication. I build systems that are beautiful on the outside and solid on the inside."',
  },
  about: {
    title: "Full Stack Developer passionate about crafting premium digital experiences",
    luckyButtonText: "Wesley Costa",
    paragraphs: [
      "I specialize in engineering full-stack web applications from scratch, bringing together robust backend architectures, optimized database models (Supabase / PostgreSQL), and pixel-perfect interactive frontends.",
      "With a strong eye for UI/UX details, I design executive-level dashboards, clean responsive layouts, and custom operational tools that optimize business workflows. I focus on code maintainability, high performance, and visual excellence."
    ],
    highlights: [
      { label: "Full Stack Architect", icon: "cpu" },
      { label: "Supabase & SQL expert", icon: "database" },
      { label: "UI/UX & CSS passionate", icon: "palette" }
    ]
  },
  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript (ES6+)", level: 95, icon: "⚡" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "SQL", level: 90, icon: "🗃️" },
        { name: "HTML5 & CSS3 (OKLCH)", level: 95, icon: "🎨" },
        { name: "Python", level: 75, icon: "🐍" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 92, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "🌐" },
        { name: "Node.js & Express", level: 90, icon: "🟢" },
        { name: "Tailwind CSS", level: 95, icon: "💨" }
      ]
    },
    {
      category: "Data & Persistence",
      skills: [
        { name: "Supabase", level: 95, icon: "⚡" },
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "LocalStorage & Cache APIs", level: 95, icon: "💾" }
      ]
    },
    {
      category: "Tools & Deployments",
      skills: [
        { name: "Git & GitHub Workflow", level: 95, icon: "🌱" },
        { name: "Vercel", level: 90, icon: "▲" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "Figma (UI/UX Design)", level: 85, icon: "📐" }
      ]
    }
  ],
  experience: [
    {
      title: "Lead Full Stack Developer",
      company: "CenterShip Project",
      period: "May 2026 - Present",
      description: "Leading architectural design, data modeling, and deployment of CenterShip Financeiro—a high-fidelity static financial application integrated with Supabase and custom vanilla JS database layers. Built print-ready proposal generators, dashboard KPIs, and secure authentication flows.",
      icon: "briefcase",
      skills: ["JavaScript", "CSS (OKLCH)", "Supabase", "Git/GitHub", "Vercel"]
    },
    {
      title: "Full Stack Web Developer",
      company: "RM Sobras Reciclagem Industrial",
      period: "2025 - 2026",
      description: "Designed and engineered an operational dashboard for tracking industrial scrap recycling. Developed custom calculators, interactive reports, and real-time operational analytics.",
      icon: "cpu",
      skills: ["React", "Node.js", "Express", "PostgreSQL", "CSS Grid"]
    },
    {
      title: "Freelance Web Developer & UI/UX Specialist",
      company: "Independent Contracts",
      period: "2024 - 2025",
      description: "Created landing pages, administrative panels, and visual assets for local clients. Applied executive density metrics, micro-animations, and responsive standards to maximize visual appeal and conversion rate.",
      icon: "palette",
      skills: ["UI/UX Design", "Figma", "HTML/CSS", "JavaScript", "Tailwind"]
    }
  ],
  projects: [
    {
      title: "CenterShip Financeiro",
      category: "Full Stack",
      description: "Premium static financial web app integrating Supabase data persistence, executive KPIs, custom interactive charts, and print-ready commercial proposals.",
      icon: "wallet",
      tech: ["HTML5", "CSS3", "Vanilla JS", "Supabase", "PostgreSQL"],
      gradient: "from-blue-500 to-indigo-600",
      demoLink: "https://portfolio-ai-engineer-eight.vercel.app/", // placeholder link
      githubLink: "https://github.com/wescostt3/centership-financeiro",
      caseStudy: {
        problem: "Financial tracking spreadsheets were complex, non-collaborative, and difficult to access on-the-go. The client needed a lightweight, secure tool that allows quick invoicing, PDF reporting, and MEI billing logs.",
        solution: "Engineered a static, high-performance web app that utilizes a lightweight Supabase integration with localStorage fallbacks for offline demo modes. Designed an oklch-color based CSS system for premium light and dark themes.",
        impact: "Reduced proposal generation time by 75% and enabled real-time billing validation for dozens of outsourced MEI service providers."
      }
    },
    {
      title: "RM Sobras Reciclagem",
      category: "Full Stack",
      description: "Operational management system for industrial recycling scrap tracking, including custom pricing formulas and interactive analytics dashboards.",
      icon: "recycle",
      tech: ["HTML5", "Tailwind CSS", "JavaScript", "Node.js"],
      gradient: "from-emerald-400 to-teal-600",
      demoLink: "https://github.com/wescostt3/riosul",
      githubLink: "https://github.com/wescostt3/riosul",
      caseStudy: {
        problem: "Industrial recycling yards lose track of inventory values and scrap prices due to fluctuating metal prices and paper-based tracking.",
        solution: "Built a reactive scrap management platform that calculates margins on-the-fly and tracks materials from arrival to shipping, visualizing everything on a clean desktop/mobile dashboard.",
        impact: "Improved inventory precision by 98% and slashed operational errors in material classification by 40%."
      }
    },
    {
      title: "CenterShip Next.js Re-build",
      category: "Frontend/Design",
      description: "Modern rebuild of the CenterShip operational portal using React, Next.js, TypeScript, and modern component lifecycle hooks.",
      icon: "layers",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      gradient: "from-purple-500 to-pink-600",
      demoLink: "https://github.com/wescostt3/centership-nextjs",
      githubLink: "https://github.com/wescostt3/centership-nextjs",
      caseStudy: {
        problem: "The static version needed scalability, SEO-friendliness for client-facing proposals, and structured static site generation.",
        solution: "Re-engineered the components in React and TypeScript using Next.js App Router, creating highly modular, reusable input and dashboard widgets.",
        impact: "Achieved a 100/100 Lighthouse Performance score and established a component library for rapid SaaS feature prototyping."
      }
    }
  ],
  contact: {
    email: "wescostt3@gmail.com",
    phone: "https://github.com/wescostt3", // using github link as placeholder/label since user didn't specify phone
    github: "https://github.com/wescostt3",
    linkedin: "https://www.linkedin.com/in/wescostt3" // placeholder/fallback
  }
};
