"use client";

import { motion } from "framer-motion";
import WordReveal from "./WordReveal";

const templates = [
  { title: "Business Proposal", category: "Documents", badge: "Popular" },
  { title: "Social Media Kit", category: "Marketing", badge: "New" },
  { title: "Invoice Template", category: "Finance", badge: null },
  { title: "Project Tracker", category: "Spreadsheets", badge: "Popular" },
  { title: "Client Onboarding", category: "Documents", badge: null },
  { title: "Content Calendar", category: "Marketing", badge: "New" },
];

export default function Projects() {
  return (
    <section id="templates" className="theme-light relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-secondary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(145,229,100,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>Templates</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            <WordReveal words={[{ text: "Find" }, { text: "the" }, { text: "Right" }, { text: "Template", gradient: true }, { text: "for", gradient: true }, { text: "You", gradient: true }]} />
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Every template is tested, organized, and ready to use the moment you download it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {templates.map((template, i) => (
            <motion.div key={template.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="card rounded-2xl overflow-hidden group cursor-default">
              <div className="h-40 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, rgba(20,168,0,0.08), rgba(145,229,100,0.04))" }}>
                <svg className="w-12 h-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--text-accent)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {template.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: template.badge === "New" ? "rgba(20,168,0,0.15)" : "rgba(145,229,100,0.15)", color: "var(--text-accent)" }}>
                    {template.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono uppercase tracking-wider" style={{ color: "var(--text-accent)" }}>{template.category}</span>
                <h3 className="font-semibold text-base mt-1.5 mb-4" style={{ color: "var(--text-primary)" }}>{template.title}</h3>
                <button className="btn-primary text-sm !py-2 w-full">Get This Template</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
