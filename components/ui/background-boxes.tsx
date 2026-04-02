"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";

const DARK_COLORS = [
  "#fca5a5",
  "#f87171",
  "#ef4444",
  "#dc2626",
  "#fb923c",
  "#f97316",
  "#ea580c",
  "#fdba74",
  "#fed7aa",
];

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const ROWS = useMemo(() => new Array(150).fill(1), []);
  const COLS = useMemo(() => new Array(100).fill(1), []);

  const getRandomColor = () => {
    return DARK_COLORS[Math.floor(Math.random() * DARK_COLORS.length)];
  };

  const boxesStyle = useMemo(
    () => ({
      transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
    }),
    [],
  );

  return (
    <div
      style={boxesStyle}
      className={`absolute inset-0 z-0 flex h-full w-full p-4 ${className || ""}`}
      {...rest}
    >
      {ROWS.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-8 w-16 border-l border-orange-500/40"
        >
          {COLS.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-red-500/40"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-orange-400/50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
