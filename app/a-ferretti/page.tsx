import { Reveal } from "@/components/Reveal";
import EditorialImage from "@/components/EditorialImage";

export const metadata = { title: "A Ferretti | Ferretti Wear" };

export default function AFerretti() {
  return (
    <div className="pt-32 pb-28 mx-auto max-w-[1600px] px-5 md:px-10">
      <Reveal><p className="editorial-label opacity-50">A Ferretti</p>
      <h1 className="font-serif-display text-[13vw] md:text-[6.5vw] leading-[0.96] mt-4">MODA NÃO É<br />SÓ O QUE VOCÊ VESTE.</h1></Reveal>
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        <Reveal><EditorialImage color="#5B2A86" label="A Ferretti" sub="Brasília" tall /></Reveal>
        <div className="space-y-6 text-lg leading-relaxed opacity-85">
          <Reveal><p>A Ferretti Wear nasceu em Brasília para criar roupas que acompanham pessoas reais, diferentes corpos, diferentes rotinas e diferentes formas de existir.</p></Reveal>
          <Reveal><p>Moda autoral. Agênero. Atemporal. Tecidos naturais — linho, algodão, viscose — com artesania: crochê, macramê, lesé, bordados.</p></Reveal>
          <Reveal><p className="font-serif-display italic text-3xl">Estilo não precisa de regra.</p></Reveal>
          <Reveal><p className="text-sm opacity-60">Produção local · Consumo consciente · Conexão com o Cerrado · Individualidade como linguagem.</p></Reveal>
        </div>
      </div>
    </div>
  );
}
