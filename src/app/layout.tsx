import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const siteUrl = "https://climhub.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Climhub | Sua operação de climatização, mais simples",
    template: "%s | Climhub",
  },
  description:
    "Gerencie clientes, contratos, equipamentos, PMOCs e manutenções em uma única plataforma — do escritório à equipe em campo.",
  applicationName: "Climhub",
  keywords: [
    "climatização",
    "PMOC",
    "manutenção preventiva",
    "gestão de equipamentos",
    "ar condicionado",
    "ordem de serviço",
    "HVAC",
    "gestão de contratos",
    "operação em campo",
  ],
  authors: [{ name: "Climhub" }],
  creator: "Climhub",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Climhub",
    title: "Climhub | Sua operação de climatização, mais simples",
    description:
      "Gerencie clientes, contratos, equipamentos, PMOCs e manutenções em uma única plataforma.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Climhub | Sua operação de climatização, mais simples",
    description:
      "Gerencie clientes, contratos, equipamentos, PMOCs e manutenções em uma única plataforma.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = { themeColor: "#2875bd" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal { opacity: 1 !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
