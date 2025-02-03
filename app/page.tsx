"use client";
import React from "react";
import Hero from "@/components/Hero";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { FaHouse, FaUser, FaLaptopCode, FaRegEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="items-center justify-center w-full">
        {/* <FloatingNav navItems={[{ name: "Home", link: "/" }, { name: "About", link: "/about" }]} /> */}
        <Hero />
        <div className="relative flex items-center justify-center w-full mt-8">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-black-900 mx-auto">
            <p className="text-base sm:text-3xl font-bold text-black mb-6 dark:text-neutral-200 text-center">
              About Me
            </p>
            <div className="w-full" style={{ opacity: 1, transform: "none" }}>
              <ul className="mt-4 text-secondary text-[17px] max-w-3xl space-y-6 list-none" style={{ opacity: 1, transform: "none" }}>
                <li className="flex items-start" style={{ opacity: 1, transform: "none" }}>
                  <span className="mr-4 text-2xl flex-shrink-0">👨‍💻</span>
                  <span className="text-justify">I'm pursuing my Master of Science in Computer Science degree from Texas A&M and I'm keen on
                  building impactful software and innovative solutions.</span>
                </li>
                <li className="flex items-start" style={{ opacity: 1, transform: "none" }}>
                  <span className="mr-4 text-2xl flex-shrink-0">🎓</span>
                  <span className="text-justify">I graduated with my Bachelor of Science in Computer Science at University of Wisconsin-Madison. </span>
                </li>
                <li className="flex items-start" style={{ opacity: 1, transform: "none" }}>
                  <span className="mr-4 text-2xl flex-shrink-0">🏢</span>
                  <span className="text-justify">I worked as a Software Engineer Intern at DRS Daylight Solutions and served as an Undergraduate Research Assistant under Dr. Dane Morgan at University of Wisconsin-Madison. </span>
                </li>
                <li className="flex items-start" style={{ opacity: 1, transform: "none" }}>
                  <span className="mr-4 text-2xl flex-shrink-0">🛠</span>
                    <span className="text-justify">From full-stack development to distributed solutions, I've led projects that streamline operations and deliver real impact.</span>
                </li>
                <li className="flex items-start" style={{ opacity: 1, transform: "none" }}>
                  <span className="mr-4 text-2xl flex-shrink-0">🖋️</span>
                  <span className="text-justify">I may not be a know-it-all but I definitely consider myself a learn-it-all.</span>
                </li>
                <li className="flex items-start" style={{ opacity: 1, transform: "none" }}>
                  <span className="mr-4 text-2xl flex-shrink-0">💡</span>
                  <span className="text-justify">I'm all about building reliable, scalable software that makes a difference.</span>
                </li>
                <li className="flex items-start" style={{ opacity: 1, transform: "none" }}>
                  <span className="mr-4 text-2xl flex-shrink-0">🐈</span>
                  <span className="text-justify">I love cars and cats!</span>
                </li>
              </ul>
            </div>
          </BackgroundGradient>
        </div>
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
