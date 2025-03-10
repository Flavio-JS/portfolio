"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    role: "CEO",
    company: "TechSolutions",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "O Flávio desenvolveu nosso site institucional com excelência. O resultado superou nossas expectativas, com um design moderno e funcional que reflete perfeitamente nossa marca.",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Diretor de Marketing",
    company: "Inovação Digital",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Contratamos o Flávio para redesenhar nossa plataforma e o resultado foi incrível. Além de um visual impecável, a usabilidade melhorou significativamente, aumentando nossa taxa de conversão.",
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Fundadora",
    company: "Startup Connect",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Trabalhar com o Flávio foi uma experiência excelente. Ele entendeu perfeitamente nossas necessidades e entregou um produto final que superou todas as expectativas. Recomendo fortemente!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Depoimentos
            </span>{" "}
            de Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja o que meus clientes têm a dizer sobre meu trabalho e minha
            abordagem de desenvolvimento.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={
                      testimonials[currentIndex].avatar || "/placeholder.svg"
                    }
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role},{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
                <Quote className="ml-auto text-orange-500 h-10 w-10 opacity-20" />
              </div>
              <p className="text-gray-700 text-lg italic">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>
            </motion.div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-orange-500" : "bg-gray-300"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
