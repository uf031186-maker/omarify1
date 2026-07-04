import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Umar — Web Developer | Websites That Work as Hard as Your Business",
  description:
    "I build fast, modern, custom websites using AI-powered development — so you get a better site, delivered sooner, without cutting corners.",
  keywords: [
    "Web Developer",
    "Custom Websites",
    "AI-Powered Development",
    "Business Websites",
    "Landing Pages",
    "Hire Developer",
  ],
  openGraph: {
    title: "Umar — Web Developer | Websites That Work",
    description:
      "Fast, modern, custom websites built with AI-powered development. Better sites, delivered sooner, without cutting corners.",
    url: "https://omarify.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
