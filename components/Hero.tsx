"use client";

import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";
import MagicButton from "./ui/magic-button";
import { FaFileCode, FaRegFileCode, FaLaptopCode } from "react-icons/fa";
import {
  FaRegFilePdf,
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa6";
import { Terminal } from "./ui/terminal";

const Hero = () => {
  function rotate(deg: number) {
    return {
      transform: `rotate(${deg}deg)`,
    };
  }

  return (
    <div className="relative w-full min-h-[calc(100vh-5rem)] flex items-center">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center w-full min-h-[calc(100vh-5rem)] px-6 sm:px-10 md:px-0 lg:px-0"
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

        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[600px] px-4 py-6">
          <Terminal
            commands={[
              "npx ankit-portfolio@latest whoami",
              "whoami",
              "cat experience.txt",
              "npx shadcn@latest add button card",
              "Term Deez Nuts",
            ]}
            outputs={{
              0: [
                `##########++-------+#############
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
              ],
              1: [
                "Hello there! I'm Ankit Mohanty. I'm a Master's student in Computer Science at Texas A&M University. I’ve led technical projects that streamline workflows, enhance user experiences, and solve real-world problems whether it’s building scalable web platforms or deploying intelligent backend systems. I am currently seeking full-time New Grad Software Engineer opportunities.",
              ],
              2: [
                "Student Developer @ Texas A&M Engineering Experiment Station | June 2025 - Present",
                "Graduate Research Assistant @ Texas A&M University | May 2025 - August 2025",
                "Software Engineer Intern @ DRS Daylight Solutions | May 2023 - August 2023",
              ],
              3: ["✔ Done. Installed button, card."],
            }}
            typingSpeed={45}
            delayBetweenCommands={1000}
          />
        </div>
        <div className="mt-4 w-full flex flex-col items-center">
          <div className="w-full flex justify-center items-center">
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
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 px-10 text-white">
            <a
              href="https://github.com/amohanty03"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohanty-ankit/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href="mailto:"
              className="hover:text-orange-300 transition-colors"
              aria-label="Email"
            >
              <FaRegEnvelope className="h-5 w-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
