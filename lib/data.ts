export type Piece = {
  slug: string;
  name: string;
  category: string;
  fabric: string;
  composition: string;
  colors: string[];
  colorNames: string[];
  sizes: string[];
  // price intentionally null until backend/e-commerce conectado.
  // Não inventar preços — item 41 do briefing.
  price: null;
  availability: string;
  description: string;
  editorialNote: string;
  span: "XL" | "M" | "S";
};

export const PIECES: Piece[] = [
  {
    slug: "tunica-linho-laranja-cerrado",
    name: "Túnica Linho Cerrado",
    category: "Túnicas",
    fabric: "Linho",
    composition: "100% linho — fibra natural, leve e respirável",
    colors: ["#E85D1F", "#F4F1E8"],
    colorNames: ["Laranja Cerrado", "Off-white"],
    sizes: ["PP", "P", "M", "G", "GG"],
    price: null,
    availability: "Disponível na Casa Ferretti — CLN 102 Norte",
    description:
      "Modelagem agênero, fluida, feita para acompanhar o corpo em movimento. Uma peça, muitas possibilidades — do dia ao jantar.",
    editorialNote: "LOOK 01 — LARANJA",
    span: "XL",
  },
  {
    slug: "conjunto-viscose-roxo-eixo",
    name: "Conjunto Viscose Eixo",
    category: "Conjuntos",
    fabric: "Viscose",
    composition: "Viscose fluida — caimento leve, toque macio",
    colors: ["#5B2A86", "#101010"],
    colorNames: ["Roxo Eixo", "Preto"],
    sizes: ["PP", "P", "M", "G", "GG"],
    price: null,
    availability: "Sob consulta — produção local em Brasília",
    description:
      "Color blocking em roxo profundo. Alfaiataria desconstruída para corpos reais, sem regra de gênero.",
    editorialNote: "LOOK 02 — ROXO",
    span: "M",
  },
  {
    slug: "vestido-algodao-azul-concreto",
    name: "Vestido Algodão Concreto",
    category: "Vestidos",
    fabric: "Algodão",
    composition: "Algodão — natural, confortável, atemporal",
    colors: ["#1D4ED8", "#E5E0D3"],
    colorNames: ["Azul Concreto", "Cinza concreto"],
    sizes: ["PP", "P", "M", "G", "GG"],
    price: null,
    availability: "Disponível na Casa Ferretti",
    description: "Entre o concreto e o movimento. Geometria rígida fora, fluidez dentro.",
    editorialNote: "LOOK 03 — AZUL",
    span: "S",
  },
  {
    slug: "saia-lese-verde-cerrado",
    name: "Saia Lesé Cerrado",
    category: "Saias",
    fabric: "Algodão + Lesé 3D",
    composition: "Algodão com lesé 3D e detalhes artesanais",
    colors: ["#1E6B3A", "#F4F1E8"],
    colorNames: ["Verde Cerrado", "Off-white"],
    sizes: ["PP", "P", "M", "G", "GG"],
    price: null,
    availability: "Peça artesanal — tiragem limitada",
    description: "Textura tátil, bordado e respiro. O Cerrado traduzido em tecido.",
    editorialNote: "LOOK 04 — VERDE",
    span: "M",
  },
  {
    slug: "kimono-croche-amarelo-sol",
    name: "Kimono Crochê Sol",
    category: "Terceiras peças",
    fabric: "Viscose + crochê / macramê",
    composition: "Viscose com aplicação de crochê e macramê feitos à mão",
    colors: ["#E8B400", "#E85D1F"],
    colorNames: ["Amarelo Sol", "Laranja"],
    sizes: ["Único — modelagem ampla agênero"],
    price: null,
    availability: "Sob encomenda — feito à mão em Brasília",
    description: "Artesania como linguagem. Cada ponto carrega tempo, mão e origem.",
    editorialNote: "LOOK 05 — AMARELO",
    span: "XL",
  },
  {
    slug: "calca-alfaiataria-fluida-preto",
    name: "Calça Alfaiataria Fluida",
    category: "Alfaiataria",
    fabric: "Viscose",
    composition: "Viscose encorpada — alfaiataria sem rigidez",
    colors: ["#101010", "#8E8C86"],
    colorNames: ["Preto", "Concreto"],
    sizes: ["PP", "P", "M", "G", "GG"],
    price: null,
    availability: "Disponível na Casa Ferretti",
    description: "Tendência passa. Estilo fica. Base neutra para vestir quem você é.",
    editorialNote: "BASE — NEUTRO",
    span: "S",
  },
];

export type Look = {
  id: string;
  title: string;
  color: string;
  colorName: string;
  pieces: string[];
  statement: string;
};

export const LOOKS: Look[] = [
  { id: "01", title: "LOOK 01", color: "#E85D1F", colorName: "Laranja", pieces: ["Túnica Linho Cerrado"], statement: "Brasília estava cinza. Nós fomos as cores." },
  { id: "02", title: "LOOK 02", color: "#5B2A86", colorName: "Roxo", pieces: ["Conjunto Viscose Eixo"], statement: "Estilo não precisa de regra." },
  { id: "03", title: "LOOK 03", color: "#1D4ED8", colorName: "Azul", pieces: ["Vestido Algodão Concreto"], statement: "Entre o concreto e o movimento." },
  { id: "04", title: "LOOK 04", color: "#1E6B3A", colorName: "Verde", pieces: ["Saia Lesé Cerrado"], statement: "Do Cerrado para o corpo." },
  { id: "05", title: "LOOK 05", color: "#E8B400", colorName: "Amarelo", pieces: ["Kimono Crochê Sol"], statement: "Vista quem você é." },
];

export const COLORS = [
  { name: "Laranja", hex: "#E85D1F", look: "LOOK 01" },
  { name: "Roxo", hex: "#5B2A86", look: "LOOK 02" },
  { name: "Azul", hex: "#1D4ED8", look: "LOOK 03" },
  { name: "Verde", hex: "#1E6B3A", look: "LOOK 04" },
  { name: "Amarelo", hex: "#E8B400", look: "LOOK 05" },
];

export const EDITORIAL_POSTS = [
  {
    slug: "somos-as-cores-bastidores",
    tag: "Bastidores",
    title: "Somos as cores — 30 looks, 30 modelos",
    excerpt: "Color blocking, estampas e texturas encontram o concreto de Brasília.",
  },
  {
    slug: "brasilia-entre-concreto-e-movimento",
    tag: "Brasília",
    title: "Entre o concreto e o movimento",
    excerpt: "A geometria da cidade como direção de arte. A roupa como fluidez.",
  },
  {
    slug: "atemporalidade-estilo-fica",
    tag: "Estilo",
    title: "Tendência passa. Estilo fica.",
    excerpt: "Uma peça, muitas possibilidades: dia, trabalho, jantar, viagem.",
  },
  {
    slug: "materia-linho-algodao-viscose",
    tag: "Matéria",
    title: "Linho, algodão, viscose — matéria viva",
    excerpt: "Fibras naturais, respiro e toque. Sustentabilidade sem clichê verde.",
  },
];

export const STORE = {
  name: "CASA FERRETTI",
  address: "CLN 102 Norte — Asa Norte",
  city: "Brasília — DF",
  hoursPhysical: "Qui–Sex 11h–19h | Sáb 9h–18h",
  hoursOnline: "Online: Seg–Qua",
  instagram: "@ferrettiwear",
  instagramUrl: "https://www.instagram.com/ferrettiwear/",
};
