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
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(13, 56, 51, 0.9)" : "rgba(13, 56, 51, 0.55)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderBottom: "1px solid rgba(242, 247, 242, 0.14)",
        boxShadow: scrolled ? "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 1px 10px rgba(0, 0, 0, 0.2)" : "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between gap-4 h-14">
          <a href="#" className="text-[16px] font-bold tracking-[-0.02em] shrink-0" style={{ color: "#f2f7f2" }}>
            Omarify<span style={{ color: "#91e564" }}>.</span>
          </a>

          <div
            className="flex items-center gap-0.5 sm:gap-1 rounded-full p-1 overflow-x-auto no-scrollbar"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(242, 247, 242, 0.12)",
            }}
          >
            {navLinks.map((link) => {
              const isActive = link.href === "#" ? activeSection === "" : activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[12px] font-medium whitespace-nowrap px-3 sm:px-4 py-1.5 rounded-full transition-all duration-300"
                  style={{
                    color: isActive ? "#91e564" : "rgba(242, 247, 242, 0.75)",
                    background: isActive ? "rgba(145, 229, 100, 0.14)" : "transparent",
                  }}
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
