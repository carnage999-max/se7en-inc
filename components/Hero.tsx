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
        <div className="mt-6 max-w-4xl space-y-4 text-center">
          <p className="text-base leading-8 text-[rgba(236,230,220,0.9)] sm:text-lg">
            SE7EN exists because we believe we are called to be God&apos;s hands and feet on Earth.
          </p>
          <p className="text-sm uppercase tracking-[0.16em] text-[rgba(236,230,220,0.76)] sm:text-base">
            We were not placed here merely to observe problems, but to solve them.
          </p>
          <p className="mx-auto max-w-3xl text-sm leading-8 text-[rgba(236,230,220,0.74)] sm:text-base">
            Through innovation, stewardship, and disciplined execution, we pursue solutions to some of the world&apos;s
            most significant challenges, improving lives, strengthening communities, and creating a better future for
            generations to come.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-[rgba(193,160,88,0.92)] sm:text-sm">
            We Can Do Better
          </p>
        </div>
        <div className="mt-8 w-full max-w-3xl rounded-2xl border border-stone/30 bg-[rgba(12,11,9,0.55)] px-6 py-5">
          <p className="text-base italic leading-7 text-[rgba(236,230,220,0.82)]">
            “I will give you back seven times what you lost.”
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[rgba(193,160,88,0.8)]">Joel 2:25</p>
        </div>
      </div>
    </section>
  );
}
