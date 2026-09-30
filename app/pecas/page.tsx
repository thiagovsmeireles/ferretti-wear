import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import EditorialImage from "@/components/EditorialImage";
import { PIECES } from "@/lib/data";

export const metadata = { title: "Peças | Ferretti Wear" };

export default function Pecas() {
  return (
    <div className="pt-32 pb-28 mx-auto max-w-[1600px] px-5 md:px-10">
      <Reveal><p className="editorial-label opacity-50">Peças — catálogo editorial</p>
      <h1 className="font-serif-display text-[14vw] md:text-[7vw] leading-[0.85] mt-4">VISTA<br /><span className="italic">QUEM VOCÊ É.</span></h1>
      <p className="mt-6 text-sm opacity-60 max-w-[60ch]">Composição assimétrica — nada de grid Shopify. Preços sob consulta até o e-commerce ser conectado. Sem estoque inventado.</p></Reveal>
      <div className="grid grid-cols-12 gap-4 mt-12">
        {PIECES.map((p) => (
          <Reveal key={p.slug} className={p.span === "XL" ? "col-span-12 md:col-span-7" : p.span === "M" ? "col-span-6 md:col-span-3" : "col-span-6 md:col-span-2"}>
            <Link href={`/pecas/${p.slug}`} className="group block">
              <EditorialImage color={p.colors[0]} label={p.editorialNote} sub={p.fabric} tall={p.span !== "S"} />
              <p className="font-serif-display text-xl mt-3 group-hover:italic">{p.name}</p>
              <p className="text-[11px] tracking-[0.2em] uppercase opacity-50">{p.category}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
