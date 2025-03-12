"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Muriel Daher",
    role: "Desenvolvedora Front-End",
    avatar: "/imgs/referrals/Muriel.jpeg",
    content: `
      Tive o privilégio de trabalhar com o Flávio, ele é profissional excepcional, dedicado e um 
      verdadeiro 'devorador de tasks', sempre entregando resultados com qualidade e agilidade.
      Além disso, percebo que está sempre buscando conhecimentos e compartilhando sobre seus
      interesses, contribuindo com discussões técnicas na equipe. Flávio possui um senso de ética
      e respeito que realmente se destacam, sempre demonstrando preocupação com a inclusão e o 
      tratamento igualitário de todos, dentro e fora do trabalho. É inspirador ver como ele encara 
      desafios com tanta resiliência e determinação. Trabalhar com ele foi uma experiência incrível,
      porque ele está sempre comprometido e disposto a colaborar com a equipe de forma genuína.
      Recomendo o Flávio para qualquer oportunidade que ele almeje. Ele é uma pessoa e profissional
      incrível, tenho certeza de que irá agregar muito a qualquer equipe ou projeto!
    `,
  },
  {
    id: 2,
    name: "Felipe Nário",
    role: "Engenhreiro de Software Sr",
    avatar: "/imgs/referrals/Felipe.jpeg",
    content: `
      O Flávio é uma daquelas joias raras na nossa área, sendo uma pessoa sempre em busca 
      de conhecimento, fazendo acontecer e não se deixando abalar por problemas que enfrenta, 
      tendo uma qualidade extremamente importante na nossa área: saber identificar e resolver problemas.
      Sendo um exímio profissional e pessoa, tem um futuro brilhante pela frente do qual só depende de si, 
      e com certeza vai se tornar uma referência, sendo um profissional que qualquer pessoa quer ter em sua equipe.
    `,
  },
  {
    id: 3,
    name: "Cacá Neves",
    role: "Designer de Produto",
    avatar: "/imgs/referrals/Caca.jpeg",
    content: `
      Flavio é uma máquina! Pude acompanhar o comecinho da sua carreira e sou 
      totalmente encantado pela dedicação desse garoto. Aprende rápido, é super obstinado e criativo, 
      proativo e sempre muito alegre. Um talento!
    `,
  },
  {
    id: 4,
    name: "Hebert Sena",
    role: "Tech Manager",
    avatar: "/imgs/referrals/Hebert.jpeg",
    content: `
      É raro encontrar pessoas como o Flavio. Em todos os projetos que trabalhamos juntos, ele mostrou 
      uma resiliência e dedicação incomuns, mantendo-se firme e entregando o melhor de si mesmo nos dias 
      difíceis. E nos dias normais, Flavio não só atendia às expectativas, mas as superava com uma entrega 
      que impressionava a todos. O que mais admiro nele é essa força que poucos têm: ele encontra energia mesmo nos momentos 
      mais desafiadores, sem deixar que as dificuldades afetem o seu desempenho. Flavio representa o comprometimento em sua forma mais pura. Ele não precisa dizer que veste a 
      camisa; ele demonstra isso com resultados consistentes, que vão além do esperado. Em vez de um 
      simples "senso de dono", ele tem um profundo senso de compromisso, algo que considero ainda mais 
      valioso. Acredito que, com o apoio certo, sua geração tem muito a contribuir, e Flavio é a prova 
      disso. Sua dedicação é inspiradora e, mesmo sendo jovem, ele mostra o quão longe pode chegar quando 
      guiado pelo propósito e pelo esforço. Tenho orgulho de ter trabalhado ao lado dele e estou certo 
      de que ele ainda fará grandes coisas.
    `,
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
    <section id="depoimentos" className="py-20 bg-background">
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
              Depoimentos
            </span>{" "}
            e Recomendações
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que meus clientes e outros profissionais têm a dizer sobre
            meu trabalho e minha abordagem de desenvolvimento.
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
              className="bg-card p-8 rounded-xl shadow-md"
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
                  <h3 className="text-xl font-bold text-card-foreground">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role},{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
                <Quote className="ml-auto text-primary h-10 w-10 opacity-20" />
              </div>
              <p className="text-card-foreground text-lg italic">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>
            </motion.div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="bg-card p-2 rounded-full shadow hover:cursor-pointer hover:bg-primary hover:text-white transition-colors"
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
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="bg-card p-2 rounded-full shadow hover:cursor-pointer hover:bg-primary hover:text-white transition-colors"
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
