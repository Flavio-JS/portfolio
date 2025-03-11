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
    title: "E-commerce Moderno",
    description:
      "Loja virtual completa com carrinho de compras, filtros e sistema de pagamento integrado.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Dashboard Analítico",
    description:
      "Painel administrativo com gráficos interativos e visualização de dados em tempo real.",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "App de Gestão de Tarefas",
    description:
      "Aplicativo para gerenciamento de tarefas com recursos de arrastar e soltar e notificações.",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    githubUrl: "#",
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
            Meus{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Projetos
            </span>
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
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card text-foreground p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Ver projeto online"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card text-foreground p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Ver código no GitHub"
                      >
                        <Github size={20} />
                      </a>
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
                      className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full"
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
