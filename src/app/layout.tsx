import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Suneeth S | Creative Developer & AI Engineer",
  description: "Portfolio of Suneeth S - Software Engineer, AI/ML student at VIT Chennai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(dmSans.variable, syne.variable)}>
      <body className="font-sans antialiased overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
        {children}
      </body>
    </html>
  );
}
