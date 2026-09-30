import { Reveal } from "@/components/Reveal";
import EditorialImage from "@/components/EditorialImage";
import { STORE } from "@/lib/data";
import { PHOTOS, PHOTO_CREDIT } from "@/lib/photos";

export const metadata = { title: "Casa Ferretti | Ferretti Wear" };

export default function Casa() {
  return (
    <div className="pt-32 pb-28 mx-auto max-w-[1600px] px-5 md:px-10">
      <Reveal><p className="editorial-label opacity-50">A loja</p>
      <h1 className="font-serif-display text-[13vw] md:text-[6.5vw] leading-[0.96] mt-4">CASA<br /><span className="italic">FERRETTI.</span></h1></Reveal>
      <div className="grid md:grid-cols-2 gap-10 mt-12 items-start">
        <Reveal><EditorialImage src={PHOTOS.loja.src} alt={PHOTOS.loja.alt} position="50% 30%" label="Casa Ferretti" sub="CLN 102 Norte" tall />
        <p className="text-xs mt-3 opacity-50">{PHOTO_CREDIT} — entrevista na loja.</p></Reveal>
        <div>
          <Reveal>
            <p className="text-2xl font-semibold">{STORE.address}</p>
            <p className="opacity-70">{STORE.city}</p>
            <p className="mt-4 opacity-70">Físico: {STORE.hoursPhysical}<br />{STORE.hoursOnline}</p>
            <div className="flex gap-3 mt-8 flex-wrap">
              <a href="https://maps.google.com/?q=CLN+102+Norte+Asa+Norte+Brasilia" target="_blank" rel="noreferrer" className="bg-ink text-bone px-7 py-4 text-[12px] tracking-[0.3em] uppercase font-bold">Como chegar →</a>
              <a href={STORE.instagramUrl} target="_blank" rel="noreferrer" className="border border-ink px-7 py-4 text-[12px] tracking-[0.3em] uppercase font-bold">{STORE.instagram} →</a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 font-serif-display italic text-3xl max-w-[22ch]">A roupa ganha corpo quando você entra na casa.</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
