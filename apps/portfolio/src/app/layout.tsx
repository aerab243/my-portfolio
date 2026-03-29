import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Portfolio | Développeur Full Stack",
    template: "%s | Portfolio",
  },
  description: "Portfolio créatif avec expériences 3D immersives - Développeur Full Stack spécialisé en React, Next.js, TypeScript et WebGL",
  keywords: [
    "développeur",
    "full stack",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "WebGL",
    "Three.js",
    "3D",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Développeur Full Stack" }],
  creator: "Développeur Full Stack",
  publisher: "Développeur Full Stack",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "Portfolio",
    title: "Portfolio | Développeur Full Stack",
    description: "Portfolio créatif avec expériences 3D immersives",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio - Développeur Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Développeur Full Stack",
    description: "Portfolio créatif avec expériences 3D immersives",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-black text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}
