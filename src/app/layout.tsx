import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arabic Grammar Interactive — النحو التفاعلي",
  description: "Interactive Arabic grammar learning for intermediate students, based on Nahw Mir and Al-Kafiyah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="manuscript-bg min-h-screen">{children}</body>
    </html>
  );
}