import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robson Lopes — Software, Automação e IA",
  description:
    "Portfólio de Robson Lopes: soluções de software, automação e inteligência artificial para operações mais eficientes.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
