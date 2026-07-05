"use client";

import { motion } from "framer-motion";
import WordReveal from "./WordReveal";

export default function About() {
  return (
    <section id="about" className="theme-light relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,168,0,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>The Problem</span>
          <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-extrabold mt-4 tracking-[-0.03em]" style={{ color: "var(--text-primary)" }}>
            <WordReveal
              words={[
                { text: "Your" },
                { text: "Time" },
                { text: "Deserves", gradient: true },
                { text: "Better", gradient: true },
              ]}
            />
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 space-y-5">
          <p className="text-[15px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
            You didn&apos;t start your business to spend hours designing spreadsheets, formatting documents, or wrestling with layouts.
          </p>
          <p className="text-[15px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
            But that&apos;s where your time keeps going — on tasks that feel productive but don&apos;t actually grow your business.
          </p>
          <p className="text-lg sm:text-xl font-semibold mt-6" style={{ color: "var(--text-primary)" }}>
            There&apos;s a faster way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
