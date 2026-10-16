"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const isLight = document.documentElement.classList.contains("light");
    const next = isLight ? "dark" : "light";
    if (next === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="fixed top-8 right-9 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--dock-bg)] backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:shadow-cyan-500/20 active:scale-95 sm:top-9 sm:right-10"
    >
      <Sun className="theme-icon-sun h-5 w-5 text-amber-300 transition-transform duration-300" />
      <Moon className="theme-icon-moon h-5 w-5 text-cyan-600 transition-transform duration-300" />
    </button>
  );
}
