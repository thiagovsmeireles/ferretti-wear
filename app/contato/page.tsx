"use client";
import { Reveal } from "@/components/Reveal";
import { STORE } from "@/lib/data";

export default function Contato() {
  return (
    <div className="pt-32 pb-28 mx-auto max-w-3xl px-5 md:px-10">
      <Reveal><p className="editorial-label opacity-50">Contato</p>
      <h1 className="font-serif-display text-[14vw] md:text-[5vw] leading-[0.96] mt-4">FALE<br /><span className="italic">COM A CASA.</span></h1></Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 space-y-4 text-lg">
          <p><strong>{STORE.name}</strong><br />{STORE.address} — {STORE.city}</p>
          <p className="opacity-70">Físico: {STORE.hoursPhysical}<br />{STORE.hoursOnline}</p>
          <a className="underline underline-offset-4" href={STORE.instagramUrl} target="_blank" rel="noreferrer">{STORE.instagram} →</a>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Formulário de contato">
            <div><label htmlFor="nome" className="editorial-label opacity-60">Nome</label>
            <input id="nome" required className="w-full border-b border-ink/30 bg-transparent py-3 focus:outline-none" placeholder="Seu nome" /></div>
            <div><label htmlFor="email" className="editorial-label opacity-60">E-mail</label>
            <input id="email" type="email" required className="w-full border-b border-ink/30 bg-transparent py-3 focus:outline-none" placeholder="voce@email.com" /></div>
            <div><label htmlFor="msg" className="editorial-label opacity-60">Mensagem</label>
            <textarea id="msg" required rows={4} className="w-full border-b border-ink/30 bg-transparent py-3 focus:outline-none" placeholder="Quero conhecer as peças…" /></div>
            <button className="bg-ink text-bone px-8 py-4 text-[12px] tracking-[0.3em] uppercase font-bold">Enviar →</button>
            <p className="text-xs opacity-50">Formulário demonstrativo — conecte ao backend/loja.</p>
          </form>
        </div>
      </Reveal>
    </div>
  );
}
