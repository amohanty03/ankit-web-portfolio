"use client";

import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";
import { AuroraBackground } from "./ui/AuroraBackground";
import MagicButton from "./ui/MagicButton";
import { FaFileCode, FaRegFileCode, FaLaptopCode } from "react-icons/fa";

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
          className="relative flex flex-col gap-4 items-center justify-center w-full h-full px-4"
        >

          <div
            className="relative rounded-full overflow-hidden border-4 shadow-md border-x-red-700 border-y-orange-600 w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[300px] max-w-[300px] aspect-[305/375] mt-28"
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

          <div className="text-xl sm:text-3xl md:text-6xl font-bold text-white text-center sm:mt-20 md:mt-10 lg:mt-10">
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
                className="wave-emoji w-[20vw] sm:w-[10vw] md:w-[5vw] max-w-[45px] h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1.0 }}
              />
            </div>
          </div>

          <div className="md:text-2xl text-white text-center sm:mt-10 md:mt-5 lg:mt-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.0, duration: 1.0 }}
            >
              Welcome to my portfolio! Here, you can learn more about me and check out what I'm working on :)
            </motion.div>
          </div>

          <a href="#about">
            <MagicButton
              title="See my work"
              icon={<FaRegFileCode />}
              position="right"
            />
          </a>
        </motion.div>
    </div>
  );
};

export default Hero;
