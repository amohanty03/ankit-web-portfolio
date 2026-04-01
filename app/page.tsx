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
import ProgrammingIconsRibbonStack from "@/components/programming-languages";
import { Boxes } from "@/components/ui/background-boxes";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative isolate bg-black flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen pt-20">
      <Navbar />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="fixed inset-0 w-screen h-screen overflow-hidden z-10">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-500/12 via-transparent to-cyan-400/12 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes className="z-40 pointer-events-auto" />
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
        <div className="h-36 w-full"></div>
      </div>
    </main>
  );
}
