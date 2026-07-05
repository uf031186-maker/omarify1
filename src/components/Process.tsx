"use client";

import { motion } from "framer-motion";
import WordReveal from "./WordReveal";

const steps = [
  { number: "01", title: "Pick Your Template", description: "Browse the collection and find exactly what you need. Filter by category, tool, or use case." },
  { number: "02", title: "Make It Yours", description: "Open it up and customize it with your brand, content, and details. Everything is clearly labeled and easy to edit." },
  { number: "03", title: "Launch and Move On", description: "Use it in your business, share it with your team, or send it to clients. Done — on to the next thing." },
];

export default function Process() {
  return (
    <section id="how-it-works" className="relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,168,0,0.05),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            <WordReveal words={[{ text: "Three" }, { text: "Steps." }, { text: "That's", gradient: true }, { text: "It.", gradient: true }]} />
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
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
