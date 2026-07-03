"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeLines = [
  { text: "from fastapi import FastAPI", delay: 0 },
  { text: "from sqlalchemy import create_engine", delay: 0 },
  { text: "", delay: 0 },
  { text: "# Initialize production app", delay: 0 },
  { text: 'app = FastAPI(title="Production API")', delay: 0 },
  { text: "", delay: 0 },
  { text: '@app.get("/api/v1/health")', delay: 0 },
  { text: "async def health_check():", delay: 0 },
  { text: '    return {"status": "healthy"}', delay: 0 },
  { text: "", delay: 0 },
  { text: '@app.post("/api/v1/users")', delay: 0 },
  { text: "async def create_user(data: UserSchema):", delay: 0 },
  { text: "    user = await UserService.create(data)", delay: 0 },
  { text: "    return user", delay: 0 },
];

function highlightCode(text: string) {
  if (!text) return <>&nbsp;</>;

  const keywords = ["from", "import", "async", "def", "return", "await"];
  const decorators = ["@app"];
  const builtins = ["FastAPI", "create_engine", "UserSchema", "UserService"];

  if (text.trimStart().startsWith("#"))
    return <span className="text-[#6B6870]">{text}</span>;

  const parts = text.split(/("[^"]*"|'[^']*'|\s+)/g).filter(Boolean);
  return parts.map((token, i) => {
    const trimmed = token.trim();
    if (!trimmed) return <span key={i}>{token}</span>;
    if (keywords.includes(trimmed))
      return <span key={i} className="text-accent-purple">{token}</span>;
    if (trimmed.startsWith("@"))
      return <span key={i} className="text-accent-blue">{token}</span>;
    if (builtins.includes(trimmed.split(".")[0]) || builtins.includes(trimmed))
      return <span key={i} className="text-brand-light">{token}</span>;
    if (trimmed.startsWith('"') || trimmed.startsWith("'"))
      return <span key={i} className="text-[#30d158]">{token}</span>;
    if (["fastapi", "sqlalchemy"].includes(trimmed))
      return <span key={i} className="text-brand-light">{token}</span>;
    if (trimmed === "=" || trimmed === ":")
      return <span key={i} className="text-brand-light">{token}</span>;
    return <span key={i} className="text-[#F0EDE6]">{token}</span>;
  });
}

function CodeTyping() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const resetAndRestart = useCallback(() => {
    setDisplayedLines([]);
    setCurrentLine(0);
    setCurrentChar(0);
    setIsTyping(true);
  }, []);

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(resetAndRestart, 4000);
      return () => clearTimeout(timeout);
    }

    if (currentLine >= codeLines.length) {
      setIsTyping(false);
      return;
    }

    const line = codeLines[currentLine].text;

    if (line === "") {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, ""]);
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 100);
      return () => clearTimeout(timeout);
    }

    if (currentChar <= line.length) {
      const speed = 25 + Math.random() * 35;
      const timeout = setTimeout(() => {
        if (currentChar === line.length) {
          setDisplayedLines(prev => [...prev, line]);
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        } else {
          setCurrentChar(prev => prev + 1);
        }
      }, currentChar === 0 ? 150 : speed);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, isTyping, resetAndRestart]);

  const typingLine = currentLine < codeLines.length ? codeLines[currentLine].text : "";

  return (
    <div className="p-6 font-mono text-[13px] leading-[1.8] relative min-h-[280px]">
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand/[0.02] to-transparent pointer-events-none" />
      {displayedLines.map((line, i) => (
        <div key={i} className={line === "" ? "h-[1.8em]" : ""}>
          {line ? highlightCode(line) : null}
        </div>
      ))}
      {isTyping && currentLine < codeLines.length && typingLine !== "" && (
        <div>
          {highlightCode(typingLine.slice(0, currentChar))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="text-brand-light"
          >
            |
          </motion.span>
        </div>
      )}
    </div>
  );
}

const roles = [
  "Learning Python",
  "Building Projects",
  "Exploring AI",
  "Open to Opportunities",
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
    <section className="relative pb-10 pt-24 sm:min-h-svh sm:pb-0 sm:pt-0 flex items-start sm:items-center overflow-hidden">
      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg-primary)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(249,124,17,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(255,178,94,0.07),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(255,142,60,0.06),transparent)]" />

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full sm:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass glow-border text-xs mb-8 tracking-wider uppercase"
              style={{ color: "var(--text-accent)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              Open to opportunities
            </motion.div>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] mb-7 tracking-[-0.03em]" style={{ color: "var(--text-primary)" }}>
              {["Hi,", "I'm", "Umar", "—"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}{" "}
              <br className="sm:hidden" />
              {["Aspiring", "Python", "&", "AI", "Developer"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.15 }}
                  className="inline-block mr-[0.3em] text-transparent bg-clip-text animate-gradient-shift"
                  style={{ backgroundImage: "linear-gradient(90deg, #FF8E3C, #F97C11, #FFB25E, #FFA94D, #FF8E3C)", backgroundSize: "200% 100%" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <p className="text-[15px] sm:text-lg mb-8 max-w-lg leading-[1.75] font-normal" style={{ color: "var(--text-muted)" }}>
              I&apos;m learning Python, AI, and backend development. Give me a chance — if my work isn&apos;t good enough, you don&apos;t have to pay me.
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

          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block relative">
            <div className="rounded-2xl gradient-border glow-md overflow-hidden" style={{ background: "var(--code-bg)" }}>
              <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(26,29,43,0.4)" }}>
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-4 text-xs font-mono tracking-wide" style={{ color: "var(--text-muted)" }}>~/backend/main.py</span>
              </div>
              <CodeTyping />
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

      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32" style={{ background: "linear-gradient(to top, var(--bg-primary), transparent)" }} />
    </section>
  );
}
