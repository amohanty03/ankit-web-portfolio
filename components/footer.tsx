import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="pointer-events-auto relative mt-2 w-full border-t border-black/10 dark:border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-1 px-6 py-2 sm:px-10 md:flex-row md:items-center md:gap-1.5 md:px-0">
        <p className="text-[10px] text-neutral-500 dark:text-neutral-500 sm:text-[11px] md:flex-1">
          Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
        </p>
        <div className="flex w-full items-center gap-2 md:ml-auto md:w-auto md:shrink-0">
          <p className="text-[10px] text-neutral-500 dark:text-neutral-500 sm:text-[11px]">
            &copy; {new Date().getFullYear()} Ankit Mohanty. All rights
            reserved.
          </p>
          <a
            href="https://github.com/amohanty03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/15 text-neutral-700 transition-colors hover:border-orange-500/50 hover:text-orange-600 dark:border-white/20 dark:text-neutral-200 dark:hover:border-orange-300/50 dark:hover:text-orange-300"
            aria-label="GitHub"
          >
            <FaGithub className="h-3 w-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohanty-ankit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/15 text-neutral-700 transition-colors hover:border-orange-500/50 hover:text-orange-600 dark:border-white/20 dark:text-neutral-200 dark:hover:border-orange-300/50 dark:hover:text-orange-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
