import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — Software Engineer & Developer",
  description: "Software Engineer specializing in full-stack web development, building fast, beautiful, and scalable products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
