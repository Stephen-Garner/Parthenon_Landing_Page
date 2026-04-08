import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parthenon Athletic Club | Utah County's Premier Fitness Club",
  description:
    "A luxury athletic and wellness club launching in Provo/Orem, Utah in September 2026. Premium equipment, recovery suite, group fitness, coworking, and childcare. $250/mo all-inclusive. Reserve your founding membership.",
  openGraph: {
    title: "Parthenon Athletic Club",
    description: "Embrace the struggle. Become self-made. Climb together.",
    siteName: "Parthenon Athletic Club",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
