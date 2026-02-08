import type { Metadata } from "next";

import { Header } from "@/components/Header";

import "./globals.css";
import Script from "next/dist/client/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://se7eninc.com"),
  title: {
    default: "SE7EN INC.",
    template: "%s | SE7EN INC.",
  },
  description:
    "SE7EN INC. exists to establish order, permanence, and authority over ideas that demand time, structure, and disciplined execution. Holding Corporation for World-Changing Ideas.",
  applicationName: "SE7EN INC.",
  keywords: [
    "SE7EN INC.",
    "holding corporation",
    "governance framework",
    "institutional permanence",
    "intellectual property",
    "long-cycle execution",
    "authority",
    "systems",
  ],
  authors: [{ name: "SE7EN INC." }],
  creator: "SE7EN INC.",
  publisher: "SE7EN INC.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "SE7EN INC.",
    description:
      "SE7EN INC. is a holding corporation and governance framework designed to incubate, protect, and mature high-impact ideas across long time horizons.",
    type: "website",
    siteName: "SE7EN INC.",
    url: "https://se7eninc.com",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SE7EN INC.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SE7EN INC.",
    description:
      "SE7EN INC. exists to establish order, permanence, and authority over ideas that demand time, structure, and disciplined execution.",
    images: ["/og.png"],
  },
  themeColor: "#0f0d0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SE7EN INC.",
    url: "https://se7eninc.com",
    logo: "https://se7eninc.com/logo/se7eninc.png",
    description:
      "SE7EN INC. exists to establish order, permanence, and authority over ideas that demand time, structure, and disciplined execution.",
  };

  return (
    <html lang="en" className="bg-obsidian">
      <body className="font-body text-marble antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="relative z-10">{children}</main>
        <Script src="https://now-hiring-eta.vercel.app/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
