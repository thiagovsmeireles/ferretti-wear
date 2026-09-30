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
  },
  azul: {
    src: `${B}/fotos/desfile-2.jpg`,
    alt: "Modelo na passarela com look azul fluido Ferretti Wear, desfile Somos as Cores",
  },
  cru: {
    src: `${B}/fotos/desfile-3.jpg`,
    alt: "Modelo na passarela com conjunto cru bordado Ferretti Wear, desfile Somos as Cores",
  },
  loja: {
    src: `${B}/fotos/desfile-4.jpg`,
    alt: "Salomão Ferretti em entrevista na Casa Ferretti, arara com peças ao fundo",
  },
} as const;

export const PHOTO_CREDIT = "Fotos: Radar Digital Brasília · Desfile Somos as Cores";
export const PHOTO_CREDIT_URL =
  "https://radardigitalbrasilia.com.br/moda/ferretti-wear-leva-somos-as-cores-a-passarela-e-transforma-moda-em-manifesto-pela-autenticidade/";
