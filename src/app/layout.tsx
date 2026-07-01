import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Umar — Python Backend Developer | Omarify",
  description:
    "I build scalable APIs, automation systems, and production-ready backend architectures. Python backend developer specializing in FastAPI, Flask, and Django.",
  keywords: [
    "Python Developer",
    "Backend Engineer",
    "FastAPI",
    "Flask",
    "Django",
    "API Development",
    "Automation",
  ],
  openGraph: {
    title: "Umar — Python Backend Developer",
    description:
      "Scalable APIs, automation systems, and production-ready backend architectures.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
