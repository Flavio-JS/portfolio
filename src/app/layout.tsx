import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flávio JS | Desenvolvedor Front-end e Criador de Interfaces Web",
  description:
    "Portfólio de Flávio JS, desenvolvedor front-end focado na criação de sites modernos, rápidos e responsivos com React, Next.js e tecnologias de ponta. Soluções para negócios e projetos digitais que buscam performance e design profissional.",
  keywords: [
    "Desenvolvedor Front-end",
    "Criação de sites",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Sites modernos",
    "Portfólio de desenvolvedor",
    "Interface responsiva",
    "Desenvolvedor freelancer",
    "Flávio JS",
  ],
  openGraph: {
    title: "Flávio JS | Desenvolvedor Front-end e Criador de Interfaces",
    description:
      "Veja os projetos de Flávio JS — sites e aplicações construídos com foco em performance, experiência do usuário e tecnologia moderna.",
    url: "https://www.flaviojs.com/",
    siteName: "Flávio JS",
    images: [
      {
        url: "https://www.flaviojs.com/imgs/flavio-js.jpeg",
        width: 1200,
        height: 630,
        alt: "Portfólio de Flávio JS - Desenvolvedor Front-end e Criador de Interfaces",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  authors: [
    { name: "Flávio JS", url: "https://www.instagram.com/flavio.js.softwares" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <footer className="bg-secondary text-secondary-foreground py-8">
            <div className="container mx-auto px-4 text-center">
              <p>
                &copy; {new Date().getFullYear()} Flávio JS. Todos os direitos
                reservados.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
