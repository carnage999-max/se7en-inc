import { SEVEN_DOCTRINE } from "@/lib/constants";

export function PillarsTeaser() {
  return (
    <div className="mt-8 space-y-5">
      {SEVEN_DOCTRINE.map((pillar) => (
        <article key={pillar.title} className="stone-card rounded-2xl p-6 sm:p-7">
          <h3 className="font-display text-xl text-marble">{pillar.title}</h3>
          <p className="mt-3 text-base leading-8 text-muted">{pillar.body}</p>
        </article>
      ))}
      <article className="rounded-2xl border border-[rgba(193,160,88,0.38)] bg-[rgba(193,160,88,0.08)] p-6 sm:p-7">
        <h3 className="font-display text-xl text-marble">Why SE7EN INC. Uses This Framework</h3>
        <p className="mt-3 text-base leading-8 text-muted">
          SE7EN INC. adopts the framework of seven as an institutional doctrine: order over chaos, systems over
          products, completion over endless iteration.
        </p>
      </article>
    </div>
  );
}
