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
  title: "Umar — Premium Templates | Templates That Do the Hard Work for You",
  description:
    "Stop building everything from scratch. Grab a ready-made template, customize it in minutes, and get back to running your business.",
  keywords: [
    "Templates",
    "Business Templates",
    "Small Business",
    "Spreadsheet Templates",
    "Document Templates",
    "Creator Tools",
  ],
  openGraph: {
    title: "Umar — Premium Templates for Small Businesses",
    description:
      "Ready-made templates you can customize in minutes. Stop wasting time on busywork.",
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
