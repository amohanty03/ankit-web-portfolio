"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if dark mode is enabled
    const isDarkMode =
      document.documentElement.classList.contains("dark") || isDark;
    setIsDark(isDarkMode);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navItems = [
    { label: "about/", href: "#about" },
    { label: "skills/", href: "#skills" },
    { label: "education/", href: "#education" },
    { label: "experience/", href: "#experience" },
    { label: "projects/", href: "#projects" },
    { label: "contact/", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <img
          src="logo.png"
          alt="AM Logo"
          className="w-12 sm:w-16 md:w-20 lg:w-24 max-w-[75px] h-auto"
        />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="dark:text-neutral-400 text-black hover:text-red-500 dark:hover:text-white transition-colors duration-200 text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-transparent hover:bg-translucent transition-colors duration-200 text-neutral-400 hover:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
      </div>
    </nav>
  );
}
