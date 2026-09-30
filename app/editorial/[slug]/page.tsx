import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import EditorialImage from "@/components/EditorialImage";
import { EDITORIAL_POSTS } from "@/lib/data";

const BODY: Record<string, string[]> = {
  "somos-as-cores-bastidores": [
    "30 looks, 30 modelos. O desfile que transformou o cinza de Brasília em cor — do backstage ao último passo na passarela.",
    "Color blocking, estampas e texturas: linho, viscose, algodão, lesé 3D, crochê e macramê. Cada look, uma pessoa. Cada pessoa, uma cor.",
    "Fotografias reais da campanha ocupam este espaço — substitua os blocos por assets em /public/editorial/.",
  ],
  "brasilia-entre-concreto-e-movimento": [
    "Brasília não é cenário. É direção de arte: linhas, sombras, luz dura, céu aberto.",
    "A arquitetura rígida pede a roupa fluida. O concreto pede o corpo. A geometria pede o movimento.",
  ],
  "atemporalidade-estilo-fica": [
    "Tendência passa. Estilo fica. Uma peça Ferretti atravessa dia, trabalho, jantar, evento, viagem e cidade.",
    "Consumo consciente começa no desenho — não no discurso.",
  ],
  "materia-linho-algodao-viscose": [
    "Linho: leve, respirável, atemporal. Algodão: conforto natural. Viscose: fluidez em movimento.",
    "Crochê, macramê e lesé 3D trazem a mão para perto do corpo — materialidade sem clichê verde.",
  ],
};

export function generateStaticParams() {
  return EDITORIAL_POSTS.map((p) => ({ slug: p.slug }));
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = EDITORIAL_POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <article className="pt-32 pb-28 mx-auto max-w-4xl px-5 md:px-10">
      <Link href="/editorial" className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase opacity-60"><ArrowLeft size={14} /> Editorial</Link>
      <Reveal><p className="editorial-label opacity-50 mt-8">{post.tag}</p>
      <h1 className="font-serif-display text-[11vw] md:text-[4.5vw] leading-[0.9] mt-4">{post.title}</h1>
      <p className="mt-4 opacity-60 text-lg">{post.excerpt}</p></Reveal>
      <Reveal delay={0.1}><div className="mt-10"><EditorialImage color="#E85D1F" label={post.tag} sub={post.title.slice(0, 24)} /></div></Reveal>
      <div className="mt-10 space-y-6 text-lg leading-relaxed opacity-85">
        {(BODY[post.slug] ?? [post.excerpt]).map((par, i) => <Reveal key={i}><p>{par}</p></Reveal>)}
      </div>
    </article>
  );
}
