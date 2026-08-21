import type { Metadata } from "next";
import "./globals.css";
import "./results.css";

export const metadata: Metadata = {
  title: "Salto Campaign Game — JEAAARES",
  description: "Die Mission zu 1.000 Backflips: Quests, Kapitel und Momentum in einer Oberfläche.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
