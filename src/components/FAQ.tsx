"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WordReveal from "./WordReveal";

const faqs = [
  { q: "How long does a typical project take?", a: "It depends on scope and complexity, but most websites are delivered within 2–6 weeks. We'll agree on a clear timeline during the planning phase, and I'll keep you updated throughout." },
  { q: "How much does a website cost?", a: "Pricing varies based on the type of site, number of pages, and features required. I provide a detailed quote after our initial consultation so you know exactly what to expect — no hidden fees." },
  { q: "Will my website be mobile-friendly?", a: "Every site I build is fully responsive and tested across devices and screen sizes. Your visitors get a great experience whether they're on a phone, tablet, or desktop." },
  { q: "Do you offer ongoing maintenance or support?", a: "Yes. I offer post-launch support and maintenance packages to keep your site updated, secure, and running smoothly. We can discuss the right option for your needs." },
  { q: "Will I be able to update the site myself?", a: "If you need a content management system, I'll build one in and walk you through how to use it. For simpler sites, I can handle updates for you or set up a system that lets you make basic changes independently." },
  { q: "Do you work with clients worldwide?", a: "Absolutely. I work with clients remotely and communicate through video calls, email, and project management tools. Location is never a barrier." },
  { q: "What if I already have a website and just need improvements?", a: "I can audit your current site, identify what's working and what isn't, and either improve the existing build or recommend a rebuild if that's the better path forward." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="theme-light relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-secondary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,168,0,0.03),transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            <WordReveal words={[{ text: "Frequently" }, { text: "Asked" }, { text: "Questions", gradient: true }]} />
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.05 }} className="card rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-[15px]" style={{ color: "var(--text-primary)" }}>{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-xl font-light leading-none"
                  style={{ color: "var(--text-accent)" }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
