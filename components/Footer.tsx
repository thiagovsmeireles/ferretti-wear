import Link from "next/link";
import { STORE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone mt-0" aria-label="Rodapé">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 pt-16 pb-8">
        <p className="font-serif-display text-[13.5vw] md:text-[9vw] leading-[0.95] tracking-tight">
          VISTA<br />QUEM<br /><span className="italic">VOCÊ É.</span>
        </p>

        <div className="grid md:grid-cols-4 gap-10 mt-14 text-sm">
          <div>
            <p className="editorial-label opacity-50 mb-4">Navegar</p>
            <ul className="space-y-2">
              {[
                ["/colecoes", "Coleções"],
                ["/pecas", "Peças"],
                ["/looks", "Looks"],
                ["/editorial", "Editorial"],
                ["/a-ferretti", "A Ferretti"],
              ].map(([h, l]) => (
                <li key={h}>
                  <Link href={h} className="hover:opacity-60 transition">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="editorial-label opacity-50 mb-4">Casa Ferretti</p>
            <p>{STORE.name}</p>
            <p className="opacity-70">{STORE.address}</p>
            <p className="opacity-70">{STORE.city}</p>
            <p className="opacity-70 mt-2">Físico: {STORE.hoursPhysical}</p>
            <p className="opacity-70">{STORE.hoursOnline}</p>
          </div>
          <div>
            <p className="editorial-label opacity-50 mb-4">Manifesto</p>
            <p className="opacity-80 leading-relaxed max-w-[30ch]">
              A roupa não define você. Mas pode contar muito sobre quem você é.
              Feita em Brasília, entre o concreto e o movimento.
            </p>
          </div>
          <div>
            <p className="editorial-label opacity-50 mb-4">Seguir</p>
            <a href={STORE.instagramUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:opacity-60">
              {STORE.instagram} →
            </a>
            <p className="mt-6 opacity-50 text-xs leading-relaxed">
              Estrutura de e-commerce preparada. Sem preços inventados, sem checkout falso.
              Tecidos naturais: linho, algodão, viscose.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2 border-t border-bone/15 mt-12 pt-6 text-[11px] tracking-[0.25em] uppercase opacity-60">
          <span>© 2026 Ferretti Wear — Brasília</span>
          <span>Moda autoral · Agênero · Atemporal</span>
          <span>Somos as cores</span>
        </div>
      </div>
    </footer>
  );
}
