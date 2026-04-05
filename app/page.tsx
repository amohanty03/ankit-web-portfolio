"use client";
import React from "react";
import Hero from "@/components/hero";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ProgrammingIconsRibbonStack from "@/components/programming-languages";
import { Boxes } from "@/components/ui/background-boxes";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const sectionClass =
    "pointer-events-auto flex min-h-screen w-full items-center justify-center py-6";

  return (
    <main className="relative isolate mx-auto flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-black">
      <Navbar />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="fixed inset-0 z-10 hidden overflow-hidden sm:block">
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-orange-500/12 via-transparent to-cyan-400/12 [mask-image:radial-gradient(transparent,white)]" />
        <Boxes className="z-40 pointer-events-none" />
      </div>
      <div className="absolute inset-0 z-10 overflow-hidden sm:hidden">
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-400/10" />
        <Boxes
          density="compact"
          className="z-40 pointer-events-none opacity-35"
        />
      </div>
      <div className="relative z-20 w-full items-center justify-center pointer-events-none">
        <section id="about" className={sectionClass}>
          <Hero />
        </section>
        <section id="skills" className={sectionClass}>
          <ProgrammingIconsRibbonStack />
        </section>
        <section id="education" className={sectionClass}>
          <Education />
        </section>
        <section id="experience" className={sectionClass}>
          <Experience />
        </section>
        <section id="projects" className={sectionClass}>
          <Projects />
        </section>
        <section
          id="contact"
          className="pointer-events-auto flex min-h-screen w-full flex-col justify-between pt-6 pb-0"
        >
          <div className="flex w-full flex-1 items-center justify-center">
            <Contact />
          </div>
          <Footer />
        </section>
      </div>
    </main>
  );
}
