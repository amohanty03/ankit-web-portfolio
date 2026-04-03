"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import MagicButton from "./ui/magic-button";
import { FaRegFileCode } from "react-icons/fa";
import {
  FaArrowRight,
  FaAnglesDown,
  FaRegFilePdf,
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa6";
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
    <div className="relative flex w-full min-h-[calc(100vh-5rem)] items-center">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex w-full min-h-[calc(100vh-5rem)] flex-col items-center justify-start gap-6 px-2 pt-2 sm:px-4 sm:pt-4 md:px-6 md:pt-6 lg:px-8"
      >
        <div className="fixed bottom-0 left-0 bg-black text-white text-xs p-1 z-50">
          <div className="block sm:hidden">Base (&lt;640px)</div>
          <div className="hidden sm:block md:hidden">sm (640px–767px)</div>
          <div className="hidden md:block lg:hidden">md (768px–1023px)</div>
          <div className="hidden lg:block xl:hidden">lg (1024px–1279px)</div>
          <div className="hidden xl:block">xl (1280px+)</div>
        </div>
        {/* <div
          className="relative rounded-full overflow-hidden border-4 shadow-md border-x-red-700 border-y-orange-600 
               w-48 sm:w-64 md:w-72 lg:w-[250px] aspect-[4/5] max-w-[300px] mt-20 sm:mt-10 md:mt-20 lg:mt-20"
        >
          <div className="absolute inset-0 flex">
            <img
              alt="Ankit Mohanty"
              loading="lazy"
              decoding="async"
              className="absolute w-full h-full object-cover"
              src="profile.jpg"
            />
          </div>
        </div> */}

        {/* <div className="text-xl sm:text-3xl md:text-6xl font-bold text-white text-center sm:mt-10 md:mt-5 lg:mt-5 sm:px-10 md:px-3 lg:px-0">
          <style>{`
              @keyframes wave {
                0% { transform: rotate(0deg); }
                10% { transform: rotate(-10deg); }
                20% { transform: rotate(12deg); }
                30% { transform: rotate(-10deg); }
                40% { transform: rotate(9deg); }
                50% { transform: rotate(0deg); }
                100% { transform: rotate(0deg); }
              }
              .wave-emoji {
                animation-name: wave;
                animation-duration: 1.8s;
                animation-iteration-count: infinite;
                transform-origin: 70% 70%;
                display: inline-block;
              }
            `}</style>
          <div style={{ display: "inline-flex", alignItems: "center" }}> */}
        {/* <Typewriter
              onInit={(typewriter) => {
                const cursor = document.querySelector(
                  ".Typewriter__cursor",
                ) as HTMLElement;
                if (cursor) {
                  cursor.style.visibility = "visible";
                }

                typewriter
                  .typeString(
                    "Howdy, I'm <span style='background: linear-gradient(90deg, orange, red); -webkit-background-clip: text; color: transparent;'>Ankit Mohanty!</span>",
                  )
                  .pauseFor(900)
                  .callFunction(() => {
                    const cursor = document.querySelector(
                      ".Typewriter__cursor",
                    ) as HTMLElement;
                    if (cursor) {
                      cursor.style.visibility = "hidden";
                    }
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 60,
              }}
            /> */}
        {/* <motion.img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                alt="Waving Hand"
                className="wave-emoji w-6 sm:w-6 md:w-8 lg:w-10 xl:w-12 h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.15, duration: 1.0 }}
              /> */}
        {/* </div> */}
        {/* </div> */}

        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-3 rounded-full border dark:border-amber-200/30 border-amber-900/30 bg-amber-50/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] dark:text-amber-300 text-amber-900 sm:text-xs">
              <span className="h-2 w-2 rounded-full dark:bg-amber-300 bg-amber-900" />
              College Station, TX
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border dark:border-emerald-300/40 border-emerald-900/40  bg-emerald-50/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] dark:text-emerald-300 text-emerald-900 sm:text-xs">
              <span className="h-2 w-2 rounded-full dark:bg-emerald-400 bg-emerald-900" />
              Open to New Grad Roles
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 flex w-full max-w-5xl flex-col items-center justify-center px-0 py-0 sm:px-2">
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
          />
        </div>
        <div className="mt-5 flex w-full justify-center">
          <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-4 text-white">
            <div className="flex px-2">
              <a href="#projects">
                <MagicButton
                  title="See my work"
                  icon={<FaRegFileCode />}
                  position="right"
                />
              </a>
            </div>
            <div className="flex px-2">
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
                href="mailto:"
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
          className="mt-auto mb-4 inline-flex flex-col items-center gap-2 dark:text-white text-black pointer-events-none"
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
