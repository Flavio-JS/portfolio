import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flávio JS | Desenvolvedor Front-end",
  description:
    "Portfólio profissional de Flávio JS, desenvolvedor front-end especializado em React, Next.js, TypeScript e Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <ThemeProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>
                &copy; {new Date().getFullYear()} Flávio JS. Todos os direitos
                reservados.
              </p>
            </div>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
