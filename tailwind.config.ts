import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "var(--obsidian)",
        marble: "var(--marble)",
        stone: "var(--stone)",
        muted: "var(--muted)",
      },
      backgroundImage: {
        gold: "linear-gradient(120deg, var(--gold-1), var(--gold-2), var(--gold-3))",
      },
      boxShadow: {
        "gold-soft": "0 0 18px rgba(193, 160, 88, 0.26)",
      },
      fontFamily: {
        display: ["Cinzel", "Trajan Pro", "Times New Roman", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
