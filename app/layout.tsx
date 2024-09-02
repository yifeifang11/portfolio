import type { Metadata } from "next";
import { Poppins, Red_Hat_Display, Bangers } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});
const redhat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-redhat",
});
const bangers = Bangers({
  subsets: ["latin"],
  variable: "--font-bangers",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Yifei's Portfolio",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redhat.variable} ${poppins.variable} ${bangers.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
