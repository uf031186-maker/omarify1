"use client";

import { motion } from "framer-motion";

const reasons = [
  { title: "Zero Risk — Pay Only If Satisfied", description: "If my work doesn't meet your expectations, you don't have to pay me. Simple as that." },
  { title: "Hungry to Learn & Prove Myself", description: "I'm not here for easy tasks. Give me a challenge and watch me grow into it." },
  { title: "Available 24/7", description: "I'm flexible with time zones and always reachable. Your project is my priority." },
  { title: "AI & Python Skills Growing Fast", description: "Currently learning Python, AI, automation, and backend — building real projects every day." },
  { title: "Honest About My Level", description: "I won't pretend to know what I don't. But I'll work twice as hard to learn what's needed." },
  { title: "Clear Communication", description: "Regular updates, no ghosting, and straightforward discussions about progress." },
];

export default function WhyHireMe() {
  return (
    <section className="theme-light relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,178,94,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>Why Work With Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Why Give Me a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-blue">Chance?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((reason, i) => (
            <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card flex items-start gap-4 p-5 rounded-xl group">
              <div className="mt-0.5 flex-shrink-0">
                <div className="card-icon !p-1.5 !rounded-full flex items-center justify-center" style={{ boxShadow: "0 0 8px rgba(249,124,17,0.15)" }}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--text-accent)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1.5 text-[15px]" style={{ color: "var(--text-primary)" }}>{reason.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
