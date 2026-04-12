"use client";

import { ElementType, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function RevealText({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealTextProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={inView ? { clipPath: "inset(0 0 0% 0)" } : { clipPath: "inset(0 0 100% 0)" }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
