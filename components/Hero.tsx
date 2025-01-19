"use client";

import { motion } from "framer-motion";
import React from 'react'
import Typewriter from "typewriter-effect";
import { AuroraBackground } from "../components/ui/aurora-background";

const Hero = () => {
    function rotate(deg: number) {
        return {
            transform: `rotate(${deg}deg)`
        };
    }

  return (
    <div className=''>
        <AuroraBackground className="w-screen">
            <div className="absolute top-0 left-0 w-full flex justify-start">
                <img src="logo.jpg" alt="AM Logo" className="ml-4 mt-4" style={{ mixBlendMode: 'difference', width: '82px', height: '66px' }} />
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
            <div className="absolute top-0 mt-20 rounded-full overflow-hidden border-4 shadow-md border-black" style={{ width: 'calc(305px)', height: 'calc(375px)' }}>
                <div className="absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%' }}>
                    <img alt="Ankit Mohanty" loading="lazy" decoding="async" data-nimg="fill" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover', color: 'transparent' }} src="profile.jpg" />
                </div>
            </div>
            <div className="text-3xl md:text-6xl font-bold text-white text-center mt-44">
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
            `}
            </style>
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <Typewriter
                    onInit={(typewriter) => {
                        const cursor = document.querySelector('.Typewriter__cursor') as HTMLElement;
                        if (cursor) {
                            cursor.style.visibility = "visible";
                        }

                        typewriter.typeString("Howdy, I'm <span style='background: linear-gradient(90deg, orange, red); -webkit-background-clip: text; color: transparent;'>Ankit Mohanty</span>")
                            .pauseFor(1000)
                            .callFunction(() => {
                                const cursor = document.querySelector('.Typewriter__cursor') as HTMLElement;
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
                    className="wave-emoji"
                    style={{ display: 'inline-block', width: '50px', height: '50px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0, duration: 1.0 }}
                />
            </div>
            </div>
            <div className="md:text-xl text-white text-center mt-2">
            <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.0, duration: 1.0 }}
                >
                    Master’s student at Texas A&M pursuing Computer Science keen on building impactful software and innovative solutions :)
            </motion.div>
            </div>
            </motion.div>
        </AuroraBackground>
    </div>
  )
}

export default Hero