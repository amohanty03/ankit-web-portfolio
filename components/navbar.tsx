"use client";

import React, { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
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
        scrolled
          ? "dark:bg-black/40 bg-white/40 backdrop-blur-md"
          : "bg-transparent",
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

        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="rounded-md bg-transparent p-1.5 text-black transition-colors duration-200 hover:text-red-500 dark:text-white dark:hover:text-neutral-500"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-md p-1.5 text-black transition-colors duration-200 hover:text-red-500 dark:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-auto w-full max-w-5xl px-4 pb-3 md:hidden">
          <div className="rounded-xl border border-black/10 bg-white/80 p-3 backdrop-blur-md dark:border-white/10 dark:bg-black/70">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-1.5 text-sm text-black transition-colors duration-200 hover:text-red-500 dark:text-white dark:hover:text-neutral-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
