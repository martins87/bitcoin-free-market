import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "./components/Navbar";
import AuthSessionProvider from "./components/AuthSessionProvider";
import "./globals.css";

const sora = localFont({
  src: "./assets/fonts/Sora-SemiBold.ttf",
  variable: "--font-sora",
  weight: "600",
});

const inter = localFont({
  src: [
    {
      path: "./assets/fonts/Inter_28pt-Regular.ttf",
      weight: "400",
    },
    {
      path: "./assets/fonts/Inter_28pt-Medium.ttf",
      weight: "500",
    },
    {
      path: "./assets/fonts/Inter_28pt-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./assets/fonts/Inter_28pt-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-inter",
});

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
    <AuthSessionProvider>
      <html lang="en">
        <body className={`${sora.variable} ${inter.variable} antialiased`}>
          <Navbar />
          {children}
        </body>
      </html>
    </AuthSessionProvider>
  );
}
