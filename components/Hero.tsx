"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { HeroBackdrop } from "@/components/HeroBackdrop";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 480], [0, 24]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-28 items-center justify-center overflow-hidden px-6 pt-20 sm:px-8 lg:px-10"
    >
      <HeroBackdrop reducedMotion={reduceMotion ?? false} />
      <motion.div
        style={reduceMotion ? undefined : { y }}
        className="hero-marble pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <h1 className="sr-only">SE7EN INC.</h1>
        <Image
          src="/logo/se7eninc.png"
          alt="SE7EN INC. logo"
          width={900}
          height={900}
          priority
          className="h-auto w-[min(82vw,620px)] drop-shadow-[0_16px_34px_rgba(0,0,0,0.58)]"
        />
        <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[rgba(193,160,88,0.9)] sm:text-sm">
          Holding Corporation for World-Changing Ideas
        </p>
        <p className="mt-6 max-w-3xl text-sm uppercase tracking-[0.2em] text-[rgba(236,230,220,0.78)] sm:text-base">
          SE7EN INC. exists to establish order, permanence, and authority over ideas that demand time, structure, and
          disciplined execution.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[rgba(236,230,220,0.68)]">
          This is not a product. This is an institution.
        </p>
      </div>
    </section>
  );
}
