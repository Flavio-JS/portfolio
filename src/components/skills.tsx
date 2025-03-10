"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Zap } from "lucide-react";

const skills = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Front-end",
    description:
      "Desenvolvimento de interfaces modernas e responsivas com React, Next.js e TypeScript.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "UI/UX",
    description:
      "Criação de interfaces intuitivas e atraentes com foco na experiência do usuário.",
    technologies: [
      "Tailwind CSS",
      "Styled Components",
      "Framer Motion",
      "Figma",
      "Responsive Design",
    ],
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Back-end",
    description:
      "Integração com APIs e desenvolvimento de funcionalidades no lado do servidor.",
    technologies: [
      "Node.js",
      "Express",
      "API REST",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Ferramentas",
    description:
      "Utilização de ferramentas modernas para otimizar o fluxo de desenvolvimento.",
    technologies: ["Git", "GitHub", "VS Code", "Webpack", "Jest", "Cypress"],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça as tecnologias e ferramentas que utilizo para criar soluções
            web modernas e eficientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
