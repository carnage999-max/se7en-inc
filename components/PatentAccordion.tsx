"use client";

import { useState } from "react";

/**
 * An entry is a name, or a name with somewhere to go. Most of these are patents and research with
 * nothing to link to yet; the few that have shipped as products should reach them.
 */
type PatentItem = string | { name: string; href: string };

type PatentCategory = {
  title: string;
  items: PatentItem[];
};

type PatentAccordionProps = {
  categories: PatentCategory[];
};

export function PatentAccordion({ categories }: PatentAccordionProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  return (
    <div className="mt-6 space-y-3">
      {categories.map((category) => {
        const isOpen = openSections[category.title] ?? false;

        return (
          <div
            key={category.title}
            className="overflow-hidden rounded-2xl border border-stone/30 bg-[rgba(255,255,255,0.025)]"
          >
            <button
              type="button"
              onClick={() => toggleSection(category.title)}
              className="flex w-full items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-[rgba(255,255,255,0.03)] sm:px-5"
              aria-expanded={isOpen}
            >
              <div className="min-w-0 flex-1">
                <h4 className="font-display text-lg text-marble">{category.title}</h4>
              </div>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[rgba(141,106,47,0.98)] via-[rgba(193,160,88,0.98)] to-[rgba(224,192,122,0.98)] text-sm font-semibold text-[#14110f] shadow-[0_8px_18px_rgba(0,0,0,0.28)]">
                {category.items.length}
              </span>
              <svg
                className={`h-4 w-4 shrink-0 text-[rgba(193,160,88,0.88)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isOpen ? (
              <div className="border-t border-stone/20 px-4 py-4 sm:px-5">
                <ul className="grid gap-x-8 gap-y-2 text-sm leading-6 text-[rgba(236,230,220,0.82)] sm:grid-cols-2">
                  {category.items.map((item) => {
                    const name = typeof item === "string" ? item : item.name;
                    const href = typeof item === "string" ? null : item.href;
                    return (
                      <li key={name} className="flex gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(193,160,88,0.78)]"
                          aria-hidden="true"
                        />
                        {href ? (
                          <a
                            className="underline decoration-[rgba(193,160,88,0.5)] underline-offset-4 transition-colors hover:text-[rgba(236,230,220,1)] hover:decoration-[rgba(193,160,88,0.9)]"
                            href={href}
                            rel="noopener"
                            target="_blank"
                          >
                            {name}
                          </a>
                        ) : (
                          <span>{name}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
