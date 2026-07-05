"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import WordReveal from "./WordReveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/966598334586?text=${encodeURIComponent(`Hi, I'm ${name} (${email}).\n\n${message}`)}`;
    window.location.href = url;
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,168,0,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            <WordReveal words={[{ text: "Your" }, { text: "Time" }, { text: "Is" }, { text: "Worth", gradient: true }, { text: "More", gradient: true }]} />
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Pick a template, make it yours, and move on to the work that actually matters.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>Name</label>
                <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} className="input-field text-sm sm:text-base" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>Email</label>
                <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="input-field text-sm sm:text-base" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>Message</label>
                <textarea id="message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="input-field resize-none text-sm sm:text-base" placeholder="Tell me what you need..." />
              </div>
              <button type="submit" className="btn-submit text-sm sm:text-base">
                Send Message →
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5 sm:space-y-6"
          >
            <div className="card rounded-2xl p-5 sm:p-6">
              <h3 className="font-semibold mb-4 text-[15px]" style={{ color: "var(--text-primary)" }}>Quick Contact</h3>
              <div className="space-y-2">
                <a href="mailto:uf031186@gmail.com" className="contact-link" style={{ color: "var(--text-muted)" }}>
                  <div className="contact-icon">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm transition-colors">uf031186@gmail.com</span>
                </a>
                <a href="https://wa.me/966598334586" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: "var(--text-muted)" }}>
                  <div className="contact-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-sm transition-colors">WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="card rounded-2xl p-6 text-center">
              <a href="#templates" className="btn-primary text-base inline-block !px-8">
                Browse Templates Now
              </a>
              <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
                Instant download. Start using them today.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
