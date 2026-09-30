import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import EditorialImage from "@/components/EditorialImage";
import { PIECES, LOOKS } from "@/lib/data";
import { PHOTOS, PHOTO_CREDIT } from "@/lib/photos";

const LOOK_PHOTOS: Record<string, { src: string; alt: string; position: string }> = {
  "03": { src: PHOTOS.azul.src, alt: PHOTOS.azul.alt, position: "50% 25%" },
};

export const metadata = {
  title: "SOMOS AS CORES — Campanha 2026 | Ferretti Wear",
  description: "30 looks, 30 modelos. Color blocking, linho, viscose, algodão, lesé 3D, crochê e macramê. Feita em Brasília.",
};

export default function SomosAsCores() {
  return (
    <div className="pt-28">
      <section className="bg-ink text-bone py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Reveal><p className="editorial-label opacity-50">Coleção · 2026 · Brasília</p>
          <h1 className="font-serif-display text-[18vw] md:text-[11vw] leading-[0.94] mt-4">SOMOS<br />AS <span className="italic">CORES.</span></h1>
          <p className="mt-8 max-w-[56ch] opacity-80 leading-relaxed">30 looks. 30 modelos. Verde, roxo, laranja, azul e amarelo em color blocking, estampas e texturas — linho, viscose, algodão, lesé 3D, crochê e macramê. A campanha dialoga com Brasília: concreto, brutalismo, diversidade, autenticidade e consumo consciente.</p></Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1600px] px-5 md:px-10 py-16">
        <Reveal>
          <div className="relative overflow-hidden aspect-[16/8] md:aspect-[21/8] bg-ink">
            <Image src={PHOTOS.finale.src} alt={PHOTOS.finale.alt} fill sizes="100vw" className="object-cover" style={{ objectPosition: "50% 30%" }} />
            <span className="absolute top-5 left-5 editorial-label bg-ink/60 text-bone px-3 py-1.5">Final — Dunia Hall</span>
          </div>
          <p className="text-[11px] tracking-[0.25em] uppercase opacity-50 mt-2">{PHOTO_CREDIT}</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {LOOKS.map((l, i) => (
            <Reveal key={l.id} delay={Math.min(i * 0.05, 0.2)}>
              <EditorialImage color={l.color} label={l.title} sub={l.colorName} tall={i % 2 === 0} src={LOOK_PHOTOS[l.id]?.src} alt={LOOK_PHOTOS[l.id]?.alt} position={LOOK_PHOTOS[l.id]?.position} />
              <p className="font-serif-display italic text-2xl mt-3">{l.statement}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <h2 className="font-serif-display text-4xl md:text-6xl mt-20">PEÇAS DA CAMPANHA</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {PIECES.map((p) => (
            <Link key={p.slug} href={`/pecas/${p.slug}`} className="group">
              <EditorialImage color={p.colors[0]} label={p.editorialNote} sub={p.fabric} />
              <p className="font-serif-display text-2xl mt-3 group-hover:italic">{p.name}</p>
              <p className="text-xs opacity-60 tracking-[0.2em] uppercase">Ver peça →</p>
            </Link>
          ))}
        </div>
        <Link href="/pecas" className="inline-flex items-center gap-2 mt-12 text-[12px] tracking-[0.3em] uppercase font-bold border-b border-ink pb-1">
          Explorar todas as peças <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
