import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitcoin Free Market",
  description: "Make your listing. Trade in satoshis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
