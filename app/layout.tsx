import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://robsonlopes.tec.br"),
  title: {
    default: "Robson Lopes — Tecnologia, Processos e Automação",
    template: "%s | Robson Lopes",
  },
  description:
    "Portfólio de Robson Lopes: projetos, experimentos e soluções em tecnologia aplicada, processos e automação.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Robson Lopes",
    title: "Robson Lopes — Tecnologia, Processos e Automação",
    description:
      "Projetos, experimentos e soluções em tecnologia aplicada, processos e automação.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robson Lopes — Tecnologia, Processos e Automação",
    description:
      "Projetos, experimentos e soluções em tecnologia aplicada, processos e automação.",
  },
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
