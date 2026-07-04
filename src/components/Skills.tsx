"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Python & AI",
    skills: [
      { name: "Python", level: "Learning" },
      { name: "AI / ML Basics", level: "Learning" },
      { name: "FastAPI", level: "Beginner" },
      { name: "Flask", level: "Beginner" },
    ],
  },
  {
    title: "Backend Basics",
    skills: [
      { name: "REST APIs", level: "Learning" },
      { name: "Authentication", level: "Basics" },
      { name: "Database Design", level: "Learning" },
      { name: "Web Scraping", level: "Beginner" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: "Comfortable" },
      { name: "VS Code", level: "Daily Use" },
      { name: "Linux Basics", level: "Learning" },
      { name: "Vercel / Hosting", level: "Beginner" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="theme-light relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-secondary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,168,0,0.03),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>What I&apos;m Learning</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Tools &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-purple">Technologies</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Currently learning — getting better every day. These are the tools I&apos;m working with.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: catIdx * 0.1 }} className="card rounded-2xl p-6 group">
              <h3 className="font-semibold mb-5 flex items-center gap-2.5" style={{ color: "var(--text-primary)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_6px_rgba(20,168,0,0.5)]" />
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill">
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{skill.name}</span>
                    <span className="text-[11px] font-mono tracking-wide" style={{ color: "var(--text-accent)", opacity: 0.7 }}>{skill.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
