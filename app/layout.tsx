import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Inter — primary font, optimized by Next.js (no runtime CDN request)
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// JetBrains Mono for code / monospace elements
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Raghavendra | Software Developer",
  description:
    "Portfolio of M. Raghavendra — B.Tech IT student at VJIT, Hyderabad. Building real-world Android, IoT, and open-source projects. GSSoC '25 Campus Ambassador.",
  keywords: [
    "M. Raghavendra",
    "Raghavendra",
    "VJIT",
    "Software Developer",
    "Android Developer",
    "Java Developer",
    "Open Source",
    "GSSoC",
    "Hyderabad",
    "Portfolio",
  ],
  authors: [{ name: "M. Raghavendra" }],
  creator: "M. Raghavendra",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "M. Raghavendra | Software Developer",
    description:
      "B.Tech IT student and software developer building Android, IoT, and open-source projects.",
    siteName: "M. Raghavendra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Raghavendra | Software Developer",
    description: "Portfolio of M. Raghavendra — Software Developer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
