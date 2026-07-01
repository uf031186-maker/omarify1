"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Clean, Scalable Code",
    description: "Every project follows SOLID principles, proper documentation, and production-ready standards.",
  },
  {
    title: "Fast Backend Development",
    description: "Rapid prototyping to production deployment — without cutting corners on quality.",
  },
  {
    title: "Strong Debugging Ability",
    description: "Systematic approach to finding and fixing issues, even in complex distributed systems.",
  },
  {
    title: "Real System Thinking",
    description: "I architect complete systems, not isolated scripts — database to API to deployment.",
  },
  {
    title: "Long-Term Support Mindset",
    description: "Code written for maintainability, with clear structure so future developers can extend it.",
  },
  {
    title: "Clear Communication",
    description: "Regular updates, technical documentation, and straightforward project discussions.",
  },
];

export default function WhyHireMe() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-36">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,77,255,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="text-neon-cyan text-xs font-mono tracking-[0.2em] uppercase">
            // Why Work With Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
              Production
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl glass hover:border-neon-cyan/25 hover:shadow-[0_0_20px_rgba(0,229,255,0.05)] transition-all duration-500 group"
            >
              <div className="mt-0.5 flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-neon-cyan/15 flex items-center justify-center shadow-[0_0_8px_rgba(0,229,255,0.15)]">
                  <svg className="w-3.5 h-3.5 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1.5 text-[15px]">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
