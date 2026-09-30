import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { EDITORIAL_POSTS } from "@/lib/data";

export const metadata = { title: "Editorial | Ferretti Wear" };

export default function Editorial() {
  return (
    <div className="pt-32 pb-28 mx-auto max-w-[1600px] px-5 md:px-10">
      <Reveal><p className="editorial-label opacity-50">Editorial — revista, não blog</p>
      <h1 className="font-serif-display text-[16vw] md:text-[8vw] leading-[0.95] mt-4">LEIA<br /><span className="italic">COM CALMA.</span></h1></Reveal>
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 mt-14">
        {EDITORIAL_POSTS.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 0.06, 0.2)}>
            <Link href={`/editorial/${p.slug}`} className="group block border-t-2 border-ink pt-6">
              <p className="text-[10px] tracking-[0.35em] uppercase opacity-50">{p.tag}</p>
              <p className="font-serif-display text-4xl md:text-6xl leading-[0.95] mt-4 group-hover:italic transition">{p.title}</p>
              <p className="mt-4 opacity-60 max-w-[52ch]">{p.excerpt}</p>
              <span className="inline-block mt-5 text-[11px] tracking-[0.3em] uppercase font-bold">Ler matéria →</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
