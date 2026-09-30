/**
 * Fotos reais — desfile "Somos as Cores", Dunia Hall, Brasília.
 * Fonte: Radar Digital Brasília (imprensa). Crédito obrigatório na interface.
 * Substitua por arquivos próprios da marca quando houver originais.
 */
const B = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const PHOTOS = {
  finale: {
    src: `${B}/fotos/desfile-1.jpg`,
    alt: "Salomão Ferretti no final do desfile Somos as Cores, aplaudido pelo público no Dunia Hall",
    credit: "Foto: Radar Digital Brasília",
  },
  azul: {
    src: `${B}/fotos/desfile-2.jpg`,
    alt: "Modelo na passarela com look azul fluido Ferretti Wear, desfile Somos as Cores",
    credit: "Foto: Radar Digital Brasília",
  },
  cru: {
    src: `${B}/fotos/desfile-3.jpg`,
    alt: "Modelo na passarela com conjunto cru bordado Ferretti Wear, desfile Somos as Cores",
    credit: "Foto: Radar Digital Brasília",
  },
  loja: {
    src: `${B}/fotos/desfile-4.jpg`,
    alt: "Salomão Ferretti em entrevista na Casa Ferretti, arara com peças ao fundo",
    credit: "Foto: Radar Digital Brasília",
  },
  vermelho: {
    src: `${B}/fotos/fluido.jpg`,
    alt: "Modelo na passarela com look vermelho fluido Ferretti Wear, telão com Eixo Monumental ao fundo",
    credit: "Foto: Claudio Andrade",
  },
  monumento: {
    src: `${B}/fotos/monumento.jpg`,
    alt: "Dois modelos com looks Ferretti Wear diante da Catedral de Brasília",
    credit: "Foto: Mariana Campos / Correio Braziliense",
  },
} as const;

export const PHOTO_CREDIT = "Fotos: Radar Digital Brasília · Desfile Somos as Cores";
export const PHOTO_CREDIT_URL =
  "https://radardigitalbrasilia.com.br/moda/ferretti-wear-leva-somos-as-cores-a-passarela-e-transforma-moda-em-manifesto-pela-autenticidade/";
export const CORREIO_2024_URL =
  "https://www.correiobraziliense.com.br/revista-do-correio/2024/10/6971285-sustentabilidade-e-criatividade-marcam-a-moda-autoral-de-brasilia.html";
export const CORREIO_2026_URL =
  "https://www.correiobraziliense.com.br/revista-do-correio/2026/04/7398260-brasilia-veste-sua-propria-historia-moda-autoral-ocupa-monumentos-da-capital.html";
