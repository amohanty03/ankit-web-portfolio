"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import MagicButton from "./ui/magic-button";
import {
  FaArrowRight,
  FaAnglesDown,
  FaCamera,
  FaRegFilePdf,
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa6";
import { getMailtoHref } from "@/lib/email";
import { Terminal } from "./ui/terminal";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative flex w-full min-h-screen items-start pt-8 sm:items-center sm:pt-0">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          duration: 0.45,
          ease: "easeOut",
        }}
        className="relative flex w-full flex-col items-center justify-start gap-6 px-2 sm:px-4  md:px-6 lg:px-8"
      >
        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-4xl flex-nowrap items-center justify-center gap-2 sm:gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border dark:border-amber-200/30 border-amber-900/30 bg-amber-50/5 px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] dark:text-amber-300 text-amber-900 sm:gap-3 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full dark:bg-amber-300 bg-amber-900 sm:h-2 sm:w-2" />
              College Station, TX
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border dark:border-emerald-300/40 border-emerald-900/40  bg-emerald-50/5 px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] dark:text-emerald-300 text-emerald-900 sm:gap-3 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full dark:bg-emerald-400 bg-emerald-900 sm:h-2 sm:w-2" />
              Open to New Grad Roles
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-0 py-0 sm:px-2">
          <Terminal
            className="max-w-5xl"
            commands={[
              "npx ankit-portfolio@latest whoami",
              "cat interests.txt",
            ]}
            outputs={{
              0: [
                {
                  left: `##########++-------+#############
#######++------------++##########
####+++-----------------+########
###+-------+##++++###+++-++######
###--------+############+++++####
###----+++-+############++++++###
##+----+++++#############+++-++##
###---+++---+++##++++++++++++++##
##+---+++++---+++++-++++++--+++##
###---++-+--+-+##++++-++##+--++##
###+-+++++++++#####++++###++++###
###+++#####################+#####
###+++++####++-++++#######++#####
####++++++++++++++++#######+#####
#####+++++--++++++++++###########
####+-+++++++++++++#+++++++######
#####+-++++++++++++++++++++######
######++-----+++++++++++++#######
#######++----------+++++#########
######+++++--------++++##########
######+++++++++++++++++++########
#######++++++++++++++++++########`,
                  right:
                    "Hello there! Thank you for visiting my portfolio. I'm Ankit Mohanty. I'm a Master's student in Computer Science at Texas A&M University. I have led technical projects that streamline workflows, enhance user experiences, and solve real-world problems whether it is building scalable web platforms or deploying intelligent backend systems. I am currently seeking full-time New Grad Software Engineer opportunities.",
                },
              ],
              1: [
                "✔ Cruising around on my electric scooter and learning the nitty-gritty of scooter maintenance.",
                "✔ Window shopping cars that I can't afford and dreaming about the day I can finally get one.",
                "✔ Looking to adopt a kitty in the near future. Any name suggestions?",
              ],
            }}
            typingSpeed={45}
            delayBetweenCommands={1000}
            initialDelay={0}
          />
        </div>
        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-4 text-white">
            <div className="flex px-2">
              <a
                href="https://www.instagram.com/artsy_maggedon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title="See my photography"
                  icon={<FaCamera className="h-4 w-4" />}
                  position="left"
                  buttonClasses="sm:w-60"
                />
              </a>
            </div>
            <div className="flex px-2">
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                <MagicButton
                  title="Get my résumé"
                  icon={<FaRegFilePdf />}
                  position="left"
                />
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 px-2 text-sm sm:text-base">
              <span className="dark:text-white text-black">
                Connect with me
              </span>
              <FaArrowRight className="h-4 w-4 dark:text-white text-black" />
              <a
                href="https://github.com/amohanty03"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:hover:text-violet-300 hover:text-violet-500 dark:text-white text-black transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohanty-ankit/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:hover:text-blue-300 hover:text-blue-500 dark:text-white text-black transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href={getMailtoHref()}
                className="dark:hover:text-orange-300 hover:text-orange-500 dark:text-white text-black transition-colors"
                aria-label="Email"
              >
                <FaRegEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <motion.div
          aria-hidden="true"
          animate={{
            opacity: isScrolled ? 0 : 1,
            y: isScrolled ? -10 : 0,
            scale: isScrolled ? 0.96 : 1,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="pointer-events-none mt-6 sm:mt-8 md:mt-10 inline-flex flex-col items-center gap-2 dark:text-white text-black"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] sm:text-xs">
            Scroll Down
          </span>
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-9 w-9 items-center justify-center rounded-full"
          >
            <FaAnglesDown className="h-4 w-4" />
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
