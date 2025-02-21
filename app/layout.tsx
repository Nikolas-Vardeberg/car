import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";

const geistMono = Funnel_Display({
  variable: "--font-funnel_display",
  subsets: ["latin"],
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
      <body
        className={`${geistMono.variable} antialiased`}
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
