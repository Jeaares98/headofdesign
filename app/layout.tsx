import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Head of Design Console",
  description: "Internal command center for the Head of Design agent.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
