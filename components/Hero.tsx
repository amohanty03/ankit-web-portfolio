"use client";

import { motion } from "framer-motion";
import React from "react";
import MagicButton from "./ui/magic-button";
import { FaRegFileCode } from "react-icons/fa";
import {
  FaArrowRight,
  FaRegFilePdf,
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa6";
import { Terminal } from "./ui/terminal";

const Hero = () => {
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
        className="relative flex w-full min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8 px-4 py-8 sm:px-6 md:px-8 lg:px-10"
      >
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

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-0 py-2 sm:px-2">
          <Terminal
            className="max-w-4xl"
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
        <div className="mt-2 flex w-full justify-center">
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
              <span className="text-neutral-300">Connect with me</span>
              <FaArrowRight className="h-4 w-4 text-neutral-400" />
              <a
                href="https://github.com/amohanty03"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-300 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohanty-ankit/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
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
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
