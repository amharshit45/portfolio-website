import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Mulish } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400']});
const mulish = Mulish({ weight: ['700'], subsets: ['cyrillic']})

export const metadata: Metadata = {
  title: "Harshit Goyal",
  description: "A portfolio website for a full-stack web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${mulish.className}`}>{children}</body>
    </html>
  );
}
