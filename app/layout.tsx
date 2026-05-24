import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishiraj Singh — Web developer",
  description: "Portfolio of web projects and contact.",
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
