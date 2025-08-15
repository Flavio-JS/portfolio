"use client";

import { motion } from "framer-motion";
import { TechCarousel } from "./tech-carousel";
import { skills } from "@/constants/skills";
import { techIcons } from "@/constants/techIcons";

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
            <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça as tecnologias e ferramentas que utilizo para criar soluções
            web modernas e eficientes.
          </p>
        </motion.div>

        <TechCarousel techItems={techIcons} autoPlaySpeed={0.8} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="bg-gradient-to-r from-primary to-tertiary w-12 h-12 rounded-lg flex items-center justify-center text-primary-foreground mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary hover:cursor-pointer to-tertiary text-white px-6 py-3 rounded-lg font-medium"
            onClick={() => window.open("/curriculo.pdf", "_blank")}
          >
            Visualizar CV
          </motion.button>
        </div>
      </div>
    </section>
  );
}
