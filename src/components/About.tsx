"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    title: "Clean Code Discipline",
    description: "Writing maintainable, well-structured code that scales with your team.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Problem-Solving Mindset",
    description: "Breaking complex business requirements into efficient technical solutions.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "System Thinking",
    description: "Designing complete architectures, not just scripts — from database to deployment.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-36">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(60,123,148,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>// About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Backend Developer.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-blue">System Builder.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              I&apos;m a Python backend developer focused on building{" "}
              <span className="font-medium" style={{ color: "var(--text-primary)" }}>APIs</span>,{" "}
              <span className="font-medium" style={{ color: "var(--text-primary)" }}>automation systems</span>,{" "}
              <span className="font-medium" style={{ color: "var(--text-primary)" }}>web backends</span>, and{" "}
              <span className="font-medium" style={{ color: "var(--text-primary)" }}>scalable architectures</span>{" "}
              that power real-world applications.
            </p>
            <p className="leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
              I don&apos;t just write code — I engineer systems that are built to handle production traffic, integrate with complex workflows, and grow with your business.
            </p>

            <div className="flex items-center gap-8 sm:gap-10">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "20+", label: "Projects Built" },
                { value: "99%", label: "Uptime Focus" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-brand-light to-brand">{stat.value}</div>
                  <div className="text-[11px] uppercase tracking-widest mt-1.5" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {strengths.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }} className="glass rounded-xl p-5 hover:border-brand/20 hover:shadow-[0_0_25px_rgba(60,123,148,0.06)] transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-brand/15 to-accent-blue/10 text-brand-light group-hover:from-brand/25 group-hover:to-accent-blue/15 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5 text-[15px]" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.description}</p>
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
