"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "./AnimateOnScroll";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const founders = [
  {
    name: "Adam Manwaring",
    role: "Operations & Facility Development",
    bio: "Adam leads facility development, operational systems, and the member experience from the ground up. With a background in athletic facility management and an obsessive attention to the physical environment, Adam is responsible for ensuring that every square foot of Parthenon reflects the standards the brand demands.",
    image: "/images/adam.png",
  },
  {
    name: "Aaron Ranger",
    role: "Finance & Investor Relations",
    bio: "Aaron brings deep expertise in financial structuring, capital formation, and investor relations. He is responsible for the business model, financial projections, and the investor relationships that will bring Parthenon to life. His background spans private equity and operating roles across consumer and hospitality businesses.",
    image: "/images/aaron.png",
  },
];

function FounderCards() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {founders.map((founder, i) => (
        <motion.div
          key={founder.name}
          initial={{ opacity: 0, x: i === 0 ? -60 : 60 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: i === 0 ? -60 : 60 }}
          transition={{ duration: 0.85, ease: EASE, delay: i * 0.12 }}
        >
          <div className="bg-cream/80 p-10 lg:p-12 border border-sandstone/20 group hover:border-gold/30 transition-colors duration-400">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-20 h-20 overflow-hidden bg-charcoal">
                <Image
                  src={founder.image}
                  alt={`${founder.name} photo`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>
              <div>
                <h3 className="font-serif text-charcoal text-2xl font-light mb-1">{founder.name}</h3>
                <p className="font-sans text-xs tracking-widest uppercase text-gold/80">{founder.role}</p>
              </div>
            </div>
            <div className="w-8 h-px bg-gold/30 mb-6" />
            <p className="font-sans text-sm text-charcoal/60 leading-7">{founder.bio}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Founders() {
  return (
    <section id="about" className="relative bg-walnut/8 grain-overlay py-28 lg:py-40" style={{ background: "#EAE2D4" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimateOnScroll className="mb-20 max-w-xl">
          <span className="font-sans text-xs tracking-[0.35em] text-gold uppercase mb-4 block">
            The Founders
          </span>
          <h2
            className="font-serif text-charcoal font-light"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            Built by people
            <br />
            <em className="italic text-walnut">who actually train.</em>
          </h2>
        </AnimateOnScroll>

        <FounderCards />

        {/* Closing note */}
        <AnimateOnScroll className="mt-16 max-w-2xl">
          <div className="border-l-2 border-gold/30 pl-8">
            <p className="font-sans text-sm text-charcoal/55 leading-7">
              Luxury is not decoration. Luxury is reliability, calm, standards, and care. We have built
              businesses. We have trained in great facilities and mediocre ones. We know exactly what is
              missing in Utah County, and we intend to build it.
            </p>
            <p className="font-sans text-xs text-charcoal/40 mt-4 tracking-widest uppercase">
              The Founders Doctrine
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
