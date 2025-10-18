import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuralEdge | AI Automation Solutions",
  description: "Integrated AI agents that do the robot work so your team can do the human work. Production-ready AI automation for Social Media, SaaS, and Real Estate.",
  keywords: ["AI automation", "AI agents", "custom AI solutions", "n8n automation", "LLM operations", "production AI systems"],
  authors: [{ name: "NeuralEdge" }],
  openGraph: {
    title: "NeuralEdge | AI Automation Solutions",
    description: "Integrated AI agents that do the robot work so your team can do the human work.",
    url: "https://www.neuraledge.live",
    siteName: "NeuralEdge",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
