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

export default function Home() {
  return (
    <main className="relative isolate bg-black flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="fixed inset-0 w-screen h-screen overflow-hidden z-10">
        <div className="absolute inset-0 w-full h-full bg-black z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes className="z-40 pointer-events-auto" />
      </div>
      <div className="relative z-20 items-center justify-center w-full pointer-events-none">
        <div className="pointer-events-auto">
          <Hero />
        </div>
        <ProgrammingIconsRibbonStack />
        <Education />
        <Experience />
        <Projects />
        <div className="h-36 w-full"></div>
        <div className="fixed bottom-5 left-0 flex items-center justify-center w-full z-50 pointer-events-auto">
          <FloatingDock
            items={[
              {
                title: "Home",
                icon: (
                  <FaHouse className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                href: "/",
              },
              {
                title: "My Education",
                icon: (
                  <FaBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                href: "/education",
              },
              {
                title: "My Experience",
                icon: (
                  <FaBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                href: "/experience",
              },
              {
                title: "Projects",
                icon: (
                  <FaLaptopCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                href: "/projects",
              },
              {
                title: "Write to me!",
                icon: (
                  <FaRegEnvelope className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                href: "/contact",
              },
              // { title: "LinkedIn", icon: <FaLinkedinIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://www.linkedin.com/in/mohanty-ankit/" },
              // { title: "GitHub", icon: <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://github.com/amohanty03" }
            ]}
          />
        </div>
      </div>
    </main>
  );
}
