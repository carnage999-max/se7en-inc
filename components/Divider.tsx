"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function Divider() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <div className="px-6 sm:px-8 lg:px-10" aria-hidden="true">
      <div className="mx-auto w-full max-w-7xl py-3">
        <motion.div style={reduceMotion ? undefined : { x }} className="gold-divider" />
      </div>
    </div>
  );
}
