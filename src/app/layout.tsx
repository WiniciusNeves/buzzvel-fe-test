import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../fonts/inter-latin-wght.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const jakarta = localFont({
  src: "../fonts/plus-jakarta-sans-latin-wght.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Luma — Practical courses that move you forward",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
  applicationName: "Luma",
  openGraph: {
    type: "website",
    siteName: "Luma",
    title: "Luma — Practical courses that move you forward",
    description: "Short, practical courses designed around skills you can put to work immediately.",
    images: [{ url: "/images/hero-learner.jpg", alt: "Learner smiling at her laptop" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#f9f8f3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only rounded-lg bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
