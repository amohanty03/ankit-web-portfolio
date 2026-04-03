"use client";

import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface SectionTitleProps {
  title: string;
  className?: ClassValue;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const [spawned, setSpawned] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setSpawned(true), 220);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [inView]);

  const command = `render-section --title "${title}"`;

  return (
    <div
      ref={ref}
      className={cn(
        "w-full px-6 text-left sm:px-10 md:px-0 lg:px-0",
        className,
      )}
    >
      <motion.div
        className="mx-auto w-full max-w-5xl"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="font-mono text-xs text-neutral-400 sm:text-sm">
          <span className="text-sky-500">Ankit@Portfolio</span>
          <span className="dark:text-neutral-500 text-black">:~$</span>{" "}
          <span className="dark:text-emerald-600 text-emerald-900">
            {command.split(" ")[0]}
          </span>{" "}
          <span className="dark:text-neutral-500 text-black">
            {command.split(" ")[1]}
          </span>{" "}
          <span className="dark:text-amber-200 text-amber-900">
            &quot;{title}&quot;
          </span>
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            className="ml-1 inline-block h-4 w-2 bg-emerald-400 align-middle"
          />
        </div>

        <motion.h2
          className="mt-3 font-mono text-3xl font-semibold tracking-tight dark:text-white text-black sm:text-4xl md:text-5xl lg:text-5xl"
          initial={{ opacity: 0, y: 8 }}
          animate={spawned ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          {title}
        </motion.h2>

        {/* <motion.div
          className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-red-500/70 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            spawned ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          style={{ transformOrigin: "center" }}
        /> */}
      </motion.div>
    </div>
  );
};

export default SectionTitle;
