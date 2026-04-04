"use client";
import React, { useMemo } from "react";

export const BoxesCore = ({
  className,
  density = "normal",
  ...rest
}: {
  className?: string;
  density?: "normal" | "compact";
}) => {
  const ROWS = useMemo(
    () => new Array(density === "compact" ? 28 : 150).fill(1),
    [density],
  );
  const COLS = useMemo(
    () => new Array(density === "compact" ? 18 : 100).fill(1),
    [density],
  );

  const boxesStyle = useMemo(
    () => ({
      transform:
        density === "compact"
          ? `translate(-20%,-20%) skewX(-48deg) skewY(14deg) scale(0.38) rotate(0deg) translateZ(0)`
          : `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
    }),
    [density],
  );

  return (
    <div
      style={boxesStyle}
      className={`absolute inset-0 z-0 flex h-full w-full p-4 ${className || ""}`}
      {...rest}
    >
      {ROWS.map((_, i) => (
        <div
          key={`row` + i}
          className="relative h-8 w-16 border-l border-orange-500/40"
        >
          {COLS.map((_, j) => (
            <div
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-red-500/40"
            >
              {j % (density === "compact" ? 5 : 3) === 0 &&
              i % (density === "compact" ? 5 : 3) === 0 ? (
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
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
