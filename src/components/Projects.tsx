"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,178,94,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-purple">Projects</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            I&apos;m building real projects as I learn. Check back soon to see what I&apos;ve been working on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 sm:py-20"
        >
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-purple">
            Coming Soon
          </span>
        </motion.div>
      </div>
    </section>
  );
}
