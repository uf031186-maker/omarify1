"use client";

export default function Footer() {
  return (
    <footer className="theme-light relative py-8 transition-colors duration-300" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Umar. Premium templates for small businesses and creators who&apos;d rather work smarter.
          </div>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <a href="#templates" className="hover:opacity-80 transition-opacity">Shop</a>
            <a href="#about-me" className="hover:opacity-80 transition-opacity">About</a>
            <a href="#faq" className="hover:opacity-80 transition-opacity">FAQ</a>
            <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
