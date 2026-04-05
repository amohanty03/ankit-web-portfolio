"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const ENTER_DURATION = 0.45;

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const topBarRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const currentTheme = resolvedTheme ?? "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { label: "about/", href: "#about" },
    { label: "skills/", href: "#skills" },
    { label: "education/", href: "#education" },
    { label: "experience/", href: "#experience" },
    { label: "projects/", href: "#projects" },
    { label: "contact/", href: "#contact" },
  ];

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setMobileOpen(false);

    const target = document.querySelector(href);
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const navHeight = topBarRef.current?.offsetHeight ?? 64;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const maxScrollTop = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const defaultTop = Math.max(0, targetTop - navHeight - 10);
    const isMobile = window.innerWidth < 768;
    const top = href === "#contact" && !isMobile ? maxScrollTop : defaultTop;

    window.scrollTo({ top, behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ENTER_DURATION, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled
          ? "dark:bg-black/40 bg-white/40 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div
        ref={topBarRef}
        className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-2.5"
      >
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
              onClick={(event) => handleNavClick(event, item.href)}
              className="text-sm transition-colors duration-200 dark:text-white text-black hover:text-red-500 dark:hover:text-neutral-500"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="rounded-md bg-transparent p-1.5 text-black transition-colors duration-200 hover:text-red-500 dark:text-white dark:hover:text-neutral-500"
            aria-label="Toggle theme"
          >
            <Sun size={18} className="hidden dark:block" aria-hidden="true" />
            <Moon size={18} className="block dark:hidden" aria-hidden="true" />
          </button>

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
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="rounded-md px-2 py-1.5 text-sm text-black transition-colors duration-200 hover:text-red-500 dark:text-white dark:hover:text-neutral-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
