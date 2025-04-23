import type { Metadata } from "next";
import { Doto } from "next/font/google";
import "./globals.css";

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alpha Mode",
  description: "Your daily rhythm, simplified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />
      </head>
      <body className={`${doto.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
