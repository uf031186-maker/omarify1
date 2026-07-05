"use client";

import { motion } from "framer-motion";
import WordReveal from "./WordReveal";

export default function Pricing() {
  return (
    <section id="pricing" className="theme-light relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-secondary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,168,0,0.03),transparent_70%)]" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>Bundle</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            <WordReveal words={[{ text: "Skip" }, { text: "the" }, { text: "Guesswork.", gradient: true }, { text: "Get", gradient: true }, { text: "the", gradient: true }, { text: "Bundle.", gradient: true }]} />
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Why buy one at a time? Grab the full collection and have every template you&apos;ll need — now and later.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10">
          <a href="#contact" className="btn-primary text-lg !px-10 !py-4">
            Get the Bundle
          </a>
        </motion.div>
      </div>
    </section>
  );
}
