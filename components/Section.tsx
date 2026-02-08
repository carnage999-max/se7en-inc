"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className="scroll-mt-28 px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="font-display max-w-4xl text-3xl leading-tight text-marble sm:text-4xl">{title}</h2>
        <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-muted sm:text-lg">{children}</div>
      </div>
    </motion.section>
  );
}
