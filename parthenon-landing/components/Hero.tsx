"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
import Image from "next/image";
import Logo from "./Logo";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const scrollToJoin = () => {
    const el = document.querySelector("#join");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full animate-ken-burns">
          <Image
            src="/images/welcome-desk.png"
            alt="Parthenon Athletic Club welcome desk"
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
        </div>
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/20" />
        {/* Warm tint overlay */}
        <div className="absolute inset-0 mix-blend-multiply opacity-20" style={{ background: "radial-gradient(ellipse at 30% 70%, #5C3D2E 0%, transparent 70%)" }} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
        style={{ y, translateY: "-3rem" }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-3"
        >
          {/* Logo */}
          <motion.div variants={item}>
            <Logo variant="light" size="lg" />
          </motion.div>

          {/* Thin divider */}
          <motion.div variants={item} className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-gold/40" />
            <span className="font-sans text-xs tracking-[0.3em] text-cream/50 uppercase">Est. 2026</span>
            <div className="flex-1 h-px bg-gold/40" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-serif font-light text-cream"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            Utah County&apos;s Premier
            <br />
            <em className="font-light text-sandstone-light" style={{ fontStyle: "italic" }}>
              Athletic &amp; Wellness Club
            </em>
          </motion.h1>


          {/* CTA */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToJoin} className="btn-primary">
              Reserve Your Founding Membership
            </button>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-sans text-xs tracking-widest uppercase text-cream/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent animate-scroll-bounce" />
      </div>
    </section>
  );
}
