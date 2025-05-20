"use client";
import React from "react";
import {
  FaHouse,
  FaUser,
  FaLaptopCode,
  FaRegEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaRegFilePdf,
} from "react-icons/fa6";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import MagicButton from "@/components/ui/MagicButton";

export default function About() {
  return (
    <div className="relative items-center justify-center w-full mt-48">
      <div className="relative flex items-center justify-center w-full">
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-black-900 mx-auto">
          <p className="text-lg md:text-4xl font-bold text-black mb-6 dark:text-neutral-200 text-center">
            About Me
          </p>
          <div className="w-full" style={{ opacity: 1, transform: "none" }}>
            <ul
              className="mt-4 text-secondary text-[17px] max-w-3xl space-y-6 list-none"
              style={{ opacity: 1, transform: "none" }}
            >
              <li
                className="flex items-start"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="mr-4 text-2xl flex-shrink-0">👨‍💻</span>
                <span className="text-justify text-white">
                  Currently pursuing my Master of Science in Computer Science
                  degree from Texas A&M and keen on building impactful software
                  and innovative solutions.
                </span>
              </li>
              <li
                className="flex items-start"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="mr-4 text-2xl flex-shrink-0">💡</span>
                <span className="text-justify text-white">
                  I have a deep curiosity for how things work, always eager to
                  explore, learn, and build better solutions.
                </span>
              </li>
              <li
                className="flex items-start"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="mr-4 text-2xl flex-shrink-0">🛠</span>
                <span className="text-justify text-white">
                  From full-stack development to distributed solutions, I've led
                  projects that streamline operations and deliver real impact.
                </span>
              </li>
              <li
                className="flex items-start"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="mr-4 text-2xl flex-shrink-0">🖋️</span>
                <span className="text-justify text-white">
                  I may not be a know-it-all but I definitely consider myself a
                  learn-it-all.
                </span>
              </li>
              <li
                className="flex items-start"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="mr-4 text-2xl flex-shrink-0">🐈</span>
                <span className="text-justify text-white">
                  And a fun fact about me - I love cars and cats!
                </span>
              </li>
            </ul>
            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/1wxFKkm2C4UR7U2Y__uSs4tN4QVr_47dQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title="Get my résumé"
                  icon={<FaRegFilePdf />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
