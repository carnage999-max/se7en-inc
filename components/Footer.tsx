import Image from "next/image";

import { CurrentYear } from "@/components/CurrentYear";
import { FooterBackdrop } from "@/components/FooterBackdrop";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M13.5 9.5v-2c0-.6.4-1 1-1h2V3h-3c-2.2 0-3.5 1.5-3.5 3.7v2.8H8v3h2V21h3v-8.5h2.5l.4-3H13.5z"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M18.9 3H22l-7 8 8 10h-3.4l-6.1-7.6L7 21H3.9l7.5-8.6L3 3h3.5l5.5 6.8L18.9 3z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M12 8.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2Zm0 6.2A2.4 2.4 0 1 1 14.4 12 2.4 2.4 0 0 1 12 14.4Zm4.9-6.9a1 1 0 1 1-1 1 1 1 0 0 1 1-1ZM20.5 7.2a4.6 4.6 0 0 0-2.6-2.6C16.6 4 12 4 12 4s-4.6 0-5.9.6A4.6 4.6 0 0 0 3.5 7.2C3 8.5 3 12 3 12s0 3.5.5 4.8a4.6 4.6 0 0 0 2.6 2.6C7.4 20 12 20 12 20s4.6 0 5.9-.6a4.6 4.6 0 0 0 2.6-2.6c.5-1.3.5-4.8.5-4.8s0-3.5-.5-4.8ZM19 17.3A3 3 0 0 1 17.3 19C16.2 19.4 12 19.4 12 19.4s-4.2 0-5.3-.4A3 3 0 0 1 5 17.3C4.6 16.2 4.6 12 4.6 12s0-4.2.4-5.3A3 3 0 0 1 6.7 5C7.8 4.6 12 4.6 12 4.6s4.2 0 5.3.4A3 3 0 0 1 19 6.7c.4 1.1.4 5.3.4 5.3s0 4.2-.4 5.3Z"
        />
      </svg>
    ),
  },
  {
    label: "Liberty Social",
    href: "https://liberty.social",
    icon: (
      <Image
        src="/icon/liberty-social.png"
        alt="Liberty Social"
        width={16}
        height={16}
        className="social-icon-image h-4 w-4"
      />
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-10 pt-10 text-[11px] uppercase tracking-[0.16em] text-[rgba(236,230,220,0.62)] sm:px-8 lg:px-10">
      <FooterBackdrop />
      <div className="relative mx-auto w-full max-w-7xl border-t border-stone/20 pt-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-stone/40">
              <Image src="/logo/se7eninc.png" alt="SE7EN INC." fill sizes="40px" className="object-cover" />
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.24em] text-marble">SE7EN INC.</p>
              <p className="text-[10px] tracking-[0.2em] text-[rgba(236,230,220,0.6)]">
                Holding Corporation for World-Changing Ideas
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="social-icon inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone/40 text-[rgba(184,176,164,0.7)] transition-colors hover:text-marble"
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-stone/20 pt-6 text-[10px] tracking-[0.2em] sm:flex-row">
          <p>© <CurrentYear /> SE7EN INC. All rights reserved.</p>
        </div>
        <div className="mt-5 text-center text-xs uppercase tracking-[0.18em] text-[rgba(236,230,220,0.82)]">
          Founded May 7, 2026 By Nathan Reardon, who was 47 years old and Donald Trump was the 47th president of the
          United States.
        </div>
      </div>
    </footer>
  );
}
