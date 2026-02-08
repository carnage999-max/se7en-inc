export type NavLink = {
  id: "home" | "about" | "seven" | "ventures" | "ip" | "philosophy" | "contact";
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About SE7EN" },
  { id: "seven", label: "The Power of Seven" },
  { id: "ip", label: "IP & Innovation" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" },
];

export const VENTURES = [
  {
    name: "Venture Alpha",
    status: "Incubation",
    category: "Infrastructure",
    focus: "Foundational systems with long execution horizons",
  },
  {
    name: "Venture Beta",
    status: "Research",
    category: "Applied Science",
    focus: "Validation, modeling, and feasibility pathways",
  },
  {
    name: "Venture Gamma",
    status: "Build",
    category: "Software",
    focus: "Internal and operational tooling",
  },
  {
    name: "Venture Delta",
    status: "Concept",
    category: "Industrial / Energy",
    focus: "Foundational feasibility and systems research",
  },
] as const;

export const SEVEN_DOCTRINE = [
  {
    title: "Creation & Completion",
    body: "Seven represents completion with boundary. The seven days of creation establish order, followed by rest—signaling that structure precedes expansion.",
  },
  {
    title: "Covenant & Forgiveness",
    body: "The principle of seventy times seven reflects endurance, restraint, and long-term responsibility rather than transactional judgment.",
  },
  {
    title: "Judgment & Authority",
    body: "Seals, trumpets, and bowls represent layered authority—structured escalation governed by order, not impulse.",
  },
  {
    title: "Wisdom & Divine Order",
    body: "Seven recurs as a symbol of alignment: wisdom applied through structure, sequence, and restraint.",
  },
] as const;
