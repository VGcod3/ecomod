import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "ECOMOD",
  description: "Ecomod | House of Your Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-my-bg`}>{children}</body>
    </html>
  );
}
