"use client";
import React from "react";
import Hero from "@/components/Hero";
import { FloatingDock } from "@/components/ui/FloatingDock";
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
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import MagicButton from "@/components/ui/MagicButton";
import About from "@/components/About";
import { Timeline } from "@/components/ui/Timeline";
import { Education } from "@/components/Education";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <AuroraBackground className="w-screen">
        <div className="items-center justify-center w-full">
          <Hero />
          <Education />
          <div className="h-36 w-full"></div> {/* Spacer before FloatingDock */}
          <div className="fixed bottom-5 left-0 flex items-center justify-center w-full z-50">
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
      </AuroraBackground>
    </main>
  );
}
