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
    <div className="relative h-screen">
      {/* <AuroraBackground className="w-screen h-screen"> */}
        {/* Logo */}
        <div className="absolute top-0 left-0 w-full flex justify-start">
          <img
            src="logo.jpg"
            alt="AM Logo"
            className="ml-4 mt-4 w-[30vw] sm:w-[20vw] md:w-[10vw] max-w-[75px] h-auto"
            style={{ mixBlendMode: "difference" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center w-full h-full"
        >

          <div
            className="relative rounded-full overflow-hidden border-4 shadow-md border-x-red-700 border-y-orange-600 w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[300px] max-w-[300px] aspect-[305/375]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                alt="Ankit Mohanty"
                loading="lazy"
                decoding="async"
                className="absolute w-full h-full object-cover"
                src="profile.jpg"
              />
            </div>
          </div>

          <div className="text-xl sm:text-3xl md:text-6xl font-bold text-white text-center sm:mt-10 md:mt-5 lg:mt-5 sm:px-10 md:px-40 lg:px-40">
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
                    ".Typewriter__cursor"
                  ) as HTMLElement;
                  if (cursor) {
                    cursor.style.visibility = "visible";
                  }

                  typewriter
                    .typeString(
                      "Howdy, I'm <span style='background: linear-gradient(90deg, orange, red); -webkit-background-clip: text; color: transparent;'>Ankit Mohanty</span>"
                    )
                    .pauseFor(900)
                    .callFunction(() => {
                      const cursor = document.querySelector(
                        ".Typewriter__cursor"
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
              <motion.img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                alt="Waving Hand"
                className="wave-emoji w-6 sm:w-6 md:w-8 lg:w-10 xl:w-12 h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.15, duration: 1.0 }}
              />
            </div>
          </div>

          <div className="sm:text-xs md:text-lg lg:text-xl text-white text-justify sm:mt-10 md:mt-5 lg:mt-5 sm:px-10 md:px-40 lg:px-40">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.75, duration: 1.0 }}
            >
              As a Master’s student in Computer Science at Texas A&M, I bring a strong foundation in software engineering and a track record of delivering impactful solutions across full-stack development, distributed systems, and AI-driven applications. I’ve led technical projects that streamline workflows, enhance user experiences, and solve real-world problems whether it’s building scalable web platforms or deploying intelligent backend systems. What sets me apart is a learn-it-all mindset: I thrive in collaborative, team-oriented environments, adapt quickly to new technologies, and approach every challenge with curiosity, ownership, and a drive to build better.
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
              <a href="https://drive.google.com/file/d/1wxFKkm2C4UR7U2Y__uSs4tN4QVr_47dQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
