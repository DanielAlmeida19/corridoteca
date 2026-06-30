import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CorridOteca",
  description: "Um acervo de corridas detalhado!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav>
          <Image
            src="/CorridOteca.png"
            alt="Descrição da imagem para acessibilidade"
            width={500}
            height={300}
          />
          <div>Alguma coisa</div>
          <div>Alguma coisa</div>
        </nav>
        {children}
      </body>
    </html>
  );
}
