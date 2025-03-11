"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 bg-color-card/90 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent"
        >
          Flávio<span className="font-extrabold">JS</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {["Projetos", "Habilidades", "Depoimentos", "Contato"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "text-foreground transition-colors",
                  "hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent"
                )}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão de Tema */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={cn(
            "p-2 rounded-full transition-colors",
            "hover:cursor-pointer hover:text-primary"
          )}
          aria-label="Alternar tema"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-color-card">
          <ul className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["Projetos", "Habilidades", "Depoimentos", "Contato"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground hover:text-primary transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
