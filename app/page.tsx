"use client";
import React from "react";
import Hero from "@/components/hero";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  FaHouse,
  FaUser,
  FaLaptopCode,
  FaRegEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaFileArrowDown,
  FaBook,
  FaBriefcase,
} from "react-icons/fa6";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import MagicButton from "@/components/ui/magic-button";
import { Timeline } from "@/components/ui/timeline";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ProgrammingIconsRibbonStack from "@/components/programming-languages";
import { Boxes } from "@/components/ui/background-boxes";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative isolate bg-white dark:bg-black flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen pt-20">
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
      <div className="relative z-20 items-center justify-center w-full pointer-events-none">
        <div id="about" className="pointer-events-auto scroll-mt-28">
          <Hero />
        </div>
        <div id="skills" className="pointer-events-auto scroll-mt-28">
          <ProgrammingIconsRibbonStack />
        </div>
        <div id="education" className="pointer-events-auto scroll-mt-28">
          <Education />
        </div>
        <div id="experience" className="pointer-events-auto scroll-mt-28">
          <Experience />
        </div>
        <div id="projects" className="pointer-events-auto scroll-mt-28">
          <Projects />
        </div>
        <div id="contact" className="pointer-events-auto scroll-mt-28">
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
