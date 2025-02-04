"use client";
import React from "react";
import Hero from "@/components/Hero";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { FaHouse, FaUser, FaLaptopCode, FaRegEnvelope, FaLinkedinIn, FaGithub, FaFileArrowDown } from "react-icons/fa6";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import MagicButton from "@/components/ui/MagicButton";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto">
        <div className="items-center justify-center w-full">
        
          {/* <FloatingNav navItems={[{ name: "Home", link: "/" }, { name: "About", link: "/about" }]} /> */}
          <Hero />
          <About />
          <div className="h-36 w-full"></div> {/* Spacer before FloatingDock */}
          <div className="fixed bottom-5 left-0 flex items-center justify-center w-full z-50">
            <FloatingDock
              items={[
                { title: "Home", icon: <FaHouse className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/" },
                { title: "About", icon: <FaUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/about" },
                { title: "Projects", icon: <FaLaptopCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/projects" },
                { title: "Write to me!", icon: <FaRegEnvelope className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/contact" },
                { title: "LinkedIn", icon: <FaLinkedinIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://www.linkedin.com/in/mohanty-ankit/" },
                { title: "GitHub", icon: <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://github.com/amohanty03" }
              ]}
            />
          </div>
        </div>
    </main>
  );
}
