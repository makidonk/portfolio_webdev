import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "./components/Header";
import { Playfair_Display, Anton } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: ["400"],
  display: "swap",
});


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathildas Portfolio",
  description: "Byggd med Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${playfair.variable} ${anton.variable}`}>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
