import { Contact } from "@/components/Contact";
import { Divider } from "@/components/Divider";
import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PillarsTeaser } from "@/components/PillarsTeaser";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />

      <Section id="about" title="About SE7EN">
        <div>
          <h3 className="font-display text-2xl text-marble">What SE7EN Is</h3>
          <p className="mt-2">
            SE7EN INC. is a holding corporation and governance framework designed to incubate, protect, and mature
            high-impact ideas across long time horizons.
          </p>
          <p className="mt-4">
            It is built for initiatives that cannot survive short cycles, superficial execution, or trend-driven
            decision making.
          </p>
        </div>
        <div className="stone-card overflow-hidden rounded-2xl">
          <Image
            src="/images/se7en-logo-on-sky-scraper.png"
            alt="SE7EN INC. logo on a sky scraper"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-display text-2xl text-marble">What SE7EN Is Not</h3>
          <p className="mt-2">
            SE7EN INC. is not a startup studio, not a marketing vehicle, and not a rapid-iteration factory. It does not
            chase attention, virality, or speculative hype.
          </p>
        </div>
        <div>
          <h3 className="font-display text-2xl text-marble">Why a Holding Corporation</h3>
          <p className="mt-2">
            A holding structure enables continuity. It allows ideas to be governed, capitalized, and executed without
            forcing premature exposure or dilution.
          </p>
          <p className="mt-4">SE7EN INC. prioritizes durability over speed and structure over noise.</p>
        </div>
        <div>
          <h3 className="font-display text-2xl text-marble">Long-Term Vision</h3>
          <p className="mt-2">
            To build systems, ventures, and intellectual property that outlast cycles, platforms, and generations—
            anchored in governance, clarity, and completion.
          </p>
        </div>
      </Section>

      <Divider />

      <Section id="seven" title="The Power of Seven">
        <PillarsTeaser />
        <div className="mt-10 rounded-2xl border border-stone/35 bg-[rgba(12,11,9,0.6)] p-6 sm:p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-[rgba(193,160,88,0.8)]">Genesis 2:2–3 (ESV)</p>
          <p className="mt-4 text-base leading-8 text-muted italic">
            “And on the seventh day God finished His work that He had done, and He rested on the seventh day from all his work that He had done. So God blessed the seventh day and made it holy, because on it God rested from all his work that He had done in creation.”
          </p>
        </div>
      </Section>

      <Divider />

      <Section id="ip" title="IP & Innovation">
        <div>
          <h3 className="font-display text-2xl text-marble">IP Philosophy</h3>
          <p className="mt-2">
            Intellectual property is treated as structure, not marketing. Protection is established before exposure.
            Control precedes scale.
          </p>
        </div>
        <div className="stone-card overflow-hidden rounded-2xl">
          <Image
            src="/images/se7en-gold-building.png"
            alt="SE7EN INC. gold building"
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-display text-2xl text-marble">Defensive Patent Strategy</h3>
          <p className="mt-2">
            SE7EN INC. prioritizes core primitives, interfaces, and enforceable claims. Noise filings and speculative
            disclosures are avoided.
          </p>
        </div>
        <div>
          <h3 className="font-display text-2xl text-marble">Long-Cycle Execution</h3>
          <p className="mt-2">
            Innovation follows a governed sequence: thesis → validation → system design → controlled deployment.
          </p>
        </div>
      </Section>

      <Divider />

      <Section id="philosophy" title="Philosophy">
        <div>
          <h3 className="font-display text-2xl text-marble">Founding Principles</h3>
          <p className="mt-2">SE7EN INC. was founded on three basic principles.</p>
          <div className="mt-4 space-y-4">
            <div>
              <span className="inline-flex items-center rounded-sm bg-gradient-to-r from-[rgba(141,106,47,0.9)] via-[rgba(193,160,88,0.9)] to-[rgba(224,192,122,0.9)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#14110f]">
                <em className="font-display font-bold not-italic">Discover</em>
              </span>
              <p className="mt-3">
                We search for problems and find innovative ways to fix them.
              </p>
            </div>
            <div>
              <span className="inline-flex items-center rounded-sm bg-gradient-to-r from-[rgba(141,106,47,0.9)] via-[rgba(193,160,88,0.9)] to-[rgba(224,192,122,0.9)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#14110f]">
                <em className="font-display font-bold not-italic">Disrupt</em>
              </span>
              <p className="mt-3">
                We don’t follow the old ways of conducting business. We question everything. Our goal is to completely
                disrupt entire platforms.
              </p>
            </div>
            <div>
              <span className="inline-flex items-center rounded-sm bg-gradient-to-r from-[rgba(141,106,47,0.9)] via-[rgba(193,160,88,0.9)] to-[rgba(224,192,122,0.9)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#14110f]">
                <em className="font-display font-bold not-italic">Dominate</em>
              </span>
              <p className="mt-3">
                We believe in the philosophy of the legendary Jack Welch. Be #1 or #2 or get out. We are not interested
                in incremental improvement. If we enter a space, we intend to own it.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl text-marble">Order Over Chaos</h3>
          <p className="mt-2">Sustainable impact requires structure. Improvisation without governance decays.</p>
        </div>
        <div>
          <h3 className="font-display text-2xl text-marble">Systems Over Products</h3>
          <p className="mt-2">Products expire. Systems compound.</p>
        </div>
        <div>
          <h3 className="font-display text-2xl text-marble">Completion Over Iteration</h3>
          <p className="mt-2">Iteration is a tool—not a virtue. Completion is the objective.</p>
        </div>
      </Section>

      <Divider />

      <Section id="contact" title="Contact">
        <Contact />
      </Section>

      <Footer />
    </>
  );
}
