"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedLineProps {
  width?: string;
  delay?: number;
  className?: string;
}

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function AnimatedLine({
  width = "48px",
  delay = 0,
  className = "",
}: AnimatedLineProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <span
      ref={ref}
      className={`block h-px bg-gold origin-left ${className}`}
      style={{ width }}
    >
      <motion.span
        className="block h-full bg-gold origin-left"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay }}
        style={{ transformOrigin: "left" }}
      />
    </span>
  );
}
