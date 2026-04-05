"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/lib/utils";
import { JSX } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Section } from "lucide-react";
import SectionTitle from "./ui/section-title";

export function Experience() {
  const timelineData = [
    {
      title: "June 2025 - Present",
      content: (
        <div className="w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-auto sm:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4",
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
                <p className="relative z-10 text-sm text-gray-50 sm:text-base md:text-base">
                  Student Developer
                </p>
                <p className="text-xs text-gray-50 sm:text-sm">
                  Texas A&M University - Texas Engineering and Experiment
                  Station | College Station, Texas
                </p>
              </div>
            </div>
            <div className="text content z-10">
              <h1 className="text-xs font-bold pt-4 text-gray-50 sm:text-sm md:text-sm lg:text-base">
                Responsibilities:
              </h1>
              <ul className="text-xs leading-5 text-gray-50 text-justify sm:text-sm">
                <li>
                  Shipped the end-to-end registration and judging platform for
                  an annual engineering competition serving 2,000+ students and
                  200+ industry partners, built on an OpenWater-hosted platform
                  owning the full design-to-deployment cycle.
                </li>
                <li>
                  Engineered a Python-based ETL pipeline to streamline project
                  data distribution and automate winner award calculations
                  serving 2,000+ students, replacing manual spreadsheet
                  tabulation that reduced the award announcement cycle by 90%
                  while ensuring 100% data integrity.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2025 - Present",
      content: (
        <div className="w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-auto sm:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4",
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
                <p className="relative z-10 text-sm text-gray-50 sm:text-base md:text-base">
                  Graduate Research Assistant
                </p>
                <p className="text-xs text-gray-50 sm:text-sm">
                  Texas A&M University - The Bush School of Government and
                  Public Service | College Station, Texas
                </p>
              </div>
            </div>
            <div className="text content z-10">
              <h1 className="text-xs font-bold pt-4 text-gray-50 sm:text-sm md:text-sm lg:text-base">
                Responsibilities:
              </h1>
              <ul className="text-xs leading-5 text-gray-50 text-justify sm:text-sm">
                <li>
                  Engineered a predictive analysis pipeline in Python to model
                  longitudinal mental health trends, automating feature
                  extraction from clinical datasets to identify high-risk
                  behavioral patterns for 23 subjects under Dr. So-Min Cheong.
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
              "cursor-pointer overflow-hidden relative card h-auto sm:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4",
              "bg-[url('/uwmad.jpg')] bg-cover bg-center",
            )}
          >
            <div className="absolute inset-0 bg-black/50 transition duration-300 group-hover/card:bg-black/70" />
            <div className="flex items-center space-x-4 z-10">
              <Image
                height={100}
                width={100}
                alt="UW-Madison"
                src="/cdis.png"
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col">
                <p className="text-sm text-gray-50 sm:text-base md:text-base">
                  Undergraduate Research Assistant
                </p>
                <p className="text-xs text-gray-50 sm:text-sm">
                  University of Wisconsin - Madison | Madison, Wisconsin
                </p>
              </div>
            </div>
            <div className="text content z-10">
              <h1 className="text-xs font-bold pt-4 text-gray-50 sm:text-sm md:text-sm lg:text-base">
                Responsibilities:
              </h1>
              <ul className="text-xs leading-5 text-gray-50 text-justify sm:text-sm">
                <li>
                  Leveraged OpenAI's API to develop a database of Li-ion cathode
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
                <p className="relative z-10 text-sm text-gray-50 sm:text-base md:text-base">
                  Software Engineer Intern
                </p>
                <p className="text-xs text-gray-50 sm:text-sm">
                  DRS Daylight Solutions | Madison, WI
                </p>
              </div>
            </div>
            <div className="text content z-10">
              <h1 className="text-xs font-bold pt-4 text-gray-50 sm:text-sm md:text-sm lg:text-base">
                Responsibilities:
              </h1>
              <ul className="text-xs leading-5 text-gray-50 text-justify sm:text-sm">
                <li>
                  Cut laser test engineer wait times by 3× by profiling and
                  restructuring slow SQL Server queries, added indexing
                  strategies and rewrote N+1 patterns that had gone unnoticed
                  for years.
                </li>
                <li>
                  Automated a manual laser classification pipeline using C#
                  .NET, recovering 16% of engineering time previously lost to
                  repetitive data handling.
                </li>
                <li>
                  Replaced a manual AS9100 compliance process with automated
                  Power BI dashboards, improving manufacturing defect detection
                  by 30% and eliminating audit prep overhead.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <SectionTitle title="My Experience" />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4 px-6 sm:px-10 md:px-0 lg:px-0"
      >
        <div className="w-full">
          <Timeline data={timelineData} />
        </div>
      </motion.div>
    </div>
  );
}
