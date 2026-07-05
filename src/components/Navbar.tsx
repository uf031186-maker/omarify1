"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Templates", href: "#templates" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const sectionIds = ["templates", "how-it-works", "faq", "contact"];

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
        <div className="flex items-center justify-center gap-6 sm:gap-12 h-12 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const isActive = link.href === "#" ? activeSection === "" : activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] font-normal whitespace-nowrap transition-colors duration-300 hover:!text-[#f2f7f2]"
                style={{ color: isActive ? "#91e564" : "rgba(242, 247, 242, 0.8)" }}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
