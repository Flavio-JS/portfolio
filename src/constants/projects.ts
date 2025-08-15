export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard",
    description:
      "Um painel interativo para visualização e gestão de informações financeiras. Inclui resumos de receitas, despesas e investimentos e agenda de reuniões.",
    tags: ["HTML5", "CSS3", "Material Icons"],
    image: "/imgs/projects/dashboard.png",
    liveUrl: "",
    githubUrl: "https://github.com/Flavio-JS/dashboard",
  },
  {
    id: 2,
    title: "Todo List",
    description:
      "Uma aplicação para gerenciar tarefas, permitindo a criação de listas, atribuição de prioridades e marcação de tarefas como concluídas ou pendentes.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    image: "/imgs/projects/to-do-list.png",
    liveUrl: "",
    githubUrl: "https://github.com/Flavio-JS/to-do-list",
  },
  {
    id: 3,
    title: "Bank-Dash",
    description:
      "BankDash é um dashboard interativo para visualização e gestão de informações financeiras, incluindo gráficos, previsões e transações.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "/imgs/projects/bank-dash.png",
    liveUrl:
      "https://bankdash-frontend-73qrl5l1s-flaviojs-projects.vercel.app/dashboard",
    githubUrl: "https://github.com/Flavio-JS/bankdash-frontend",
  },
  {
    id: 4,
    title: "Esse Portfolio!",
    description: "Um site pessoal para apresentar meu trabalho e habilidades.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
    ],
    image: "/imgs/projects/portfolio.png",
    liveUrl: "https://www.flaviojs.com/",
    githubUrl: "https://github.com/Flavio-JS/portfolio",
  },
  {
    id: 5,
    title: "Supplier Control",
    description:
      "Uma aplicação CRUD para gerenciar fornecedores, com funcionalidades como cadastro, edição, exclusão, busca por nome e preenchimento automático de endereço via API ViaCEP.",
    tags: [
      "React.js",
      "TypeScript",
      "Vite",
      "Styled Components",
      "Radix UI",
      "React Hook Form",
      "Yup",
      "Axios",
      "JSON Server",
      "Lucide React",
      "UUID",
    ],
    image: "/imgs/projects/supplier-control.png",
    liveUrl: "",
    githubUrl: "https://github.com/Flavio-JS/supplier-control",
  },
  {
    id: 6,
    title: "Associação Sankofa",
    description:
      "Plataforma institucional para a Associação Sankofa, com histórico de projetos culturais desde 2015, galeria de performances, área administrativa para gestão de conteúdo (notícias, editais e imagens) e integração com redes sociais. Desenvolvido para promover a cultura afro-brasileira através da música e dança.",
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Lucide React",
      "Font Awesome",
    ],
    image: "/imgs/projects/associacao-sankofa.png",
    liveUrl: "https://projeto-sankofa.vercel.app/",
    githubUrl: "https://github.com/Flavio-JS/projeto-sankofa",
  },
  {
    id: 7,
    title: "PokeHunter",
    description:
      "Aplicação que combina dados da OpenWeather API e da PokéAPI para exibir informações climáticas e o Pokémon correspondente ao clima de uma cidade. Inclui histórico de consultas e seção de efetividade em batalhas para mostrar contra quais tipos o Pokémon é forte ou fraco.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Axios",
      "Font Awesome",
      "Radix UI",
      "NestJS",
    ],
    image: "/imgs/projects/poke-hunter.png",
    liveUrl: "",
    githubUrl: "https://github.com/Flavio-JS/poke-hunter",
  },
];
