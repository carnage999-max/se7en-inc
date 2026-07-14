import type { Metadata } from "next";

import { Header } from "@/components/Header";

import "./globals.css";
import Script from "next/dist/client/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://se7eninc.com"),
  manifest: "/manifest.webmanifest",
  title: {
    default: "SE7EN EQUITY HOLDINGS INC",
    template: "%s | SE7EN EQUITY HOLDINGS INC",
  },
  description:
    "SE7EN exists because we believe we are called to be God's hands and feet on Earth, solving real problems through innovation, stewardship, and disciplined execution.",
  applicationName: "SE7EN EQUITY HOLDINGS INC",
  keywords: [
    "SE7EN EQUITY HOLDINGS INC",
    "holding corporation",
    "governance framework",
    "institutional permanence",
    "intellectual property",
    "long-cycle execution",
    "authority",
    "systems",
  ],
  authors: [{ name: "SE7EN EQUITY HOLDINGS INC" }],
  creator: "SE7EN EQUITY HOLDINGS INC",
  publisher: "SE7EN EQUITY HOLDINGS INC.",
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
    title: "SE7EN EQUITY HOLDINGS INC.",
    description:
      "SE7EN exists because we believe we are called to be God's hands and feet on Earth, solving real problems through innovation, stewardship, and disciplined execution.",
    type: "website",
    siteName: "SE7EN EQUITY HOLDINGS INC.",
    url: "https://se7eninc.com",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SE7EN EQUITY HOLDINGS INC.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SE7EN EQUITY HOLDINGS INC.",
    description:
      "SE7EN exists because we believe we are called to be God's hands and feet on Earth, solving real problems through innovation, stewardship, and disciplined execution.",
    images: ["/og.png"],
  },
  themeColor: "#0f0d0b",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SE7EN EQUITY HOLDINGS INC.",
    url: "https://se7eninc.com",
    logo: "https://se7eninc.com/logo/se7eninc.png",
    description:
      "SE7EN exists because we believe we are called to be God's hands and feet on Earth, solving real problems through innovation, stewardship, and disciplined execution.",
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
