"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const handleScrollClick = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,95,31,0.1),transparent_40%)]"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Olá, eu sou{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Flávio JS
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Desenvolvedor Front-end especializado em criar interfaces modernas,
            limpas e funcionais.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-tertiary text-white px-6 py-3 rounded-lg font-medium"
              onClick={handleScrollClick}
            >
              Ver Projetos
            </motion.button>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 px-6 py-3 rounded-lg font-medium"
            >
              Contato
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center w-full"
        >
          <div className="relative h-[400px] md:h-[500px] w-full max-w-[400px] md:max-w-[500px] rounded-full overflow-hidden">
            <Image
            //   src="https://github.com/Flavio-JS.png"
              src="/imgs/flavio-js.jpeg"
              alt="Flávio JS - Desenvolvedor Front-end"
              fill
              className="object-cover rounded-lg"
              priority
              quality={100}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[-36px] md:bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        onClick={handleScrollClick}
      >
        <ArrowDown className="text-orange-500" size={32} />
      </motion.div>
    </section>
  );
}
