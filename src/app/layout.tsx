import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import * as React from "react";

export const metadata: Metadata = {
  title: "Mint Mart",
  description:
    "Mint Mart is a decentralized NFT marketplace built on the Ethereum blockchain.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
