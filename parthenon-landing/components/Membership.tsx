"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "./AnimateOnScroll";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const included = [
  "Expert coaching & programming",
  "All group fitness classes (50+/week)",
  "Full recovery suite access",
  "Coworking lounge",
  "24/7 facility access",
  "Golf simulation lounge",
  "Towel service",
  "Guest passes (2/month)",
];

const tiers = [
  { label: "Primary Adult", price: "$250", note: "/ month" },
  { label: "Adult #2", price: "$125", note: "/ month" },
  { label: "Adult #3+", price: "$100", note: "/ month" },
  { label: "Junior (under 18)", price: "$50", note: "/ month" },
  { label: "Childcare Add-On", price: "$50", note: "/ month" },
  { label: "Student", price: "$187.50", note: "/ month" },
  { label: "Military", price: "$200", note: "/ month" },
];

function PriceReveal() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="mb-6">
      <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-4">
        Primary Membership
      </p>
      <div className="flex items-baseline gap-2">
        <div className="relative overflow-hidden" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", lineHeight: 1 }}>
          <motion.span
            className="font-serif text-cream font-light block"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={inView ? { clipPath: "inset(0 0 0% 0)" } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          >
            $250
          </motion.span>
          {/* Shimmer sweep overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 60%)",
            }}
            initial={{ x: "-100%" }}
            animate={inView ? { x: "100%" } : { x: "-100%" }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.85 }}
          />
        </div>
        <motion.span
          className="font-sans text-cream/50 text-sm tracking-wide"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.6 }}
        >
          / month
        </motion.span>
      </div>
      <motion.p
        className="font-sans text-sm text-sandstone/80 mt-2 tracking-wide"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.7 }}
      >
        No upsells on the core experience.
      </motion.p>
    </div>
  );
}

export default function Membership() {
  const scrollToJoin = () => {
    const el = document.querySelector("#join");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="membership" className="relative bg-charcoal grain-overlay py-28 lg:py-40 overflow-hidden">
      {/* Decorative */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 80%, #B8975A 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimateOnScroll className="mb-20">
          <span className="font-sans text-xs tracking-[0.35em] text-gold uppercase mb-4 block">
            Membership
          </span>
          <h2
            className="font-serif text-cream font-light"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            Simple pricing.
            <br />
            <em className="font-light italic text-sandstone">Everything included.</em>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Hero pricing + included */}
          <div>
            <AnimateOnScroll>
              <div className="border border-gold/20 p-10 lg:p-12 relative mb-8">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold -translate-x-2 -translate-y-2" />

                <PriceReveal />

                <div className="w-full h-px bg-gold/15 mb-8" />

                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-cream/40 mb-5">
                    What&apos;s included
                  </p>
                  <ul className="grid grid-cols-1 gap-3">
                    {included.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="text-gold text-xs flex-shrink-0">✦</span>
                        <span className="font-sans text-sm text-cream/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <button onClick={scrollToJoin} className="btn-primary w-full text-center">
                Reserve Your Founding Membership
              </button>
            </AnimateOnScroll>
          </div>

          {/* Right: Family tiers */}
          <div>
            <AnimateOnScroll>
              <p className="font-sans text-xs tracking-widest uppercase text-cream/40 mb-6">
                Family & additional rates
              </p>
              <div className="flex flex-col gap-px bg-gold/10">
                {tiers.map((tier, i) => (
                  <div
                    key={tier.label}
                    className={`flex items-center justify-between px-7 py-5 ${
                      i === 0 ? "bg-gold/10" : "bg-charcoal"
                    } group hover:bg-gold/5 transition-colors duration-300`}
                  >
                    <span className="font-sans text-sm text-cream/70 group-hover:text-cream/90 transition-colors">
                      {tier.label}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-cream text-xl font-light">{tier.price}</span>
                      <span className="font-sans text-cream/40 text-xs">{tier.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15} className="mt-10">
              <div className="border-l-2 border-gold/30 pl-6">
                <p className="font-sans text-sm text-cream/50 leading-7">
                  Founding members receive priority access, locked-in rates, and recognition as Parthenon&apos;s
                  original 500. Membership cap: 2,500 total.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
