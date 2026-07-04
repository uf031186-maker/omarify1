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
      className={`${inter.variable} ${lora.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
