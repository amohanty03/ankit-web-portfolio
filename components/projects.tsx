import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import SectionTitle from "./ui/section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export function Projects() {
  return (
    <div className="relative w-full mt-12 md:mt-14 lg:mt-20">
      <SectionTitle title="My Projects" />
      <BentoGrid className="max-w-4xl mx-4 md:mx-12 xl:mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            icons={item.icons.map((iconObj, idx) => (
              <a
                key={idx}
                href={iconObj.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-colors duration-200 text-neutral-400 hover:text-blue-500",
                  iconObj.url.includes("youtu.be")
                    ? "hover:text-red-600"
                    : iconObj.url.includes("google")
                      ? "hover:text-yellow-500"
                      : "",
                )}
              >
                {iconObj.icon}
              </a>
            ))}
            picture={item.picture}
            pictureClassName={item.pictureClassName}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const items = [
  {
    title: "Railway Geometry Track Estimation",
    description:
      "End-to-end CV pipeline fusing YOLOv8n and U-Net + ResNet50 with homography rectification",
    className: "md:col-span-2 md:row-span-1",
    icons: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        url: "https://github.com/amohanty03/yolo_railway",
      },
      {
        icon: <FontAwesomeIcon icon={faBook} />,
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
    className: "md:col-span-1 md:row-span-2",
    icons: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        url: "https://github.com/amohanty03/UW-Course-Guide",
      },
      {
        icon: <FontAwesomeIcon icon={faYoutube} />,
        url: "https://youtu.be/YZ2q4l2m-EM?si=4OMsZFgu1ao8AQaT",
      },
    ],
    picture: "uwcg.png",
    pictureClassName: "object-contain",
  },
  {
    title: "BadgerChat",
    description: "AI driven real-time webchat platform for UW-Madison students",
    className: "md:col-span-1",
    icons: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        url: "https://github.com/amohanty03/BadgerChat",
      },
    ],
    picture: "badger_chat.png",
    pictureClassName: "object-contain",
  },
  {
    title: "KANM RJ Scheduler",
    description: "Heroku hosted app that automates KANM radio jockey lineups",
    className: "md:col-span-1",
    icons: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        url: "https://github.com/amohanty03/KANM-Show-Scheduling",
      },
      {
        icon: <FontAwesomeIcon icon={faYoutube} />,
        url: "https://youtu.be/-1RBrWpdwfs?si=1WtPgnoGyQyM1rez",
      },
    ],
    picture: "KANMLogo.webp",
    pictureClassName: "object-contain",
  },
];
