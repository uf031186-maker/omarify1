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
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,229,255,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(124,77,255,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(41,121,255,0.06),transparent)]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Code rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.035]">
        {codeRainChars.map((char, i) => (
          <motion.span
            key={i}
            className="absolute text-neon-cyan font-mono text-xs"
            style={{ left: `${(i * 4.5) % 100}%` }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: "100vh", opacity: [0, 1, 0] }}
            transition={{
              duration: rainDurations[i],
              repeat: Infinity,
              delay: rainDelays[i],
              ease: "linear",
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-neon-cyan/[0.06] blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-neon-purple/[0.06] blur-[80px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full py-24 sm:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass glow-border text-xs text-neon-cyan mb-8 tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
              Available for hire
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Hi, I&apos;m Umar —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple">
                Python Backend Developer
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              I build scalable APIs, automation systems, and production-ready
              backend architectures.
            </p>

            {/* Role switcher */}
            <div className="h-9 mb-10 flex items-center gap-3 px-4 py-2 rounded-lg bg-navy-800/50 border border-neon-cyan/10 w-fit">
              <span className="text-sm text-neon-cyan/50 font-mono">$</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-neon-cyan font-mono text-sm tracking-wide"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-neon-cyan text-sm"
              >
                █
              </motion.span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative px-9 py-3.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-navy-950 font-bold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(0,229,255,0.35)] transition-all duration-300"
              >
                Hire Me
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#projects"
                className="px-9 py-3.5 rounded-full border border-neon-cyan/25 text-neon-cyan font-semibold text-sm tracking-wide hover:bg-neon-cyan/10 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* Right side - Futuristic code terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="rounded-2xl gradient-border glow-md bg-navy-900/80 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-navy-800/30">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-4 text-xs text-gray-500 font-mono tracking-wide">
                  ~/backend/main.py
                </span>
              </div>
              {/* Code */}
              <div className="p-6 font-mono text-[13px] leading-[1.8] relative">
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-neon-cyan/[0.02] to-transparent pointer-events-none" />
                <div>
                  <span className="text-neon-purple">from</span>{" "}
                  <span className="text-neon-cyan">fastapi</span>{" "}
                  <span className="text-neon-purple">import</span>{" "}
                  <span className="text-white">FastAPI</span>
                </div>
                <div>
                  <span className="text-neon-purple">from</span>{" "}
                  <span className="text-neon-cyan">sqlalchemy</span>{" "}
                  <span className="text-neon-purple">import</span>{" "}
                  <span className="text-white">create_engine</span>
                </div>
                <div className="mt-4">
                  <span className="text-gray-600"># Initialize production app</span>
                </div>
                <div>
                  <span className="text-white">app</span>{" "}
                  <span className="text-neon-cyan">=</span>{" "}
                  <span className="text-neon-cyan">FastAPI</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">title</span>
                  <span className="text-neon-cyan">=</span>
                  <span className="text-amber-300">&quot;Production API&quot;</span>
                  <span className="text-white">)</span>
                </div>
                <div className="mt-4">
                  <span className="text-neon-blue">@app</span>
                  <span className="text-white">.</span>
                  <span className="text-neon-blue">get</span>
                  <span className="text-white">(</span>
                  <span className="text-amber-300">&quot;/api/v1/health&quot;</span>
                  <span className="text-white">)</span>
                </div>
                <div>
                  <span className="text-neon-purple">async def</span>{" "}
                  <span className="text-neon-cyan">health_check</span>
                  <span className="text-white">():</span>
                </div>
                <div className="pl-6">
                  <span className="text-neon-purple">return</span>{" "}
                  <span className="text-white">{"{"}</span>
                  <span className="text-amber-300">&quot;status&quot;</span>
                  <span className="text-white">: </span>
                  <span className="text-amber-300">&quot;healthy&quot;</span>
                  <span className="text-white">{"}"}</span>
                </div>
                <div className="mt-4">
                  <span className="text-neon-blue">@app</span>
                  <span className="text-white">.</span>
                  <span className="text-neon-blue">post</span>
                  <span className="text-white">(</span>
                  <span className="text-amber-300">&quot;/api/v1/users&quot;</span>
                  <span className="text-white">)</span>
                </div>
                <div>
                  <span className="text-neon-purple">async def</span>{" "}
                  <span className="text-neon-cyan">create_user</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">data</span>
                  <span className="text-white">: </span>
                  <span className="text-neon-cyan">UserSchema</span>
                  <span className="text-white">):</span>
                </div>
                <div className="pl-6">
                  <span className="text-white">user</span>{" "}
                  <span className="text-neon-cyan">=</span>{" "}
                  <span className="text-neon-purple">await</span>{" "}
                  <span className="text-white">UserService.</span>
                  <span className="text-neon-cyan">create</span>
                  <span className="text-white">(data)</span>
                </div>
                <div className="pl-6">
                  <span className="text-neon-purple">return</span>{" "}
                  <span className="text-white">user</span>
                </div>
              </div>
            </div>

            {/* Floating status badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass glow-border rounded-xl px-4 py-2.5 font-mono text-xs"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-green-400">● </span>
              <span className="text-gray-400">200 OK</span>
              <span className="text-neon-cyan/60 ml-2">12ms</span>
            </motion.div>

            <motion.div
              className="absolute -top-3 -right-3 glass glow-border rounded-xl px-4 py-2.5 font-mono text-xs"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <span className="text-neon-cyan">⚡</span>
              <span className="text-gray-400 ml-2">99.9% uptime</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
