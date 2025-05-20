"use client";

import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";
import { AuroraBackground } from "./ui/AuroraBackground";
import MagicButton from "./ui/MagicButton";
import { FaFileCode, FaRegFileCode, FaLaptopCode } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";

const Hero = () => {
  function rotate(deg: number) {
    return {
      transform: `rotate(${deg}deg)`,
    };
  }

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center w-full h-full px-6 sm:px-10 md:px-0 lg:px-0"
      >
        <div className="fixed bottom-0 left-0 bg-black text-white text-xs p-1 z-50">
          <div className="block sm:hidden">Base (&lt;640px)</div>
          <div className="hidden sm:block md:hidden">sm (640px–767px)</div>
          <div className="hidden md:block lg:hidden">md (768px–1023px)</div>
          <div className="hidden lg:block xl:hidden">lg (1024px–1279px)</div>
          <div className="hidden xl:block">xl (1280px+)</div>
        </div>

        <div className="absolute top-0 left-0 w-full flex justify-start">
          <img
            src="logo.jpg"
            alt="AM Logo"
            className="ml-4 mt-4 w-12 sm:w-16 md:w-20 lg:w-24 max-w-[75px] h-auto"
            style={{ mixBlendMode: "difference" }}
          />
        </div>

        <div
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
        </div>

        <div className="text-xl sm:text-3xl md:text-6xl font-bold text-white text-center sm:mt-10 md:mt-5 lg:mt-5 sm:px-10 md:px-3 lg:px-0">
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
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <Typewriter
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
            />
            {/* <motion.img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                alt="Waving Hand"
                className="wave-emoji w-6 sm:w-6 md:w-8 lg:w-10 xl:w-12 h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.15, duration: 1.0 }}
              /> */}
          </div>
        </div>

        <div className="sm:text-xs md:text-lg lg:text-xl text-white text-justify sm:mt-10 md:mt-5 lg:mt-5 sm:px-10 md:px-10 lg:px-28">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.75, duration: 1.0 }}
          >
            As a Master’s student in Computer Science at Texas A&M, I bring a
            strong foundation in software engineering and a track record of
            delivering impactful solutions across full-stack development,
            distributed systems, and AI-driven applications. I’ve led technical
            projects that streamline workflows, enhance user experiences, and
            solve real-world problems whether it’s building scalable web
            platforms or deploying intelligent backend systems. What sets me
            apart is a learn-it-all mindset: I thrive in collaborative,
            team-oriented environments, adapt quickly to new technologies, and
            approach every challenge with curiosity, ownership, and a drive to
            build better.
          </motion.div>
        </div>
        <div className="flex justify-center">
          <div className="flex px-2">
            <a href="#about">
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
      </motion.div>
    </div>
  );
};

export default Hero;
