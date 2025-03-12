"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
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
    id: 4,
    title: "Dashboard",
    description:
      "Um painel interativo para visualização e gestão de informações financeiras. Inclui resumos de receitas, despesas e investimentos e agenda de reuniões.",
    tags: ["HTML5", "CSS3", "Material Icons"],
    image: "/imgs/projects/dashboard.png",
    liveUrl: "",
    githubUrl: "https://github.com/Flavio-JS/dashboard",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              Meus
            </span>{" "}
            Projetos
          </h2>
          <p className="max-w-2xl mx-auto">
            Conheça alguns dos meus trabalhos mais recentes, desenvolvidos com
            foco na experiência do usuário e nas melhores práticas de
            desenvolvimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, staggerChildren: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all will-change-transform"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              onFocus={()=> setActiveProject(project.id)}
              onBlur={()=> setActiveProject(null)}
              tabIndex={0}
              style={{ outline: "none" }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {activeProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4">
                    <div className="flex gap-4">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-card text-foreground p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="Ver projeto online"
                        >
                          <ExternalLink size={20} />
                        </a>
                      ) : (
                        <button
                          className="bg-card text-foreground p-2 rounded-full opacity-50 cursor-not-allowed"
                          aria-label="Link indisponível"
                          disabled
                        >
                          <ExternalLink size={20} />
                        </button>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-card text-foreground p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="Ver código no GitHub"
                        >
                          <Github size={20} />
                        </a>
                      ) : (
                        <button
                          className="bg-card text-foreground p-2 rounded-full opacity-50 cursor-not-allowed"
                          aria-label="Código indisponível"
                          disabled
                        >
                          <Github size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
