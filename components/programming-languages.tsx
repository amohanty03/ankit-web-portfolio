// ProgrammingIconsRibbon.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import * as Icons from "@/components/programming-icons";
import { JSX } from "react/jsx-runtime";

interface ProgrammingIconsRibbonProps {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  slowOnHover?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const ProgrammingIconsRibbon = ({
  direction = "left",
  speed = "fast",
  slowOnHover = true,
  className,
  children,
}: ProgrammingIconsRibbonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      // Duplicate icons for infinite scroll
      const items = Array.from(scrollerRef.current.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current?.appendChild(clone);
      });

      // Set direction
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );

      // Set speed
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden",
        slowOnHover && "hover:[animation-play-state:paused]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-8 py-4 w-max",
          start && "animate-scroll",
        )}
      >
        {children}
      </ul>
    </div>
  );
};

const ProgrammingIconsRibbonStack = (): JSX.Element => {
  const iconProps = {
    height: 80,
    width: 80,
  };
  const wideIconProps = {
    height: iconProps.height,
    width: iconProps.width * 2,
  };

  return (
    <section id="languages-tools">
      <div className="py-5 mt-12 md:mt-14 lg:mt-20">
        <h2 className="relative text-lg md:text-4xl text-black mix-blend-normal dark:text-white max-w-4xl text-center mx-auto font-bold">
          Languages & Tools
        </h2>
        <div className="mt-4">
          <ProgrammingIconsRibbon direction="left" speed="normal">
            <Icons.Java {...iconProps} />
            <Icons.Python {...iconProps} />
            <Icons.CLang {...iconProps} />
            <Icons.CPlusPlus {...iconProps} />
            <Icons.CSharp {...iconProps} />
            <Icons.JavaScript {...iconProps} />
            <Icons.TypeScript {...iconProps} />
            <Icons.SQL {...iconProps} />
            <Icons.HTML5 {...iconProps} />
            <Icons.CSS3 {...iconProps} />
            <Icons.Ruby {...iconProps} />
          </ProgrammingIconsRibbon>
          <ProgrammingIconsRibbon direction="right" speed="slow">
            <Icons.React {...iconProps} />
            <Icons.NodeJS {...iconProps} />
            <Icons.NextJS {...wideIconProps} />
            <Icons.Tailwind {...iconProps} />
            <Icons.Bootstrap {...iconProps} />
            <Icons.PyTorch {...wideIconProps} />
            <Icons.Pandas {...iconProps} />
            <Icons.NumPy {...wideIconProps} />
            <Icons.Firebase {...iconProps} />
            <Icons.Rails {...iconProps} />
            <Icons.Junit {...iconProps} />
          </ProgrammingIconsRibbon>
          <ProgrammingIconsRibbon direction="left" speed="normal">
            <Icons.SQLite {...iconProps} />
            <Icons.MySQL {...iconProps} />
            <Icons.GoogleCloud {...iconProps} />
            <Icons.Linux {...iconProps} />
            <Icons.Docker {...iconProps} />
            <Icons.Git {...iconProps} />
            <Icons.GitHub {...iconProps} />
            <Icons.Bash {...iconProps} />
            <Icons.Spark {...iconProps} />
            <Icons.AndroidStudio {...iconProps} />
            <Icons.VS {...iconProps} />
            <Icons.VScode {...iconProps} />
            <Icons.SSMS {...iconProps} />
            <Icons.Figma {...iconProps} />
          </ProgrammingIconsRibbon>
        </div>
      </div>
    </section>
  );
};

export default ProgrammingIconsRibbonStack;
