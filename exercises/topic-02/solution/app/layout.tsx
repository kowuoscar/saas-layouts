import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Topic 02",
  description: "Solution for Topic 02",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className=''>
      <body>{children}</body>
    </html>
  );
}
