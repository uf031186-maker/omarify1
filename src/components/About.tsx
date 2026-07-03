"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    title: "Fast Learner",
    description: "I pick up new technologies quickly and love diving into unfamiliar challenges.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Problem Solver",
    description: "I don't give up easily. If I don't know something, I'll figure it out.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Honest & Reliable",
    description: "I'll always be upfront about what I can and can't do — and I'll work hard to deliver.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="theme-light relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,113,227,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>About Me</span>
          <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-extrabold mt-4 tracking-[-0.03em]" style={{ color: "var(--text-primary)" }}>
            Learning Every Day.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-blue">Growing Fast.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-[15px] sm:text-[17px] leading-[1.8] mb-6" style={{ color: "var(--text-muted)" }}>
              I&apos;m a self-taught developer learning{" "}
              <span className="font-medium" style={{ color: "var(--text-primary)" }}>Python</span>,{" "}
              <span className="font-medium" style={{ color: "var(--text-primary)" }}>AI &amp; Machine Learning</span>,{" "}
              <span className="font-medium" style={{ color: "var(--text-primary)" }}>backend development</span>, and{" "}
              <span className="font-medium" style={{ color: "var(--text-primary)" }}>automation</span>.{" "}
              I&apos;m hungry to learn and ready to prove myself.
            </p>
            <p className="text-[15px] sm:text-base leading-[1.8] mb-10" style={{ color: "var(--text-muted)" }}>
              I believe in learning by doing. Give me a project and I&apos;ll give it my all — if the result isn&apos;t good enough, you don&apos;t have to pay me. That&apos;s how confident I am in my work ethic.
            </p>

            <div className="flex items-center gap-8 sm:gap-10">
              {[
                { value: "100%", label: "Dedication" },
                { value: "24/7", label: "Availability" },
                { value: "0", label: "Excuses" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-brand-light to-brand tracking-[-0.02em]">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-medium mt-2" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {strengths.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }} className="card rounded-xl p-5 group">
                <div className="flex items-start gap-4">
                  <div className="card-icon !rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5 text-[15px] tracking-[-0.01em]" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                    <p className="text-[13px] sm:text-sm leading-[1.7]" style={{ color: "var(--text-muted)" }}>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
