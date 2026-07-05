"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WordReveal from "./WordReveal";

const faqs = [
  { q: "What format are the templates in?", a: "Each product page tells you the exact format. Most templates work with popular tools you already use — no special software needed." },
  { q: "Can I customize the templates?", a: "Absolutely. Every template is fully editable. Change the colors, fonts, text, layout — make it feel like yours because it is." },
  { q: "Do I get free updates?", a: "Yes. When a template gets improved, you get the updated version at no extra cost." },
  { q: "Can I use these for client work?", a: "Yes — you can use them in projects you deliver to clients. You just can't resell the templates themselves as your own product." },
  { q: "What if a template doesn't work for me?", a: "Reach out and I'll make it right. I want you to actually use what you buy — not leave it sitting in a downloads folder." },
  { q: "Do you offer refunds?", a: "Because these are digital products, I don't offer automatic refunds. But if something isn't working, message me and we'll figure it out together." },
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
            <WordReveal words={[{ text: "Questions?" }, { text: "Answered.", gradient: true }]} />
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
