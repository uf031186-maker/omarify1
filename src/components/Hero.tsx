"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Python Developer",
  "Backend Engineer",
  "API Architect",
  "Automation Developer",
];

const codeRainChars = [
  "def", "async", "await", "import", "class", "return", "yield",
  "try", "except", "with", "for", "if", "else", "lambda",
  "0", "1", "{}", "[]", "=>", "::", "//", "&&",
];

const rainDelays = [
  2.1, 0.7, 3.4, 1.2, 4.1, 0.3, 2.8, 1.9, 3.7, 0.5,
  2.3, 4.5, 1.6, 3.1, 0.9, 2.6, 4.2, 1.4, 3.8, 0.1,
  2.9, 4.7,
];
const rainDurations = [
  11.2, 9.4, 13.1, 10.5, 12.3, 8.7, 11.8, 9.9, 13.5, 10.1,
  12.7, 8.3, 11.4, 9.6, 13.8, 10.8, 12.1, 8.9, 11.6, 9.2,
  13.3, 10.3,
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(60,123,148,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(139,126,200,0.06),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(74,144,217,0.05),transparent)]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {codeRainChars.map((char, i) => (
          <motion.span
            key={i}
            className="absolute font-mono text-xs"
            style={{ left: `${(i * 4.5) % 100}%`, color: "var(--text-accent)" }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: "100vh", opacity: [0, 1, 0] }}
            transition={{ duration: rainDurations[i], repeat: Infinity, delay: rainDelays[i], ease: "linear" }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-brand/[0.05] blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-accent-purple/[0.04] blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full py-24 sm:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass glow-border text-xs mb-8 tracking-wider uppercase"
              style={{ color: "var(--text-accent)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              Available for hire
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>
              Hi, I&apos;m Umar —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-accent-blue to-accent-purple">
                Python Backend Developer
              </span>
            </h1>

            <p className="text-base sm:text-lg mb-8 max-w-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I build scalable APIs, automation systems, and production-ready backend architectures.
            </p>

            <div className="h-9 mb-10 flex items-center gap-3 px-4 py-2 rounded-lg w-fit" style={{ background: "var(--bg-input)", border: "1px solid var(--input-border)" }}>
              <span className="text-sm font-mono" style={{ color: "var(--text-accent)", opacity: 0.5 }}>$</span>
              <AnimatePresence mode="wait">
                <motion.span key={roleIndex} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.3 }} className="font-mono text-sm tracking-wide" style={{ color: "var(--text-accent)" }}>
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="text-sm" style={{ color: "var(--text-accent)" }}>█</motion.span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="group relative px-9 py-3.5 rounded-full bg-gradient-to-r from-brand to-accent-blue text-white font-bold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(60,123,148,0.35)] transition-all duration-300">
                Hire Me
                <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#projects" className="px-9 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(60,123,148,0.15)]" style={{ border: "1px solid var(--border-hover)", color: "var(--text-accent)" }}>
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block relative">
            <div className="rounded-2xl gradient-border glow-md overflow-hidden" style={{ background: "var(--code-bg)" }}>
              <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(20,21,25,0.4)" }}>
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-4 text-xs font-mono tracking-wide" style={{ color: "var(--text-muted)" }}>~/backend/main.py</span>
              </div>
              <div className="p-6 font-mono text-[13px] leading-[1.8] relative">
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand/[0.02] to-transparent pointer-events-none" />
                <div><span className="text-accent-purple">from</span> <span className="text-brand-light">fastapi</span> <span className="text-accent-purple">import</span> <span className="text-[#f0f0f3]">FastAPI</span></div>
                <div><span className="text-accent-purple">from</span> <span className="text-brand-light">sqlalchemy</span> <span className="text-accent-purple">import</span> <span className="text-[#f0f0f3]">create_engine</span></div>
                <div className="mt-4"><span className="text-[#4a4a55]"># Initialize production app</span></div>
                <div><span className="text-[#f0f0f3]">app</span> <span className="text-brand-light">=</span> <span className="text-brand-light">FastAPI</span><span className="text-[#f0f0f3]">(</span><span className="text-[#28c840]">title</span><span className="text-brand-light">=</span><span className="text-[#e9c46a]">&quot;Production API&quot;</span><span className="text-[#f0f0f3]">)</span></div>
                <div className="mt-4"><span className="text-accent-blue">@app</span><span className="text-[#f0f0f3]">.</span><span className="text-accent-blue">get</span><span className="text-[#f0f0f3]">(</span><span className="text-[#e9c46a]">&quot;/api/v1/health&quot;</span><span className="text-[#f0f0f3]">)</span></div>
                <div><span className="text-accent-purple">async def</span> <span className="text-brand-light">health_check</span><span className="text-[#f0f0f3]">():</span></div>
                <div className="pl-6"><span className="text-accent-purple">return</span> <span className="text-[#f0f0f3]">{"{"}</span><span className="text-[#e9c46a]">&quot;status&quot;</span><span className="text-[#f0f0f3]">: </span><span className="text-[#e9c46a]">&quot;healthy&quot;</span><span className="text-[#f0f0f3]">{"}"}</span></div>
                <div className="mt-4"><span className="text-accent-blue">@app</span><span className="text-[#f0f0f3]">.</span><span className="text-accent-blue">post</span><span className="text-[#f0f0f3]">(</span><span className="text-[#e9c46a]">&quot;/api/v1/users&quot;</span><span className="text-[#f0f0f3]">)</span></div>
                <div><span className="text-accent-purple">async def</span> <span className="text-brand-light">create_user</span><span className="text-[#f0f0f3]">(</span><span className="text-[#28c840]">data</span><span className="text-[#f0f0f3]">: </span><span className="text-brand-light">UserSchema</span><span className="text-[#f0f0f3]">):</span></div>
                <div className="pl-6"><span className="text-[#f0f0f3]">user</span> <span className="text-brand-light">=</span> <span className="text-accent-purple">await</span> <span className="text-[#f0f0f3]">UserService.</span><span className="text-brand-light">create</span><span className="text-[#f0f0f3]">(data)</span></div>
                <div className="pl-6"><span className="text-accent-purple">return</span> <span className="text-[#f0f0f3]">user</span></div>
              </div>
            </div>

            <motion.div className="absolute -bottom-4 -left-4 glass glow-border rounded-xl px-4 py-2.5 font-mono text-xs" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <span className="text-emerald-400">● </span>
              <span style={{ color: "var(--text-muted)" }}>200 OK</span>
              <span className="ml-2" style={{ color: "var(--text-accent)", opacity: 0.6 }}>12ms</span>
            </motion.div>

            <motion.div className="absolute -top-3 -right-3 glass glow-border rounded-xl px-4 py-2.5 font-mono text-xs" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
              <span className="text-brand-light">⚡</span>
              <span className="ml-2" style={{ color: "var(--text-muted)" }}>99.9% uptime</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, var(--bg-primary), transparent)" }} />
    </section>
  );
}
