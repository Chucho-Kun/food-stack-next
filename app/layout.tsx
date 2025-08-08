import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Food Stack | App Router & Prisma",
  description: "remote menu app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
        />
      </head>
      <body
        className={`${inter.className} bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
