import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export function Projects() {
  return (
    <section id="projects" className="relative mt-12 md:mt-14 lg:mt-20">
      <SectionTitle title="My Projects" />
      <div className="mx-auto w-full max-w-5xl px-6 pt-5 sm:px-10 md:px-0 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + index * 0.08,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_14px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-black/30 dark:shadow-[0_18px_60px_rgba(0,0,0,0.18)]",
                item.className,
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-70 dark:opacity-100",
                  item.accent,
                )}
              />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {item.links.map((link) => (
                      <a
                        key={`${item.title}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.title} ${link.label}`}
                        className={cn(
                          "group/link text-neutral-500 transition-colors duration-200 dark:text-neutral-300",
                          link.icon === faYoutube
                            ? "hover:text-red-600"
                            : link.icon === faBook
                              ? "hover:text-yellow-500"
                              : link.icon === faArrowUpRightFromSquare
                                ? "hover:text-emerald-500"
                                : "",
                        )}
                      >
                        <FontAwesomeIcon
                          icon={link.icon}
                          className={cn(
                            "text-lg transition-all duration-200 group-hover/link:scale-110 group-hover/link:text-purple-500",
                            link.icon === faYoutube
                              ? "group-hover/link:text-red-600"
                              : link.icon === faBook
                                ? "group-hover/link:text-yellow-500"
                                : link.icon === faArrowUpRightFromSquare
                                  ? "group-hover/link:text-emerald-500"
                                  : "",
                          )}
                        />
                      </a>
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
                  {item.description}
                </p>

                {item.picture ? (
                  <img
                    src={item.picture}
                    alt={`${item.title} preview`}
                    className={cn(
                      "mt-4 w-full rounded-xl border border-black/10 object-contain dark:border-white/10",
                      item.pictureClassName,
                    )}
                  />
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={`${item.title}-${technology}`}
                      className="inline-flex items-center rounded-full border border-black/10 bg-white/75 px-3 py-1.5 text-xs font-medium text-neutral-800 transition-colors duration-200 hover:border-black/20 hover:bg-white/95 dark:border-white/10 dark:bg-black/25 dark:text-neutral-200 dark:hover:border-white/20 dark:hover:bg-black/35"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type ProjectLink = {
  label: string;
  icon: IconDefinition;
  url: string;
};

type ProjectItem = {
  title: string;
  description: string;
  technologies: string[];
  accent: string;
  className?: string;
  links: ProjectLink[];
  picture?: string;
  pictureClassName?: string;
};

const items: ProjectItem[] = [
  {
    title: "TailorED",
    description:
      "AI learning platform that converts academic documents into interactive quizzes with local LLM inference",
    technologies: [
      "React",
      "TypeScript",
      "Flask",
      "SQLAlchemy",
      "Docker",
      "Ollama",
    ],
    accent: "from-red-500/20 via-orange-500/10 to-transparent",
    className: "md:col-span-2 xl:col-span-2",
    links: [
      {
        label: "GitHub",
        icon: faGithub,
        url: "https://github.com/amohanty03/TailorED",
      },
    ],
    picture: "",
    pictureClassName: "",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website inspired by terminal CLI",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
    className: "md:col-span-1 xl:col-span-1",
    links: [
      {
        label: "GitHub",
        icon: faGithub,
        url: "https://github.com/amohanty03/ankit-web-portfolio",
      },
    ],
    picture: "",
    pictureClassName: "",
  },
  {
    title: "Railway Geometry Track Estimation",
    description:
      "End-to-end CV pipeline fusing YOLOv8n and U-Net + ResNet50 with homography rectification",
    technologies: ["Python", "Roboflow", "OpenCV"],
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    className: "md:col-span-2 xl:col-span-2",
    links: [
      {
        label: "GitHub",
        icon: faGithub,
        url: "https://github.com/amohanty03/yolo_railway",
      },
      {
        label: "Paper",
        icon: faBook,
        url: "https://drive.google.com/file/d/1Ktx5yNOha3SYTDov23OIq-E3thCu7uN3/view?usp=sharing",
      },
    ],
    picture: "tgiv_solution.png",
    pictureClassName: "object-contain h-48",
  },
  {
    title: "UW Course Guide",
    description:
      "Firebase backed Android app integrating course reviews, scheduling, and campus navigation for 8,000+ UW-Madison classes",
    technologies: ["Android Studio", "Firebase", "Java", "Google Maps API"],
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    className: "md:col-span-1 xl:col-span-1",
    links: [
      {
        label: "GitHub",
        icon: faGithub,
        url: "https://github.com/amohanty03/UW-Course-Guide",
      },
      {
        label: "Demo",
        icon: faYoutube,
        url: "https://youtu.be/YZ2q4l2m-EM?si=4OMsZFgu1ao8AQaT",
      },
    ],
    picture: "",
    pictureClassName: "",
  },
  {
    title: "KANM RJ Scheduler",
    description: "Heroku hosted app that automates KANM radio jockey lineups",
    technologies: ["Ruby on Rails", "PostgreSQL", "Heroku"],
    accent: "from-rose-500/20 via-orange-500/10 to-transparent",
    className: "md:col-span-1 xl:col-span-1",
    links: [
      {
        label: "GitHub",
        icon: faGithub,
        url: "https://github.com/amohanty03/KANM-Show-Scheduling",
      },
      {
        label: "Demo",
        icon: faYoutube,
        url: "https://youtu.be/-1RBrWpdwfs?si=1WtPgnoGyQyM1rez",
      },
    ],
    picture: "KANMLogo.webp",
    pictureClassName: "object-contain",
  },
  {
    title: "Tiny Social Network Service",
    description:
      "Distributed social platform in C++ using gRPC and RabbitMQ with master-replica consistency, real-time cross-node propagation, and fault-tolerant operations.",
    technologies: ["C++", "gRPC", "Protobuf", "RabbitMQ"],
    accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
    className: "md:col-span-1 xl:col-span-1",
    links: [
      {
        label: "GitHub",
        icon: faGithub,
        url: "https://github.com/amohanty03/Social-Networking-Service",
      },
    ],
    picture: "",
    pictureClassName: "",
  },
  {
    title: "Airline Database Management System",
    description:
      "Airline database system with optimized indexing and normalization for high-concurrency flight and booking data",
    technologies: ["Python", "Streamlit", "PostgreSQL", "Neon"],
    accent: "from-indigo-500/20 via-cyan-500/10 to-transparent",
    className: "md:col-span-1 xl:col-span-1",
    links: [
      {
        label: "GitHub",
        icon: faGithub,
        url: "https://github.com/amohanty03/Airline-Management-Database",
      },
      {
        label: "Demo",
        icon: faArrowUpRightFromSquare,
        url: "https://amohanty03-airline-management-database-app-a7kp6r.streamlit.app/",
      },
    ],
    picture: "",
    pictureClassName: "",
  },
];
