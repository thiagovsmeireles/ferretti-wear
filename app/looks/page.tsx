import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import EditorialImage from "@/components/EditorialImage";
import { LOOKS } from "@/lib/data";

export const metadata = { title: "Looks | Ferretti Wear" };

export default function LooksPage() {
  return (
    <div className="pt-32 pb-28 bg-ink text-bone min-h-screen">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal><p className="editorial-label opacity-50">Looks completos</p>
        <h1 className="font-serif-display text-[14vw] md:text-[7vw] leading-[0.95] mt-4">NÃO É A ROUPA.<br /><span className="italic">É QUEM VESTE.</span></h1></Reveal>
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {LOOKS.map((l) => (
            <Reveal key={l.id}>
              <Link href="/colecoes/somos-as-cores" className="group block">
                <div className="aspect-[3/4] relative overflow-hidden" style={{ background: l.color }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[54%] h-[78%] rounded-t-full bg-ink/85" aria-hidden />
                  <span className="absolute top-4 left-4 editorial-label bg-ink/70 px-3 py-1.5">{l.title}</span>
                </div>
                <p className="mt-3 flex justify-between text-[11px] tracking-[0.3em] uppercase opacity-70"><span>{l.colorName}</span><span>Comprar look →</span></p>
              </Link>
            </Reveal>
          ))}
          <Reveal>
            <Link href="/pecas" className="block">
              <EditorialImage color="#8E8C86" label="Monte o seu" sub="peças base" />
              <p className="mt-3 text-[11px] tracking-[0.3em] uppercase opacity-70">Monte o seu →</p>
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
