import { VENTURES } from "@/lib/constants";

export function VenturesGrid() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {VENTURES.map((venture) => (
        <article key={venture.name} className="stone-card rounded-2xl p-6 sm:p-7">
          <h3 className="font-display text-xl text-marble">{venture.name}</h3>
          <div className="mt-5 space-y-2 text-sm uppercase tracking-[0.12em] text-[rgba(236,230,220,0.74)]">
            <p>Status: {venture.status}</p>
            <p>Category: {venture.category}</p>
            <p>Focus: {venture.focus}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
