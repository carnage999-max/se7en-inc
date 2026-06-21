import { Contact } from "@/components/Contact";
import { Divider } from "@/components/Divider";
import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PatentAccordion } from "@/components/PatentAccordion";
import { PillarsTeaser } from "@/components/PillarsTeaser";
import { Section } from "@/components/Section";

const patentCategories = [
  {
    title: "App / Tech",
    items: [
      "Heal Link",
      "Liberty Social",
      "Work History Registry",
      "Apex Hunter",
      "Reardon AI",
      "Scene Aware",
      "EZ Post",
      "Right Jobs",
      "Company Reels",
      "Liberty Vibe",
      "Liberty Live",
      "Liberty Verify",
      "Reply IQ",
      "No Limit Flix",
      "Knowledge Vault",
      "Vendor Vault",
    ],
  },
  {
    title: "Auto",
    items: [
      "Guardian Co",
      "InstaHeat",
      "Choice Parts",
      "Clear Shift Covers",
      "Clear View Mirror",
      "The Daisy System",
      "Deca+",
      "No Dry Starts",
      "Fuel Maxx",
      "Gentle Vent",
      "Membership Auto",
      "Slip Safe",
      "Soft Alert",
      "Sun Armor Tires",
      "Hydro Spool Turbo",
      "X-Intake",
      "Invisishield Glass+",
      "Seal Guard",
      "ThermaLock",
      "Thermal Access Port",
      "360 Weld",
      "AeroStop",
      "Automind Scanner",
      "Breakshot",
      "Pull Core",
      "M1 Razor",
      "LABS",
      "Wash IQ",
      "Life Barrier",
      "Tire Master",
      "Auto Clerk",
      "FutureTech",
      "Service Writer HUB",
      "Path Alert",
      "Phantom Key",
      "Rust Blok",
    ],
  },
  {
    title: "Energy",
    items: ["Quantus-cap", "Core Volt", "Magma-Bit", "Pyra Pipe", "Quantus", "Thermal Dominion", "Perp-Power"],
  },
  {
    title: "Environment",
    items: ["Smognet", "TerraGuard", "Aurum Micro Plastics", "Aurum Mercury", "Hydrocleanse", "Aurum Flux", "Marine Guardian", "Shorelock", "Freedom Bag"],
  },
  {
    title: "Financial",
    items: ["Evergreen Fund", "AtlasBooks"],
  },
  {
    title: "Legal",
    items: ["Legal Connect", "Legal Tracker", "Benchmark Justice", "Mail Proofs", "SignaCore"],
  },
  {
    title: "Medical / Health",
    items: [
      "Aiir",
      "AntiVen Pen",
      "Autophashield",
      "Bio Clock Kernel",
      "Calm Throat",
      "Cancer Collapse",
      "Core Barrier",
      "Cradle Guardian",
      "Cryo Fresh Pod",
      "Derma Seal",
      "Dormigen",
      "Genesis Chamber",
      "Immunova Vaccine",
      "Intense Maxx",
      "Kidney Glide",
      "Kirk Collar",
      "Lacto Clear",
      "LASE",
      "Genesis One Olfactory",
      "Lecti Cure",
      "Nervana",
      "Neuro Restore",
      "Neuro Shield",
      "Oxalate Guard",
      "Poly Purge",
      "Strip Check",
      "Radiamel",
      "Recall Max",
      "Solin",
      "Stage Steady",
      "Reardon Protocol C",
      "Reardon Protocol D",
      "Ticked Off",
      "Truth Drop",
      "Vita Choice",
      "Zero Derm",
      "Neurovasc",
      "Apogenix",
      "Daily Dose",
      "Mercury Zero",
      "Panic Brake",
      "Thermostat",
      "Cycle Stable",
      "Hormone Shield",
      "Hydra Sense",
      "Keto Sense",
      "Atlas (AB)",
      "Cravex",
      "Yeast Guard",
      "ALZ Clear",
      "CFShield",
      "Attenex",
      "Snap Protein",
      "Acidown",
      "Sentra",
      "Stabilis",
      "Dawn Block",
      "Cravex Necklace",
      "Hemosense",
      "Urgenta",
      "Kid Calm",
      "Endo Core",
      "Sting Stop",
      "Gout Guard",
      "Gout Sense",
      "Metabolic Sense",
    ],
  },
  {
    title: "News",
    items: ["Maine Pulse", "Maine News Now"],
  },
  {
    title: "Pets",
    items: ["Pet Savers", "Poo Gone"],
  },
  {
    title: "Police / Fire",
    items: [
      "Custody Pulse",
      "Apex Veil",
      "Cop Stop",
      "Blue Voice",
      "Shock Stop",
      "Custody Care",
      "Daisy Door Opener",
      "Safe T Plastic",
      "Tear Safe Sheets",
      "Wall Guard-Light",
      "Justice Pay",
      "Zero Freeze Hose",
      "Reveal Core",
      "Needle Shield",
      "Strike Dry",
      "Chain Vault",
      "Vault Port",
      "FreedomTek",
      "Pulse Stop",
      "Break Guard",
      "Flood Hose",
      "Intake Flow",
      "Justice Pay-Locate",
      "ResponderSense",
      "Watchtower",
      "Command Room",
      "Pin Core",
      "Call Firewall",
      "Command Core",
      "Voice Pass",
      "Quiet Case",
      "Sector Safe",
      "Sword Lock",
      "Hydra Wall",
    ],
  },
  {
    title: "Real Estate",
    items: [
      "Duck Guard Coatings",
      "Silent Guard Paint",
      "Stable Buddy",
      "R-Board",
      "Ice Shield Roof",
      "Lumatherm",
      "FrostMat",
      "PaneShield",
      "Onespace Residential",
      "Onespace Commercial",
      "Onespace Industrial",
      "Onespace Land",
      "Antifreeze Flow",
      "R-tape",
      "Wild Shield",
    ],
  },
  {
    title: "Retail",
    items: [
      "Leak Hawk",
      "Leaf Mate",
      "Mega Grow",
      "Never Stuck Trax",
      "No Sweat",
      "PatchWorx Pavement",
      "Pest Fence",
      "SaniSpray",
      "Sleep Cool",
      "Snap Carry",
      "Surge Internal",
      "Wring Max",
      "Infiniti-D",
      "Anti-Splash",
      "BedSeal",
      "Lock Guard",
      "Cali-BondNails",
      "Fuel Trigger",
      "Halo Cut",
      "Membership Plowing",
      "Share Pour",
      "Glare Guard",
      "Choice Pizza",
      "Conservative Coffee",
      "Flex Shield",
      "Never Stuck Trax Robot Vacuum",
    ],
  },
  {
    title: "Safety",
    items: [
      "BeastBlock",
      "FireGuardGT",
      "Identifi",
      "IntelliShield Plane",
      "Invisishield Film",
      "Kid Block",
      "Never Forget Baby",
      "Rail Scout",
      "GuardianAngel AI",
      "Stability OS",
      "Scentinel",
      "Cross Shield Trailer",
      "Cross Shield Aero",
    ],
  },
  {
    title: "Security",
    items: [
      "APEX Shield",
      "APEX Alert",
      "APEX Defender",
      "APEX Drone",
      "Blackout Shield",
      "DRUG GUARD",
      "Aeroflow",
      "GateShield",
      "Drone Defender",
      "OneKey (Key Vault)",
    ],
  },
  {
    title: "Weather",
    items: ["Storm Defender", "Storm Forge", "Sure Drain", "Ice Shield", "Storm Forge-Coastal", "Storm Forge-Municipal", "Storm Forge-Wind", "Storm Forge-Hydracore"],
  },
  {
    title: "Charity",
    items: ["AlwaysHome", "Meals that Heal", "WWCW"],
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />

      <Section id="about" title="About SE7EN">
        <div className="rounded-2xl border border-stone/35 bg-[rgba(12,11,9,0.6)] p-6 sm:p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-[rgba(193,160,88,0.8)]">Mission Statement</p>
          <p className="mt-4 text-base leading-8 text-marble sm:text-lg">
            “SE7EN exists to bring order to complexity by building complete, defensible systems that endure.”
          </p>
        </div>
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
        <div className="stone-card mx-auto max-w-3xl overflow-hidden rounded-2xl">
          <Image
            src="/images/se7en-gold-building.png"
            alt="SE7EN INC. gold building"
            width={1200}
            height={800}
            className="h-auto w-full object-cover object-center"
          />
        </div>
        <div>
          <h3 className="font-display text-2xl text-marble">Defensive Patent Strategy</h3>
          <p className="mt-2">
            SE7EN INC. prioritizes core primitives, interfaces, and enforceable claims. Noise filings and speculative
            disclosures are avoided.
          </p>
        </div>
        <div className="stone-card rounded-2xl p-6 sm:p-7">
          <div className="flex flex-col gap-3 border-b border-stone/25 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[rgba(193,160,88,0.8)]">Currently in Development</p>
              <h3 className="mt-2 font-display text-2xl text-marble">Patent Portfolio Snapshot</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                A categorized view of active concepts across technology, infrastructure, health, safety, environment,
                and other long-cycle innovation tracks.
              </p>
            </div>
            <a
              href="/patents.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded border border-[rgba(193,160,88,0.5)] px-4 py-2 text-[rgba(193,160,88,0.9)] transition-colors hover:border-[rgba(224,192,122,0.8)] hover:text-[rgba(224,192,122,1)] group"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.1em]">Download List of Patents</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12m0 0 4-4m-4 4-4-4m-5 8h18" />
              </svg>
            </a>
          </div>
          <PatentAccordion categories={patentCategories} />
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
