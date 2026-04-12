"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Membership", href: "#membership" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-solid" : "navbar-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-24 py-4">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex-shrink-0">
            <Logo
              variant={scrolled ? "dark" : "light"}
              size="sm"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-charcoal/70 hover:text-charcoal"
                    : "text-cream/70 hover:text-cream"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#join")}
              className="btn-primary text-xs py-3 px-6"
            >
              Join
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-cream"
              } ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-cream"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-cream"
              } ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Logo variant="light" size="md" />
            <nav className="flex flex-col items-center gap-6 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="font-serif text-3xl text-cream/80 hover:text-cream transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#join")}
                className="btn-primary mt-4"
              >
                Reserve My Spot
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
