"use client";

import { motion } from "framer-motion";

const reasons = [
  { title: "Clean, Scalable Code", description: "Every project follows SOLID principles, proper documentation, and production-ready standards." },
  { title: "Fast Backend Development", description: "Rapid prototyping to production deployment — without cutting corners on quality." },
  { title: "Strong Debugging Ability", description: "Systematic approach to finding and fixing issues, even in complex distributed systems." },
  { title: "Real System Thinking", description: "I architect complete systems, not isolated scripts — database to API to deployment." },
  { title: "Long-Term Support Mindset", description: "Code written for maintainability, with clear structure so future developers can extend it." },
  { title: "Clear Communication", description: "Regular updates, technical documentation, and straightforward project discussions." },
];

export default function WhyHireMe() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-36">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,126,200,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>// Why Work With Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-blue">Production</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((reason, i) => (
            <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-4 p-5 rounded-xl glass hover:border-brand/20 hover:shadow-[0_0_25px_rgba(60,123,148,0.06)] transition-all duration-500 group">
              <div className="mt-0.5 flex-shrink-0">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "var(--badge-bg)", boxShadow: "0 0 8px rgba(60,123,148,0.15)" }}>
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
