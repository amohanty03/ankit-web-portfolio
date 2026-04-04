"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/section-title";
import MagicButton from "./ui/magic-button";
import {
  FaArrowUpRightFromSquare,
  FaCopy,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaRegEnvelope,
} from "react-icons/fa6";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  actionIcon?: React.ReactNode;
};

const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "ankitmapplications@gmail.com",
    href: "mailto:ankitmapplications@gmail.com",
    icon: <FaRegEnvelope className="h-5 w-5" />,
    actionIcon: <FaCopy className="h-4 w-4" />,
  },
  {
    label: "GitHub",
    value: "github.com/amohanty03",
    href: "https://github.com/amohanty03",
    icon: <FaGithub className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    value: "in/mohanty-ankit",
    href: "https://www.linkedin.com/in/mohanty-ankit/",
    icon: <FaLinkedinIn className="h-5 w-5" />,
  },
];

export default function Contact() {
  const [showEmail, setShowEmail] = React.useState(false);

  return (
    <section
      id="contact"
      className="relative mt-12 px-6 pb-8 sm:px-10 md:mt-14 md:px-0 lg:mt-20 lg:pb-12"
    >
      <SectionTitle title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 pt-5 lg:grid-cols-[1.1fr_1fr]"
      >
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_14px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-black/30 dark:shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
              Let&apos;s connect
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 sm:text-base">
              If you&apos;d like to collaborate, say hi, or talk about full-time
              opportunities, I&apos;d love to hear from you.
            </p>

            <div className="mt-8">
              <a href="mailto:ankitmapplications@gmail.com">
                <MagicButton
                  title="Send a message"
                  icon={<FaRegEnvelope className="h-4 w-4" />}
                  position="left"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {contactItems.map((item, index) =>
            item.label === "Email" ? (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + index * 0.08,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/65 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/40 dark:border-white/10 dark:bg-black/25"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-orange-600 dark:border-white/10 dark:bg-black/25 dark:text-orange-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base font-medium text-neutral-900 dark:text-neutral-100">
                        {showEmail ? item.value : "Click reveal to view"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowEmail((prev) => !prev)}
                      className="rounded-lg border border-black/15 bg-white/70 px-3 py-1.5 text-xs font-medium text-neutral-800 transition-colors hover:border-orange-500/40 hover:text-orange-600 dark:border-white/20 dark:bg-black/30 dark:text-neutral-200 dark:hover:border-orange-300/40 dark:hover:text-orange-300"
                    >
                      {showEmail ? "Hide" : "Reveal"}
                    </button>
                    {showEmail ? (
                      <a
                        href={item.href}
                        aria-label="Email Ankit"
                        className="text-neutral-400 transition-colors duration-200 hover:text-orange-500 dark:text-neutral-500 dark:hover:text-orange-300"
                      >
                        <FaArrowUpRightFromSquare className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + index * 0.08,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/65 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/40 dark:border-white/10 dark:bg-black/25"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-orange-600 dark:border-white/10 dark:bg-black/25 dark:text-orange-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base font-medium text-neutral-900 dark:text-neutral-100">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-400 transition-colors duration-200 group-hover:text-orange-500 dark:text-neutral-500 dark:group-hover:text-orange-300">
                    {item.actionIcon ? item.actionIcon : null}
                    <FaArrowUpRightFromSquare className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            ),
          )}
        </div>
      </motion.div>
    </section>
  );
}
