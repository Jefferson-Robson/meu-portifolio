import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robson Lopes — Tecnologia e Negócios",
  description:
    "Portfólio de Robson Lopes: software, inteligência artificial, automação, processos e negócios.",
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
