"use client";
import React from "react";
import { cn } from "@/lib/utils";
import * as Icons from "@/components/programming-icons";
import { motion } from "framer-motion";
import SectionTitle from "./ui/section-title";

type Chip = {
  label: string;
  icon?: React.ReactNode;
};

type Category = {
  title: string;
  accent: string;
  chips: Chip[];
};

const categories: Category[] = [
  {
    title: "Languages",
    accent: "from-red-500/20 via-orange-500/10 to-transparent",
    chips: [
      { label: "Java", icon: <Icons.Java height={42} width={42} /> },
      { label: "C++", icon: <Icons.CPlusPlus height={42} width={42} /> },
      { label: "HTML/CSS", icon: <Icons.HTML5 height={42} width={42} /> },
      { label: "SQL", icon: <Icons.SQL height={42} width={42} /> },
      { label: "Python", icon: <Icons.Python height={42} width={42} /> },
      {
        label: "JavaScript/TypeScript",
        icon: <Icons.TypeScript height={42} width={42} />,
      },
      { label: "Ruby", icon: <Icons.Ruby height={42} width={42} /> },
    ],
  },
  {
    title: "Databases and Frameworks",
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
    chips: [
      { label: "React", icon: <Icons.React height={42} width={42} /> },
      { label: "Node.js", icon: <Icons.NodeJS height={42} width={42} /> },
      { label: "gRPC", icon: <Icons.gRPC height={42} width={42} /> },
      { label: "Firebase", icon: <Icons.Firebase height={42} width={42} /> },
      { label: "SQLite", icon: <Icons.SQLite height={42} width={42} /> },
      { label: "MySQL", icon: <Icons.MySQL height={42} width={42} /> },
    ],
  },
  {
    title: "Tools and Platforms",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    chips: [
      { label: "Git", icon: <Icons.Git height={42} width={42} /> },
      { label: "Linux/UNIX", icon: <Icons.Linux height={42} width={42} /> },
      { label: "GCP", icon: <Icons.GoogleCloud height={42} width={42} /> },
      { label: "Power BI" },
      {
        label: "Android Studio",
        icon: <Icons.AndroidStudio height={42} width={42} />,
      },
      {
        label: "SQL Server Management Studio",
        icon: <Icons.SSMS height={42} width={42} />,
      },
      { label: "VS Code", icon: <Icons.VScode height={42} width={42} /> },
    ],
  },
  {
    title: "ML/Data",
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    chips: [
      { label: "Pandas", icon: <Icons.Pandas height={42} width={42} /> },
      { label: "NumPy", icon: <Icons.NumPy height={42} width={42} /> },
      {
        label: "Matplotlib",
        icon: <Icons.Matplotlib height={42} width={42} />,
      },
      { label: "PyTorch", icon: <Icons.PyTorch height={42} width={42} /> },
      {
        label: "Scikit-learn",
        icon: <Icons.ScikitLearn height={42} width={42} />,
      },
    ],
  },
  {
    title: "Focus Areas",
    accent: "from-amber-500/20 via-yellow-500/10 to-transparent",
    chips: [
      { label: "Distributed Systems" },
      { label: "Fullstack Development" },
      { label: "Frontend Development" },
      { label: "Databases" },
    ],
  },
];

const ProgrammingIconsRibbonStack = () => {
  return (
    <section id="languages-tools">
      <div className="relative mt-12 px-6 py-5 sm:px-10 md:mt-14 md:px-0 lg:mt-20 lg:px-0">
        <SectionTitle title="Technical Skills" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-5"
        >
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + index * 0.08,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_14px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-black/30 dark:shadow-[0_18px_60px_rgba(0,0,0,0.18)]",
                index === categories.length - 1
                  ? "md:col-span-2 xl:col-span-1"
                  : "",
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-70 dark:opacity-100",
                  category.accent,
                )}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="mt-2 text-xl font-semibold text-neutral-900 dark:text-white sm:text-2xl">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.chips.map((chip) => (
                    <span
                      key={chip.label}
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3 py-2 text-xs font-medium text-neutral-800 transition-colors duration-200 hover:border-black/20 hover:bg-white/95 dark:border-white/10 dark:bg-black/25 dark:text-neutral-200 dark:hover:border-white/20 dark:hover:bg-black/35"
                    >
                      {chip.icon ? (
                        <span className="flex h-5 w-5 items-center justify-center text-neutral-900 dark:text-white/90">
                          {chip.icon}
                        </span>
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-orange-500 dark:bg-orange-400" />
                      )}
                      <span className="whitespace-nowrap">{chip.label}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammingIconsRibbonStack;
