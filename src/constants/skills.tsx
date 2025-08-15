import { Code, Layout, Server, Users, Zap } from "lucide-react";

export const skills = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Front-end",
    description:
      "Desenvolvimento de interfaces modernas, responsivas e acessíveis (WCAG 2.1) com foco em performance e tomada de decisão estratégica.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Redux",
      "Zustand",
      "React Query",
      "Recharts",
      "Chart.js",
      "Shadcn UI",
      "Radix UI",
      "Tailwind CSS",
      "Styled Components",
      "Framer Motion",
    ],
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "UI/UX & Sistemas",
    description:
      "Criação de Design Systems escaláveis e interfaces acessíveis, com foco em arquitetura de componentes e experiência do usuário.",
    technologies: [
      "Figma",
      "Tailwind CSS",
      "Design System",
      "Componentização",
      "Acessibilidade (WCAG 2.1)",
      "Radix UI",
      "Shadcn UI",
      "Responsividade",
    ],
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Back-end & Infra",
    description:
      "Desenvolvimento e integração de APIs RESTful com sistemas complexos, segurança e modelagem de dados.",
    technologies: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "RESTful APIs",
      "JWT",
      "OAuth2",
      "Docker",
    ],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Qualidade & DevOps",
    description:
      "Garantia de qualidade através de testes automatizados e implementação de pipelines CI/CD em ambientes cloud.",
    technologies: [
      "Jest",
      "React Testing Library",
      "Playwright",
      "TDD",
      "GitHub",
      "CI/CD",
      "Azure",
      "Google Tag Manager",
      "Mixpanel",
      "Clean Code",
    ],
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Liderança & Métodos",
    description:
      "Gestão técnica de squads, mentoria, documentação e aplicação de metodologias ágeis.",
    technologies: [
      "Tech Lead",
      "SCRUM",
      "Arquitetura de Software",
      "Revisão de Código",
      "Documentação",
      "Onboarding",
    ],
  },
];
