import { Reveal } from "@/components/Reveal";
import EditorialImage from "@/components/EditorialImage";
import { PHOTOS, PHOTO_CREDIT } from "@/lib/photos";

export const metadata = { title: "Salomão Ferretti | Ferretti Wear" };

export default function Salomao() {
  return (
    <div className="pt-32 pb-28 mx-auto max-w-[1600px] px-5 md:px-10 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5"><Reveal><EditorialImage src={PHOTOS.finale.src} alt={PHOTOS.finale.alt} position="50% 25%" label="Salomão Ferretti" sub="final — Dunia Hall" tall />
      <p className="text-[11px] tracking-[0.25em] uppercase opacity-50 mt-2">{PHOTO_CREDIT}</p></Reveal></div>
      <div className="md:col-span-7">
        <Reveal><p className="editorial-label opacity-50">O estilista</p>
        <h1 className="font-serif-display text-[15vw] md:text-[6vw] leading-[0.95] mt-4">SALOMÃO<br />FERRETTI</h1></Reveal>
        <Reveal delay={0.1}>
          <blockquote className="font-serif-display italic text-3xl md:text-4xl mt-8">“Brasília estava cinza. Nós fomos as cores.”</blockquote>
          <div className="mt-6 space-y-5 text-lg leading-relaxed opacity-85 max-w-[60ch]">
            <p>Criador da Ferretti Wear, Salomão constrói em Brasília uma moda autoral feita de pessoas reais: trajetória atravessada pela cidade, pela criação coletiva e pelo processo artesanal.</p>
            <p>Brasília · criação · moda autoral · individualidade · corpos diversos. Sem biografia corporativa — matéria de revista, retrato e manifesto.</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
