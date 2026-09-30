# FERRETTI WEAR — Vista quem você é

Experiência fashion / editorial / artística / Brasília.

Moda autoral, agênero e atemporal por Salomão Ferretti — feita em Brasília, entre o concreto e o movimento.

## Stack
Next.js 14 · TypeScript · Tailwind · Framer Motion · Lucide

## Rodar
```bash
npm install
npm run dev
```

## Build estático (GitHub Pages)
```bash
$env:GITHUB_PAGES="true"
npm run build
# saída em ./out
```

## Deploy
Push na `main` dispara `.github/workflows/pages.yml` → GitHub Pages.

URL: https://thiagovsmeireles.github.io/ferretti-wear/

## Notas de conteúdo
- Sem preços inventados: `price: null` + "Sob consulta".
- Sem checkout falso: arquitetura preparada, finalização via Casa Ferretti.
- Fotografia: blocos arte-direcionados `concreto × cor` — troque por assets reais em `/public/editorial/`.
- Casa Ferretti: CLN 102 Norte, Asa Norte, Brasília — DF.
