"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/section-title";
import { getEmailAddress, getMailtoHref } from "@/lib/email";
import {
  FaArrowUpRightFromSquare,
  FaRegCopy,
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa6";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
};

const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: getEmailAddress(),
    href: getMailtoHref(),
    icon: <FaRegEnvelope className="h-5 w-5" />,
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
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleCopyEmail = async () => {
    const emailAddress = getEmailAddress();

    if (!emailAddress) {
      return;
    }

    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1600);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailtoHref = getMailtoHref();

    if (!mailtoHref || mailtoHref === "mailto:") {
      return;
    }

    const bodyLines = ["Hey Ankit,", "", message || "N/A"];

    const formattedSubject = `${subject.trim()} - ${name.trim()}`;
    const encodedSubject = encodeURIComponent(formattedSubject);
    const encodedBody = encodeURIComponent(bodyLines.join("\n"));

    window.location.assign(
      `${mailtoHref}?subject=${encodedSubject}&body=${encodedBody}`,
    );
  };

  return (
    <section className="relative w-full px-6 sm:px-10 md:px-0">
      <SectionTitle title="Contact" className="px-0 sm:px-0" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 pt-5 lg:grid-cols-[1.1fr_1fr]"
      >
        <div className="p-1 sm:p-2">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
              Get in touch
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 sm:text-base">
              If you&apos;d like to collaborate, say hi, or talk about full-time
              opportunities, I&apos;d love to hear from you.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {contactItems.map((item) =>
                item.label === "Email" ? (
                  <div
                    key={item.label}
                    className="group flex items-start justify-between gap-3 rounded-xl border border-black/10 bg-white/55 px-4 py-3 transition-colors duration-300 hover:border-orange-500/40 dark:border-white/10 dark:bg-black/20 sm:items-center"
                  >
                    <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center">
                      <div className="flex h-10 shrink-0 items-center justify-center text-orange-600 dark:text-orange-300">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                          {item.label}
                        </p>
                        <p className="break-all text-sm font-medium text-neutral-900 dark:text-neutral-100 sm:text-base">
                          {showEmail ? item.value : "Click reveal to view"}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 self-center">
                      {showEmail ? (
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          aria-label="Copy email address"
                          className="rounded-lg text-neutral-500 transition-colors hover:text-orange-600 dark:text-neutral-500 dark:hover:text-orange-300"
                        >
                          <FaRegCopy className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setShowEmail((prev) => !prev)}
                          aria-label={showEmail ? "Hide email" : "Reveal email"}
                          className="rounded-lg text-neutral-500 transition-colors hover:text-orange-600 dark:text-neutral-500 dark:hover:text-orange-300"
                        >
                          <FaEye className="h-4 w-4" />
                        </button>
                      )}
                      {showEmail ? (
                        <a
                          href={item.href}
                          aria-label="Email Ankit"
                          className="text-neutral-400 transition-colors duration-200 hover:text-orange-500 dark:text-neutral-500 dark:hover:text-orange-300"
                        >
                          <FaArrowUpRightFromSquare className="h-4 w-4" />
                        </a>
                      ) : null}
                      {copiedEmail ? (
                        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-orange-600 dark:text-orange-300">
                          Copied
                        </span>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-black/10 bg-white/55 px-4 py-3 transition-colors duration-300 hover:border-orange-500/40 dark:border-white/10 dark:bg-black/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-orange-600 dark:text-orange-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 sm:text-base">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <FaArrowUpRightFromSquare className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-orange-500 dark:text-neutral-500 dark:group-hover:text-orange-300" />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-black/10 bg-white/65 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-black/25"
        >
          <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Send me an email!
          </h4>

          <div className="mt-5 space-y-4">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                Name
              </span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-black/10 bg-white/75 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-orange-500/50 dark:border-white/10 dark:bg-black/30 dark:text-neutral-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                Subject
              </span>
              <input
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-black/10 bg-white/75 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-orange-500/50 dark:border-white/10 dark:bg-black/30 dark:text-neutral-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                Message
              </span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Hi Ankit, I wanted to reach out about..."
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-black/10 bg-white/75 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-orange-500/50 dark:border-white/10 dark:bg-black/30 dark:text-neutral-100"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-orange-500 dark:text-black dark:hover:bg-orange-400"
          >
            Send Email
            <FaArrowUpRightFromSquare className="h-4 w-4" />
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
