"use client";

import { motion } from "framer-motion";

const codeRainChars = [
  "def", "async", "await", "import", "class", "return", "yield",
  "try", "except", "with", "for", "if", "else", "lambda",
  "0", "1", "{}", "[]", "=>", "::", "//", "&&",
];

const rainDelays = [
  2.1, 0.7, 3.4, 1.2, 4.1, 0.3, 2.8, 1.9, 3.7, 0.5,
  2.3, 4.5, 1.6, 3.1, 0.9, 2.6, 4.2, 1.4, 3.8, 0.1,
  2.9, 4.7,
];
const rainDurations = [
  11.2, 9.4, 13.1, 10.5, 12.3, 8.7, 11.8, 9.9, 13.5, 10.1,
  12.7, 8.3, 11.4, 9.6, 13.8, 10.8, 12.1, 8.9, 11.6, 9.2,
  13.3, 10.3,
];

export default function Hero() {
  return (
    <section className="relative pb-10 pt-24 sm:min-h-svh sm:pb-0 sm:pt-0 flex items-start sm:items-center overflow-hidden">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(20,168,0,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(145,229,100,0.07),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(28,190,0,0.06),transparent)]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {codeRainChars.map((char, i) => (
          <motion.span
            key={i}
            className="absolute font-mono text-xs"
            style={{ left: `${(i * 4.5) % 100}%`, color: "var(--text-accent)" }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: "100vh", opacity: [0, 1, 0] }}
            transition={{ duration: rainDurations[i], repeat: Infinity, delay: rainDelays[i], ease: "linear" }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-brand/[0.05] blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-accent-purple/[0.04] blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full sm:py-0">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass glow-border text-xs mb-8 tracking-wider uppercase" style={{ color: "var(--text-accent)" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              Trusted by 2,000+ small businesses
            </span>
          </motion.div>

          <h1 className="text-[2.5rem] sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] mb-7 tracking-[-0.03em]" style={{ color: "var(--text-primary)" }}>
            {["Templates", "That", "Do", "the"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}{" "}
            <br className="sm:hidden" />
            {["Hard", "Work", "for", "You"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 1.0 + i * 0.15 }}
                className="inline-block mr-[0.3em] text-transparent bg-clip-text animate-gradient-shift"
                style={{ backgroundImage: "linear-gradient(90deg, #1cbe00, #14a800, #91e564, #5bbc2e, #1cbe00)", backgroundSize: "200% 100%" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <p className="text-[15px] sm:text-lg mb-8 max-w-xl mx-auto leading-[1.75] font-normal" style={{ color: "var(--text-muted)" }}>
            Stop building everything from scratch. Grab a ready-made template, customize it in minutes, and get back to running your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#templates" className="btn-primary">
              Browse Templates
            </a>
            <a href="#how-it-works" className="btn-outline">
              How It Works →
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32" style={{ background: "linear-gradient(to top, var(--bg-primary), transparent)" }} />
    </section>
  );
}
