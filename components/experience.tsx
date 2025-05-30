"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/experience-timeline";
import { cn } from "@/lib/utils";
import { JSX } from "react/jsx-runtime";
import { motion } from "framer-motion";

export function Experience() {
  const timelineData = [
    {
      title: "May 2025 - Present",
      content: (
        <div className="w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4",
              "bg-[url('/tamu.jpg')] bg-cover bg-center",
            )}
          >
            <div className="absolute inset-0 bg-black/60 transition duration-300 group-hover/card:bg-black/80" />
            <div className="flex items-center space-x-4 z-10">
              <Image
                height={100}
                width={100}
                alt="TAMU"
                src="/tamulogo.png"
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col">
                <p className="text-base text-gray-50 relative z-10">
                  Graduate Research Assistant
                </p>
                <p className="text-sm text-gray-50">
                  Texas A&M University - The Bush School of Government and
                  Public Service | College Station, Texas
                </p>
              </div>
            </div>
            <div className="text content z-10">
              <h1 className="font-bold text-sm md:text-sm lg:text-md text-gray-50">
                Responsibilities:
              </h1>
              <ul className="text-sm text-gray-50 text-justify">
                <li>
                  Analyzed weekly PHQ-9 and PCL-5 depression scores from a
                  longitudinal study using Python and scikit-learn under Dr.
                  So-Min Cheong.
                </li>
                <li>
                  Generated participant-level imputed datasets using MICE
                  (Multiple Imputation by Chained Equations), visualized trends
                  over time, and ensured methodological alignment with
                  peer-reviewed standards.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2024 - May 2024",
      content: (
        <div className="w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4",
              "bg-[url('/uwmad.jpg')] bg-cover bg-center",
            )}
          >
            <div className="absolute inset-0 bg-black/50 transition duration-300 group-hover/card:bg-black/70" />
            <div className="flex items-center space-x-4 z-10">
              <Image
                height={100}
                width={100}
                alt="UW–Madison"
                src="/cdis.png"
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col">
                <p className="text-base text-gray-50">
                  Undergraduate Research Assistant
                </p>
                <p className="text-sm text-gray-50">
                  University of Wisconsin – Madison | Madison, Wisconsin
                </p>
              </div>
            </div>
            <div className="text content z-10">
              <h1 className="font-bold text-sm md:text-sm lg:text-md text-gray-50">
                Responsibilities:
              </h1>
              <ul className="text-sm text-gray-50 text-justify">
                <li>
                  Leveraged OpenAI’s API to develop a database of Li-ion cathode
                  battery voltages across 100+ materials, comparing results
                  against leading databases to enhance data reliability under
                  Dr. Benjamin Afflerbach.
                </li>
                <li>
                  Improved data accuracy by integrating ChemDataExtractor NLP
                  Toolkit and optimized dataset quality by 30% using Python
                  scripts for advanced filtering and preprocessing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "June 2023 - August 2023",
      content: (
        <div className="w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-auto sm:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4",
              "bg-[url('/Daylight-Solutions-Logo.jpg')] bg-cover bg-center",
            )}
          >
            <div className="absolute inset-0 bg-black/60 transition duration-300 group-hover/card:bg-black/80" />
            <div className="flex items-center space-x-4 z-10">
              <Image
                height={100}
                width={100}
                alt="DRS Daylight Solutions"
                src="/drs.jpeg"
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col">
                <p className="text-base text-gray-50 relative z-10">
                  Software Engineer Intern
                </p>
                <p className="text-sm text-gray-50">
                  DRS Daylight Solutions | Madison, WI
                </p>
              </div>
            </div>
            <div className="text content z-10">
              <h1 className="font-bold text-sm md:text-sm lg:text-md text-gray-50">
                Responsibilities:
              </h1>
              <ul className="text-sm text-gray-50 text-justify">
                <li>
                  Enhanced application performance by optimizing SQL Server
                  queries and implementing indexing strategies, leading to a
                  200% improvement in responsiveness for laser test engineers.
                </li>
                <li>
                  Streamlined data generation processes by integrating C# .NET
                  applications, resulting in a 16% increase in operational
                  efficiency for laser classification tasks.
                </li>
                <li>
                  Automated Power BI reporting for AS9100 compliance, improved
                  manufacturing failure detection by 30%.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full mt-12 md:mt-14 lg:mt-20">
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
        <Timeline data={timelineData} />
      </motion.div>
    </div>
  );
}
