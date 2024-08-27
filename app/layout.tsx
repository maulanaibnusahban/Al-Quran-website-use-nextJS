import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Al Quran Digital",
  description: "created by maulana ibnu sahban",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-[#202125]" lang="en">
      <body className={`${poppins.className} relative max-w-8xl`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
