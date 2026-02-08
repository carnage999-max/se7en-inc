"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { NAV_LINKS } from "@/lib/constants";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  const ids = useMemo(() => NAV_LINKS.map((link) => link.id), []);
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone/20 bg-obsidian/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a href="#home" className="group flex items-center gap-3" aria-label="SE7EN INC. home">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-stone/40">
            <Image src="/logo/se7eninc.png" alt="SE7EN INC." fill sizes="40px" className="object-cover" />
          </div>
          <div>
            <p className="font-display text-sm tracking-[0.2em] text-marble sm:text-base sm:tracking-[0.22em]">
              SE7EN INC.
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative text-sm uppercase tracking-[0.16em] transition-colors ${
                  isActive ? "text-marble" : "text-muted hover:text-marble"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-gold transition-all ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <MobileMenu activeId={activeId} />
      </div>
    </header>
  );
}
