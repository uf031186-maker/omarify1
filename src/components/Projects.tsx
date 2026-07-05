"use client";

import { motion } from "framer-motion";
import WordReveal from "./WordReveal";

export default function Projects() {
  return (
    <section id="templates" className="theme-light relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-secondary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(145,229,100,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>Templates</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            <WordReveal words={[{ text: "Templates", gradient: true }, { text: "Coming", gradient: true }, { text: "Soon", gradient: true }]} />
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 space-y-6">
          <p className="text-[15px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
            I&apos;m building a collection of premium templates for small businesses and creators. They&apos;re not ready just yet — but they&apos;re on the way.
          </p>

          <div className="card rounded-2xl p-6 sm:p-8" style={{ background: "var(--card-bg)" }}>
            <div className="text-3xl mb-4">💡</div>
            <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--text-primary)" }}>
              Need a template or a custom project?
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              If you need any type of template, document, spreadsheet, or a custom project built for your business — just send me a message. I&apos;ll create it for you.
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Message Me →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
