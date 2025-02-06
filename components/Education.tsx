"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { cn } from "@/lib/utils";

export function Education() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div className="w-full group/card">
            <div
                className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url('/tamu.jpg')] bg-cover bg-center"
                )}
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                    height="100"
                    width="100"
                    alt="TAMU"
                    src="/tamulogo.png"
                    className="h-10 w-10 rounded-full border-2 object-cover"
                />
                <div className="flex flex-col">
                    <p className="font-normal text-base text-gray-50 relative z-10">
                    Texas A&M University
                    </p>
                    <p className="text-sm text-gray-400">College Station, Texas | GPA: 4.0/4.0</p>
                </div>
                </div>
                <div className="text content">
                <h1 className="font-bold text-lg md:text-sm text-gray-50 relative z-10">
                    Master of Science in Computer Science
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 text-justify">
                    Courses Taken: Software Engineering, Digital Forensics Engineering, Distributed Processing Systems, Algorithms, Computer Vision, Network Security
                </p>
                </div>
            </div>
            </div>
      ),
    },
    {
      title: "2020 - 2024",
      content: (
        <div className="w-full group/card">
            <div
                className={cn(
                "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url('/uwmad.jpg')] bg-cover bg-center"
                )}
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60 bg-black bg-opacity-50"></div>
                <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                    height="100"
                    width="100"
                    alt="TAMU"
                    src="/cdis.png"
                    className="h-10 w-10 rounded-full border-2 object-cover"
                />
                <div className="flex flex-col">
                    <p className="font-normal text-base text-gray-50 relative z-10">
                    University of Wisconsin - Madison
                    </p>
                    <p className="text-sm text-gray-400">Madison, WI | GPA: 3.77/4.0</p>
                </div>
                </div>
                <div className="text content">
                <h1 className="font-bold text-lg md:text-sm text-gray-50 relative z-10">
                    Bachelor of Science in Computer Science
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 text-justify">
                    Courses Taken: Data Structures and Algorithms, Machine Organization, Discrete Mathematics, Operating Systems, Database Management Systems, Computer Graphics, Mobile Systems, Artificial Intelligence, Big Data Systems
                </p>
                </div>
            </div>
            </div>
      ),
    }];
  return (
    <div className="w-full mt-48">
      <Timeline data={data} />
    </div>
  );
}
