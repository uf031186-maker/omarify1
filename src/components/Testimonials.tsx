"use client";

import { motion } from "framer-motion";
import WordReveal from "./WordReveal";

const testimonials = [
  {
    quote: "I used to spend a full day putting together client proposals. Now I do it in 20 minutes. These templates literally changed how I run my business.",
    stars: 5,
  },
  {
    quote: "Finally, templates that actually look good and make sense. I didn't have to watch a YouTube video just to figure out how to use them.",
    stars: 5,
  },
  {
    quote: "I've bought templates from other shops before and always ended up rebuilding them. These ones I actually use — every single week.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,168,0,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            <WordReveal words={[{ text: "Don't" }, { text: "Take" }, { text: "My" }, { text: "Word", gradient: true }, { text: "for", gradient: true }, { text: "It", gradient: true }]} />
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card rounded-2xl p-6 group">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-sm" style={{ color: "var(--text-accent)" }}>★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-muted)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
