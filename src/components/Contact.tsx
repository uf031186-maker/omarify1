"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
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
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-secondary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,92,252,0.04),transparent_60%)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { l: 5, t: 12, d: 5.2, dl: 0.3 }, { l: 15, t: 45, d: 6.1, dl: 1.2 },
          { l: 25, t: 78, d: 4.8, dl: 2.1 }, { l: 35, t: 23, d: 7.3, dl: 0.8 },
          { l: 45, t: 56, d: 5.5, dl: 1.9 }, { l: 55, t: 89, d: 6.7, dl: 0.5 },
          { l: 65, t: 34, d: 4.3, dl: 2.7 }, { l: 75, t: 67, d: 7.1, dl: 1.4 },
          { l: 85, t: 11, d: 5.9, dl: 0.1 }, { l: 95, t: 44, d: 6.4, dl: 2.3 },
          { l: 10, t: 77, d: 4.6, dl: 1.7 }, { l: 20, t: 33, d: 7.5, dl: 0.6 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand/20"
            style={{ left: `${p.l}%`, top: `${p.t}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: p.d, repeat: Infinity, delay: p.dl }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)" }}>
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Let&apos;s Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent-purple">
              Backend System
            </span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Have a project in mind? Let&apos;s discuss how I can help you build
            a reliable, scalable backend.
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
                <label htmlFor="name" className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field text-sm sm:text-base"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                  Project Description
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input-field resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="btn-submit text-sm sm:text-base"
              >
                {submitted ? "Message Sent!" : "Send Message"}
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
                <a
                  href="mailto:uf031186@gmail.com"
                  className="contact-link"
                  style={{ color: "var(--text-muted)" }}
                >
                  <div className="contact-icon">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm transition-colors">uf031186@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/966598334586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  style={{ color: "var(--text-muted)" }}
                >
                  <div className="contact-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-sm transition-colors">WhatsApp</span>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  style={{ color: "var(--text-muted)" }}
                >
                  <div className="contact-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-sm transition-colors">GitHub</span>
                </a>
              </div>
            </div>

            <div className="card rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Available for projects</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Usually responds within 24 hours. Currently open to backend
                development projects and full-time opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
