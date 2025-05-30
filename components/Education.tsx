"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/education-timeline";
import { cn } from "@/lib/utils";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { JSX } from "react/jsx-runtime";
import { motion } from "framer-motion";

export function Education() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeUniversity, setActiveUniversity] = useState<string | null>(null);

  const handleCardClick = (university: string) => {
    setActiveUniversity(university);
    setShowCarousel(true);
  };

  const handleClose = () => {
    setShowCarousel(false);
    setActiveUniversity(null);
  };

  const timelineData = [
    {
      title: "2024 - Present",
      content: (
        <div className="w-full group/card">
          <div
            onClick={() => handleCardClick("TAMU")}
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
                  Texas A&M University
                </p>
                <p className="text-sm text-gray-50">
                  College Station, Texas | GPA: 4.0/4.0
                </p>
              </div>
            </div>
            <div className="text content z-10">
              <h1 className="font-bold text-lg sm:text-sm md:text-sm lg:text-base xl:text-xl text-gray-50">
                Master of Science in Computer Science
              </h1>
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
            onClick={() => handleCardClick("UW")}
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4",
              "bg-[url('/uwmad.jpg')] bg-cover bg-center",
            )}
          >
            <div className="absolute inset-0 bg-black/60 transition duration-300 group-hover/card:bg-black/80" />
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
                  University of Wisconsin – Madison
                </p>
                <p className="text-sm text-gray-50">
                  Madison, Wisconsin | GPA: 3.8/4.0
                </p>
              </div>
            </div>
            <div className="text content z-10">
              <h1 className="font-bold text-lg sm:text-sm md:text-sm lg:text-base xl:text-xl text-gray-50">
                Bachelor of Science in Computer Science
              </h1>
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

        {showCarousel && activeUniversity && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center"
            onClick={handleClose}
          >
            <div
              className="bg-white dark:bg-neutral-900 w-11/12 max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <AppleCardsCarouselDemo university={activeUniversity} />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

interface CardData {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

interface AppleCardsCarouselDemoProps {
  university: string;
}

export function AppleCardsCarouselDemo({
  university,
}: AppleCardsCarouselDemoProps): JSX.Element {
  var data: CardData[];
  if (university === "TAMU") {
    data = dataTAMU;
  } else {
    data = dataUW;
  }
  const cards = data.map((card: CardData, index: number) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <h2 className="max-w-7xl pl-4 py-2 mx-auto items-center text-center text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Relevant Coursework
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
const dataTAMU = [
  {
    category: "Fall 2024: CSCE 606",
    title: "Software Engineering",
    src: "se.jpg",
    content: (
      <p className="text-white">
        Development of advanced concepts in software engineering; software
        development environments as a mechanism for enhancing productivity and
        software quality; the classification, evaluation and selection of
        methodologies for environments; rapid prototyping and reusability
        concepts; artificial intelligence techniques applied to software
        engineering.{" "}
      </p>
    ),
  },
  {
    category: "Fall 2024: CSCE 662",
    title: "Distributed Processing Systems",
    src: "dps.jpg",
    content: (
      <p className="text-white">
        Principles and practices of distributed processing; protocols, remote
        procedure calls; file sharing; reliable system design; load balancing;
        distributed database systems; protection and security; implementation.
      </p>
    ),
  },
  {
    category: "Fall 2024: CSCE 712",
    title: "Digital Forensics Engineering",
    src: "dfe.jpg",
    content: (
      <p className="text-white">
        {" "}
        Fundamentals and hands-on practice of computer and network forensics;
        exposure to technical principles, digital forensic tools and legal
        requirements on handling of digital information undergoing digital
        forensic analysis.
      </p>
    ),
  },
  {
    category: "Spring 2025: CSCE 629",
    title: "Analysis of Algorithms",
    src: "algos.jpg",
    content: (
      <p className="text-white">
        Concrete algorithm design and analysis; abstract models to analyze the
        complexity of problems; NP-Completeness; approximation and probabilistic
        algorithms.{" "}
      </p>
    ),
  },
  {
    category: "Spring 2025: CSCE 753",
    title: "Computer Vision and Robot Perception",
    src: "cvrp.jpg",
    content: (
      <p className="text-white">
        Projective geometry foundations of computer vision including spatial
        representations; geometric relations between multiple views of scenes;
        general principles of camera and image parameter estimation; visual
        feature extraction; lidar point cloud properties; visual and lidar-based
        simultaneous localization and mapping (SLAM).
      </p>
    ),
  },
  {
    category: "Spring 2025: CSCE 765",
    title: "Computer and Network Security",
    src: "netsec.jpg",
    content: (
      <p className="text-white">
        Fundamental vulnerabilities of the networking communications and
        corresponding defense mechanisms covering cryptographic algorithms with
        the primary intent to correctly apply them for real-work network
        security applications and protocols; vulnerabilities associated within
        the networking infrastructures; design of defense mechanisms to defeat
        vulnerabilities; investigation of various layers of the networking stack
        when incorporating the security mechanisms.
      </p>
    ),
  },
];
const dataUW = [
  {
    category: "Fall 2020: CS 200",
    title: "Introduction to Programming I",
    src: "java.jpg",
    content: (
      <p className="text-white">
        Incrementally developing small (200-500 lines) programs along with the
        fundamental Computer Science topics. These topics include: problem
        abstraction and decomposition, the edit-compile-run cycle, using
        variables of primitive and more complex data types, conditional and
        loop-based flow control, basic testing and debugging techniques, how to
        define and call functions (methods), and IO processing techniques.
        Reinforces good programming practices including the use of a consistent
        style, and meaningful documentation.
      </p>
    ),
  },
  {
    category: "Spring 2021: CS 300",
    title: "Introduction to Programming II",
    src: "java.jpg",
    content: (
      <p className="text-white">
        Introduction to Object-Oriented Programming using classes and objects to
        solve more complex problems. Introduces array-based and linked data
        structures: including lists, stacks, and queues. Programming assignments
        require writing and developing multi-class (file) programs using
        interfaces, generics, and exception handling to solve challenging real
        world problems. Topics reviewed include reading/writing data and objects
        from/to files and exception handling, and command line arguments. Topics
        introduced: object-oriented design; class vs. object; create and define
        interfaces and iterators; searching and sorting; abstract data types
        (List,Stack,Queue,PriorityQueue(Heap),Binary Search Tree); generic
        interfaces (parametric polymorphism); how to design and write test
        methods and classes; array based vs. linked node implementations;
        introduction to complexity analysis; recursion.
      </p>
    ),
  },
  {
    category: "Fall 2021: CS 400",
    title: "Introduction to Programming III",
    src: "java.jpg",
    content: (
      <p className="text-white">
        Balanced search trees, graphs, graph traversal algorithms, hash tables
        and sets, and complexity analysis and about classes of problems that
        require each data type. Required to design and implement using high
        quality professional code, a medium sized program, that demonstrates
        knowledge and use of latest language features, tools, and conventions.
        Inheritance and polymorphism; anonymous inner classes, lambda functions,
        performance analysis to discover and optimize critical code blocks.
        Industry standards for code development. Design and implement a medium
        size project with a more advanced user-interface design, such as a web
        or mobile application with a GUI and event- driven implementation; use
        of version-control software.
      </p>
    ),
  },
  {
    category: "Fall 2021: CS 252",
    title: "Introduction to Computer Engineering",
    src: "ce.jpg",
    content: (
      <p className="text-white">
        Logic components built with transistors, rudimentary Boolean algebra,
        basic combinational logic design, basic synchronous sequential logic
        design, basic computer organization and design, introductory machine-
        and assembly-language programming.
      </p>
    ),
  },
  {
    category: "Spring 2022: CS 354",
    title: "Machine Organization and Programming",
    src: "ce.jpg",
    content: (
      <p className="text-white">
        An introduction to fundamental structures of computer systems and the C
        programming language with a focus on the low-level interrelationships
        and impacts on performance. Topics include the virtual address space and
        virtual memory, the heap and dynamic memory management, the memory
        hierarchy and caching, assembly language and the stack, communication
        and interrupts/signals, compiling and assemblers/linkers.
      </p>
    ),
  },
  {
    category: "Fall 2022: CS 559",
    title: "Introduction to Computer Graphics",
    src: "cg.png",
    content: (
      <p className="text-white">
        Survey of computer graphics. Image representation, formation,
        presentation, composition and manipulation. Modeling, transformation,
        and display of geometric objects in two and three dimensions.
        Representation of curves and surfaces. Rendering, animation, multi-media
        and visualization.
      </p>
    ),
  },
  {
    category: "Fall 2022: CS 577",
    title: "Introduction to Algorithms",
    src: "algos.jpg",
    content: (
      <p className="text-white">
        Basic paradigms for the design and analysis of efficient algorithms:
        greed, divide-and-conquer, dynamic programming, reductions, and the use
        of randomness. Computational intractability including typical
        NP-complete problems and ways to deal with them.
      </p>
    ),
  },
  {
    category: "Spring 2023: CS 537",
    title: "Introduction to Operating Systems",
    src: "os.jpg",
    content: (
      <p className="text-white">
        Input-output hardware, interrupt handling, properties of magnetic tapes,
        discs and drums, associative memories and virtual address translation
        techniques. Batch processing, time sharing and real-time systems,
        scheduling resource allocation, modular software systems, performance
        measurement and system evaluation.
      </p>
    ),
  },
  {
    category: "Fall 2022: CS 564",
    title: "Introduction to Database Management Systems",
    src: "dbms.jpg",
    content: (
      <p className="text-white">
        What a database management system is; different data models currently
        used to structure the logical view of the database: relational,
        hierarchical, and network. Hands-on experience with relational and
        network-based database systems. Implementation techniques for database
        systems. File organization, query processing, concurrency control,
        rollback and recovery, integrity and consistency, and view
        implementation.
      </p>
    ),
  },
  {
    category: "Fall 2023: CS 407",
    title: "Foundation of Mobile Systems and Applications",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <p className="text-white">
        Design and implementation of applications, systems, and services for
        mobile platforms with (i) constraints, such as limited processing,
        memory, energy, interfaces, variable bandwidth, and high mobility, and
        (ii) features, such as touchscreens, cameras, electronic compasses, GPS,
        and accelerometers.
      </p>
    ),
  },
  {
    category: "Fall 2023: CS 540",
    title: "Introduction to Artificial Intelligence",
    src: "ai.jpg",
    content: (
      <p className="text-white">
        Principles of knowledge-based search techniques, automatic deduction,
        knowledge representation using predicate logic, machine learning,
        probabilistic reasoning. Applications in tasks such as problem solving,
        data mining, game playing, natural language understanding, computer
        vision, speech recognition, and robotics.
      </p>
    ),
  },
  {
    category: "Spring 2024: CS 544",
    title: "Introduction to Big Data Systems",
    src: "bds.png",
    content: (
      <p className="text-white">
        Deploy and use distributed systems to store and analyze large datasets.
        Unstructured and structured approaches to storage will be covered.
        Analysis will involve learning new query languages, processing streaming
        data, and training machine learning models. Most programming will be
        done in Python.
      </p>
    ),
  },
  {
    category: "Spring 2024: CS 571",
    title: "Introduction to UI/UX",
    src: "ui.avif",
    content: (
      <p className="text-white">
        Introduces software development of user interfaces (UIs). Build
        competence in implementing UIs using state-of-the-art (1) UI paradigms,
        such as event-driven interfaces, direct-manipulation interfaces, and
        dialogue-based interaction; (2) methods for capturing, interpreting, and
        responding to different forms of user input and states, including
        pointing, text entry, speech, touch, gestures, user activity, context,
        and physiological states; and (3) platform-specific UI development APIs,
        frameworks, and toolkits for multiple platforms including
        web/mobile/desktop interfaces, natural user interfaces, and voice user
        interfaces. Learn about the fundamental concepts, technologies,
        algorithms, and methods in building user interfaces, implement UIs using
        of state-of-the-art UI development tools, and build a UI development
        portfolio.
      </p>
    ),
  },
];
