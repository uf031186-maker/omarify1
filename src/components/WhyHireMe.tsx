"use client";

import { motion } from "framer-motion";
import WordReveal from "./WordReveal";

const reasons = [
  { title: "AI-Powered Development", description: "I use AI tools throughout the development process — not as a gimmick, but as a way to write cleaner code, catch issues earlier, and move faster without sacrificing quality." },
  { title: "Custom-Built for Your Goals", description: "Your website isn't based on a theme someone else is also using. It's designed and developed around your brand, your audience, and the outcomes you're trying to achieve." },
  { title: "Performance-First Approach", description: "Speed matters — for user experience and for search rankings. Every site I build is optimized for fast load times, responsive layouts, and clean, efficient code." },
  { title: "Clear Communication, No Surprises", description: "You'll always know where your project stands. I keep the process straightforward, explain decisions in plain language, and deliver on the timeline we agree to." },
  { title: "Lower Long-Term Costs", description: "Clean, well-structured code is easier to maintain and update. You won't be paying to fix problems that shouldn't have existed in the first place." },
  { title: "A Real Competitive Edge", description: "Most businesses in your market are running on slow, outdated websites. Yours won't be one of them." },
];

export default function WhyHireMe() {
  return (
    <section className="theme-light relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(145,229,100,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>Why Choose Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            <WordReveal words={[{ text: "What" }, { text: "Sets" }, { text: "My" }, { text: "Work" }, { text: "Apart", gradient: true }]} />
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((reason, i) => (
            <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card flex items-start gap-4 p-5 rounded-xl group">
              <div className="mt-0.5 flex-shrink-0">
                <div className="card-icon !p-1.5 !rounded-full flex items-center justify-center" style={{ boxShadow: "0 0 8px rgba(20,168,0,0.15)" }}>
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
