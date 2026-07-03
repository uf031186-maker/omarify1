import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Umar — Aspiring Python & AI Developer | Omarify",
  description:
    "Learning Python, AI, and backend development. Give me a chance — if my work isn't good enough, you don't have to pay me.",
  keywords: [
    "Python Learner",
    "AI Developer",
    "Backend Development",
    "Freelancer",
    "Hire Developer",
  ],
  openGraph: {
    title: "Umar — Aspiring Python & AI Developer",
    description:
      "Learning Python, AI, and backend development. Ready to work hard and prove myself.",
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
      className={`${outfit.variable} ${sora.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
