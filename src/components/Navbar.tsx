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

const sectionIds = ["about", "skills", "projects", "services", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_10px_rgba(0,0,0,0.25)]" : ""
      }`}
      style={{
        background: "rgba(13, 56, 51, 0.92)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(242, 247, 242, 0.1)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between gap-3 h-11 sm:h-12">
          <a href="#" className="text-[15px] font-semibold tracking-[-0.01em] shrink-0" style={{ color: "var(--text-primary)" }}>
            Omarify
          </a>

          <div className="flex items-center gap-5 sm:gap-9 overflow-x-auto no-scrollbar">
            {navLinks.map((link) => {
              const isActive = link.href === "#" ? activeSection === "" : activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[12px] font-normal whitespace-nowrap transition-colors duration-300"
                  style={{ color: isActive ? "var(--text-accent)" : "var(--text-secondary)" }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
