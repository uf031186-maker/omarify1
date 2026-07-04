"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass glow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-3 h-14 sm:h-[72px]">
          <a href="#" className="text-lg sm:text-xl font-heading font-bold tracking-[-0.02em] shrink-0" style={{ color: "var(--text-primary)" }}>
            &lt;Dev<span className="text-brand">/&gt;</span>
          </a>

          <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-[11px] sm:text-[12px] uppercase tracking-[0.1em] sm:tracking-[0.15em] font-medium hover:text-brand-light whitespace-nowrap"
                style={{ color: "var(--text-muted)" }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-outline !py-2 !px-4 sm:!py-2.5 sm:!px-7 hidden sm:inline-flex whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
