import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

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
