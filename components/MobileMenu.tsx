"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { NAV_LINKS } from "@/lib/constants";

type MobileMenuProps = {
  activeId: string;
};

export function MobileMenu({ activeId }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalRootOverflow = document.documentElement.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalRootOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="group inline-flex h-11 w-11 items-center justify-center rounded-md border border-stone/40 text-marble"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Toggle mobile menu"
        ref={closeBtnRef}
      >
        <span className="sr-only">Open menu</span>
        <span className="relative h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-px w-full bg-current transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] h-px w-full bg-current transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? { opacity: 0, height: 0 } : { height: 0 }}
            animate={reduceMotion ? { opacity: 1, height: "calc(100svh - 5rem)" } : { height: "calc(100svh - 5rem)" }}
            exit={reduceMotion ? { opacity: 0, height: 0 } : { height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="menu-marble fixed inset-x-0 top-20 z-40 overflow-hidden border-b border-stone/30"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpen(false)}
          >
            <nav
              className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center gap-6 px-8 pb-14 pt-6"
              onClick={(event) => event.stopPropagation()}
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`border-b pb-3 font-display text-2xl uppercase tracking-[0.16em] transition-colors ${
                      isActive
                        ? "border-[rgba(193,160,88,0.7)] text-marble"
                        : "border-stone/25 text-muted hover:text-marble"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
