// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VAV Portfolio",
  description: "Portfolio of Vilhjalmur Arnar Vilhjalmsson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="w-full pt-20">{children}</main> {/* Add pt-20 here */}
        <Footer />
      </body>
    </html>
  );
}
