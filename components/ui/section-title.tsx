"use client";

import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SectionTitleProps {
  title: string;
  className?: ClassValue;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        scaleX: 1,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    } else {
      controls.start({
        scaleX: 0,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className={cn(
        "text-center overflow-hidden w-full mx-auto max-w-7xl px-6 sm:px-10 md:px-0 lg:px-0",
        className,
      )}
    >
      {/* Title with gradient and glow */}
      <motion.h2
        className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl h-14 font-semibold bg-clip-text text-white
        shadow-none outline-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {title}
      </motion.h2>

      <div className="h-2 bg-transparent" />

      {/* Line with gradient, glow, and center expansion effect */}
      <motion.div
        className="h-0.5 bg-[linear-gradient(to_right,transparent,_theme(colors.red.600)_50%,transparent)] shadow-none border-none outline-none origin-center mx-0 my-0"
        initial={{ scaleX: 0 }}
        animate={controls}
        style={{ transformOrigin: "center" }}
      />
      <div className="h-10" />
    </div>
  );
};

export default SectionTitle;
