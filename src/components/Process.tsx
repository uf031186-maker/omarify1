"use client";

import { motion } from "framer-motion";
import WordReveal from "./WordReveal";

const steps = [
  { number: "01", title: "Discovery", description: "We start with a conversation. I learn about your business, your goals, your audience, and what success looks like for this project. This is the foundation everything else is built on." },
  { number: "02", title: "Planning & Strategy", description: "I map out the site structure, define the user flow, and outline the technical approach. You'll see a clear plan before any code is written." },
  { number: "03", title: "Design & Development", description: "Your site takes shape — built with clean UI, responsive layouts, and the latest web standards. AI-powered tools accelerate the process and help maintain high code quality throughout." },
  { number: "04", title: "Review & Refinement", description: "You review the site, provide feedback, and we refine together. Nothing goes live until you're confident it's right." },
  { number: "05", title: "Launch & Handoff", description: "Your site goes live. I handle deployment, run final performance checks, and make sure everything is working smoothly. You get full access and documentation so you're never locked in." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,168,0,0.05),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>My Development Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            <WordReveal words={[{ text: "How" }, { text: "We" }, { text: "Go" }, { text: "From" }, { text: "Idea", gradient: true }, { text: "to", gradient: true }, { text: "Launch", gradient: true }]} />
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card rounded-2xl p-5 sm:p-6 group cursor-default">
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-brand-light to-brand mb-4 tracking-[-0.02em]">
                {step.number}
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-3" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
