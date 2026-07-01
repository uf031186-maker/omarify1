"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Python Core",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" },
      { name: "Flask", level: "Advanced" },
      { name: "Django", level: "APIs Focus" },
    ],
  },
  {
    title: "Backend Skills",
    skills: [
      { name: "REST APIs", level: "Expert" },
      { name: "Authentication", level: "JWT/OAuth" },
      { name: "Microservices", level: "Intermediate" },
      { name: "Webhooks", level: "Advanced" },
    ],
  },
  {
    title: "Data & Automation",
    skills: [
      { name: "Web Scraping", level: "Advanced" },
      { name: "Automation Scripts", level: "Advanced" },
      { name: "Data Pipelines", level: "Intermediate" },
      { name: "Task Scheduling", level: "Celery/Cron" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Redis", level: "Basics" },
      { name: "SQLAlchemy", level: "Advanced" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Linux Server", level: "Intermediate" },
      { name: "CI/CD", level: "Basics" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 lg:py-36">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-secondary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,123,148,0.03),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>// Technical Skills</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Tools &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-purple">Technologies</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Focused on the Python ecosystem and backend technologies that power production systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: catIdx * 0.1 }} className="glass rounded-2xl p-6 hover:border-brand/20 hover:shadow-[0_0_30px_rgba(60,123,148,0.06)] transition-all duration-500 group">
              <h3 className="font-semibold mb-5 flex items-center gap-2.5" style={{ color: "var(--text-primary)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_6px_rgba(60,123,148,0.5)]" />
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between py-2.5 px-3.5 rounded-lg transition-colors duration-300" style={{ background: "var(--badge-bg)" }}>
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
