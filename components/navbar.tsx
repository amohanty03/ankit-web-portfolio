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
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-2.5">
        {/* Logo/Brand */}
        <img
          src="logo.png"
          alt="AM Logo"
          className="h-auto w-10 sm:w-12 md:w-14 lg:w-16 max-w-[64px]"
        />

        {/* Navigation Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition-colors duration-200 dark:text-white text-black hover:text-red-500 dark:hover:text-neutral-500"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="rounded-md bg-transparent p-1.5 text-black transition-colors duration-200 hover:bg-translucent hover:text-white dark:text-white dark:hover:text-neutral-500"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
      </div>
    </nav>
  );
}
