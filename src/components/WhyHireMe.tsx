"use client";

import { motion } from "framer-motion";
import WordReveal from "./WordReveal";

export default function WhyHireMe() {
  return (
    <section id="about-me" className="theme-light relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(145,229,100,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>About</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            <WordReveal words={[{ text: "Built" }, { text: "by" }, { text: "Someone" }, { text: "Who", gradient: true }, { text: "Gets", gradient: true }, { text: "It", gradient: true }]} />
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 space-y-5">
          <p className="text-[15px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
            I know what it&apos;s like to run a small business with a never-ending to-do list. I&apos;ve been there — spending entire afternoons on tasks that should&apos;ve taken thirty minutes.
          </p>
          <p className="text-[15px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
            That&apos;s why I started making these templates. Not to sell pretty files, but to give you back the hours you&apos;re losing to busywork.
          </p>
          <p className="text-[15px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
            Every template I create is something I&apos;ve needed myself or built for a real client. Nothing theoretical. Nothing filler.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
