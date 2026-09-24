import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bishal Ranjan Sah | Full-Stack Engineer & AI Builder",
  description:
    "Bishal Ranjan Sah — Full-stack engineer building AI-powered systems, rehabilitation devices, and scalable products.",
  keywords: [
    "Bishal Ranjan Sah",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "AI/ML",
    "NeuroGlow",
    "MNNIT Allahabad",
  ],
  openGraph: {
    title: "Bishal Ranjan Sah | Full-Stack Engineer & AI Builder",
    description:
      "Full-stack engineer building AI-powered systems, rehabilitation devices, and scalable products.",
    type: "website",
    url: "https://bishalsah.vercel.app",
    siteName: "Bishal Ranjan Sah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishal Ranjan Sah | Full-Stack Engineer & AI Builder",
    description:
      "Full-stack engineer building AI-powered systems, rehabilitation devices, and scalable products.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-zinc-950 text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}