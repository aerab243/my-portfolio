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

export const metadata: Metadata = {
  title: "Portfolio | Développeur Full Stack",
  description: "Portfolio créatif avec expériences 3D immersives - Développeur Full Stack spécialisé en React, Next.js et WebGL",
  keywords: ["développeur", "full stack", "portfolio", "React", "Next.js", "WebGL", "3D"],
  authors: [{ name: "Développeur Full Stack" }],
  openGraph: {
    title: "Portfolio | Développeur Full Stack",
    description: "Portfolio créatif avec expériences 3D immersives",
    type: "website",
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
