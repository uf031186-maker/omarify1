"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Coming Soon", description: "An exciting Python project is in the works. Stay tuned!", stack: ["Python", "FastAPI"], icon: "🚀" },
  { title: "Coming Soon", description: "Building something cool with AI and automation.", stack: ["AI", "Python"], icon: "🤖" },
  { title: "Coming Soon", description: "A real-world backend project — currently in development.", stack: ["Flask", "PostgreSQL"], icon: "⚡" },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(54,216,183,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-purple">Projects</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            I&apos;m building real projects as I learn. Check back soon to see what I&apos;ve been working on.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card rounded-2xl overflow-hidden group">
              <div className="relative h-40 sm:h-44 overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--bg-card), var(--bg-card-hover))" }}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,92,252,0.06),transparent_70%)]" />
                <motion.span
                  className="text-5xl relative z-10"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                >
                  {project.icon}
                </motion.span>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="font-semibold text-[15px] sm:text-base mb-2.5 text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-blue">{project.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-badge font-mono">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
