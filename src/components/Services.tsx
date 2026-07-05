"use client";

import { motion } from "framer-motion";
import WordReveal from "./WordReveal";

const benefits = [
  { text: "Hours back in your week — every week", icon: "⏰" },
  { text: "A professional look without the professional price tag", icon: "✨" },
  { text: "Templates that work the way you work", icon: "⚡" },
  { text: "Instant download — start using them today", icon: "📥" },
  { text: "Free updates when improvements are made", icon: "🔄" },
  { text: "Friendly support if you ever get stuck", icon: "💬" },
];

export default function Services() {
  return (
    <section id="benefits" className="theme-light relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-secondary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(20,168,0,0.03),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>Benefits</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            <WordReveal words={[{ text: "What" }, { text: "You" }, { text: "Actually", gradient: true }, { text: "Get", gradient: true }]} />
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((benefit, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card flex items-center gap-4 p-5 rounded-xl group">
              <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
              <span className="font-medium text-[15px]" style={{ color: "var(--text-primary)" }}>{benefit.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
