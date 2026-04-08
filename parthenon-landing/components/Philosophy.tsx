"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "./AnimateOnScroll";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

interface PillarCardProps {
  pillar: { title: string; subtitle: string; body: string; icon: string };
  delay: number;
}

function PillarCard({ pillar, delay }: PillarCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="relative">
      {/* Animated left border accent */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold origin-top"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: delay + 0.2 }}
        style={{ transformOrigin: "top" }}
      />
      <div className="flex flex-col h-full gap-6 pl-6">
        <div>
          <span className="text-gold text-sm mb-4 block opacity-50">{pillar.icon}</span>
          <h3 className="font-serif text-cream text-2xl font-light mb-1">{pillar.title}</h3>
          <p className="font-sans text-xs tracking-widest uppercase text-sandstone/70">
            {pillar.subtitle}
          </p>
        </div>
        <div className="w-8 h-px bg-gold/30" />
        <p className="font-sans text-sm text-cream/55 leading-7">{pillar.body}</p>
      </div>
    </div>
  );
}

const pillars = [
  {
    title: "The Struggle",
    subtitle: "Embrace what is hard.",
    body:
      "Sisyphus chose his boulder. So do you. Every session is a deliberate act of becoming -- not a transaction with the body, but a conversation with the self. We built a space where that conversation can happen without distraction.",
    icon: "◆",
  },
  {
    title: "Self-Made",
    subtitle: "No one can do it for you.",
    body:
      "Results are earned. We provide the tools, the instruction, the space. The work is yours. Parthenon is built for people who understand this -- who want a premium environment that respects their effort and their intelligence.",
    icon: "◇",
  },
  {
    title: "Community",
    subtitle: "You are never alone in the climb.",
    body:
      "The best athletic clubs in the world are built on belonging. Not tribe, not cult -- belonging. Members who hold standards, share progress, and push each other forward simply by showing up. This is what we are building.",
    icon: "○",
  },
];

export default function Philosophy() {
  return (
    <section className="relative bg-charcoal grain-overlay py-28 lg:py-40 overflow-hidden">
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 30%, #C4A882 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <AnimateOnScroll className="mb-20 max-w-2xl">
          <span className="font-sans text-xs tracking-[0.35em] text-gold uppercase mb-4 block">
            Our Philosophy
          </span>
          <h2
            className="font-serif text-cream font-light"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            A philosophy,
            <br />
            <em className="font-light italic text-sandstone">not just a gym.</em>
          </h2>
        </AnimateOnScroll>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
          {pillars.map((pillar, i) => (
            <AnimateOnScroll key={pillar.title} delay={i * 0.15} className="bg-charcoal p-10 lg:p-14">
              <PillarCard pillar={pillar} delay={i * 0.15} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Large quote */}
        <AnimateOnScroll className="mt-24 max-w-3xl mx-auto text-center">
          <span className="text-gold text-4xl font-serif leading-none select-none">&ldquo;</span>
          <blockquote
            className="font-serif text-cream font-light italic mt-2"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", lineHeight: 1.3, letterSpacing: "-0.01em" }}
          >
            You are self-made.
            <br />
            We ensure you&apos;re never alone in the climb.
          </blockquote>
          <div className="w-12 h-px bg-gold mx-auto mt-8" />
          <p className="font-sans text-xs tracking-widest uppercase text-cream/30 mt-6">
            The Parthenon Doctrine
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
