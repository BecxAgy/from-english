import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";
const fontSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans} antialiased bg-white text-black`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
("");