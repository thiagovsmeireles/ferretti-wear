import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";
import { StoreProvider } from "@/lib/store";

export const metadata: Metadata = {
  title: "FERRETTI WEAR — Vista quem você é | Moda autoral em Brasília",
  description:
    "Ferretti Wear por Salomão Ferretti. Moda autoral, agênero e atemporal feita em Brasília. Somos as cores — linho, algodão, viscose, crochê e macramê.",
  metadataBase: new URL("https://ferrettiwear.com.br"),
  openGraph: {
    title: "FERRETTI WEAR — SOMOS AS CORES",
    description: "Entre o concreto e o movimento. Moda autoral de Brasília.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              name: "Ferretti Wear",
              founder: { "@type": "Person", name: "Salomão Ferretti" },
              address: {
                "@type": "PostalAddress",
                streetAddress: "CLN 102 Norte",
                addressLocality: "Brasília",
                addressRegion: "DF",
                addressCountry: "BR",
              },
              sameAs: ["https://www.instagram.com/ferrettiwear/"],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-ink focus:text-bone focus:px-4 focus:py-2"
        >
          Pular para o conteúdo
        </a>
        <StoreProvider>
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
          <CartDrawer />
          <SearchOverlay />
        </StoreProvider>
      </body>
    </html>
  );
}
