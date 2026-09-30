import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import EditorialImage from "@/components/EditorialImage";

export default function Colecoes() {
  const items = [
    { href: "/colecoes/somos-as-cores", year: "2026", title: "SOMOS AS CORES", desc: "30 looks · 30 modelos · verde, roxo, laranja, azul, amarelo", color: "#E85D1F" },
    { href: "/colecoes/somos-as-cores", year: "2025", title: "TRANSIÇÃO", desc: "A cor entra no concreto — arquivo", color: "#5B2A86" },
    { href: "/colecoes/somos-as-cores", year: "2024", title: "ORIGENS", desc: "Base neutra, alfaiataria fluida — arquivo", color: "#8E8C86" },
  ];
  return (
    <div className="pt-32 pb-28 mx-auto max-w-[1600px] px-5 md:px-10">
      <Reveal><p className="editorial-label opacity-50">Coleções</p>
      <h1 className="font-serif-display text-[14vw] md:text-[7vw] leading-[0.85] mt-4">ARQUIVO<br /><span className="italic">FERRETTI</span></h1></Reveal>
      <div className="grid md:grid-cols-3 gap-5 mt-12">
        {items.map((c) => (
          <Link key={c.year + c.title} href={c.href} className="group">
            <Reveal><EditorialImage color={c.color} label={c.year} sub={c.title} />
            <p className="font-serif-display text-3xl mt-4 group-hover:italic">{c.title}</p>
            <p className="text-sm opacity-60">{c.desc}</p></Reveal>
          </Link>
        ))}
      </div>
    </div>
  );
}
