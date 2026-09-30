"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import EditorialImage from "@/components/EditorialImage";
import { Reveal, MaskLine } from "@/components/Reveal";
import { PIECES, LOOKS, COLORS, EDITORIAL_POSTS, STORE } from "@/lib/data";

/* ============ HERO — campanha editorial + scroll cinematográfico ============ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const textXLeft = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textXRight = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[108svh] overflow-clip bg-ink text-bone" aria-label="Campanha Ferretti Wear">
      {/* fotografia de campanha — substituir por asset real em /public/hero.jpg */}
      <motion.div style={reduce ? undefined : { scale: imgScale }} className="absolute inset-0">
        <div
          className="absolute inset-0 grain"
          role="img"
          aria-label="Editorial Ferretti: modelo em roupa colorida diante do concreto de Brasília"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,16,16,0.15) 0%, rgba(16,16,16,0.55) 100%), linear-gradient(100deg, #c9c2b2 0 38%, #E85D1F 38.3% 58%, #5B2A86 58.3% 78%, #1E6B3A 78.3% 100%)",
          }}
        >
          <div className="absolute inset-y-0 left-[8%] w-px bg-bone/40" aria-hidden />
          <div className="absolute inset-y-0 left-[22%] w-px bg-bone/25" aria-hidden />
          <div className="absolute inset-y-0 left-[38%] w-[3px] bg-ink/60" aria-hidden />
          {/* figura central */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(46vw,420px)] h-[76%] rounded-t-full bg-gradient-to-b from-[#E85D1F] via-[#7a2f12] to-ink" aria-hidden />
          <div className="absolute bottom-[38%] left-[8%] w-[26vw] h-[30vh] bg-[#1D4ED8]/80 mix-blend-multiply blur-[1px]" aria-hidden />
          <div className="absolute top-0 right-0 w-[30%] h-[34%] bg-gradient-to-b from-[#9db4d0] to-transparent" aria-hidden />
        </div>
      </motion.div>

      {/* micro editorial top */}
      <div className="absolute top-20 md:top-24 left-0 right-0 px-5 md:px-10 flex justify-between editorial-label opacity-80">
        <span>Ferretti Wear</span>
        <span className="hidden md:block">Moda autoral — Agênero — Atemporal</span>
        <span>Brasília · 2026</span>
      </div>

      {/* headline monumental */}
      <motion.div style={reduce ? undefined : { y: textY, opacity: fade }} className="absolute inset-0 flex flex-col justify-end pb-[10vh] px-5 md:px-10 pointer-events-none">
        <motion.h1 className="font-serif-display leading-[0.82] tracking-tight text-[19vw] md:text-[13.5vw]" aria-label="Vista quem você é. Somos as cores.">
          <motion.span style={reduce ? undefined : { x: textXLeft }} className="block">
            <MaskLine>VISTA</MaskLine>
          </motion.span>
          <motion.span style={reduce ? undefined : { x: textXRight }} className="block italic">
            <MaskLine delay={0.08}>QUEM</MaskLine>
          </motion.span>
          <motion.span style={reduce ? undefined : { x: textXLeft }} className="block">
            <MaskLine delay={0.16}>VOCÊ É.</MaskLine>
          </motion.span>
        </motion.h1>
        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-auto">
          <p className="max-w-[34ch] text-sm leading-relaxed opacity-80">
            A roupa não define você. Mas pode contar muito sobre quem você é.
            Feita em Brasília, entre o concreto e o movimento.
          </p>
          <Link
            href="/colecoes/somos-as-cores"
            className="group inline-flex items-center gap-3 bg-bone text-ink px-7 py-4 text-[12px] tracking-[0.3em] uppercase font-bold w-fit hover:bg-white transition"
          >
            Explorar a coleção
            <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </motion.div>

      {/* indicador scroll */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 editorial-label opacity-50 animate-pulse" aria-hidden>
        scroll
      </div>
    </section>
  );
}

/* ============ A FERRETTI ============ */
function Manifesto() {
  return (
    <section className="bg-bone py-28 md:py-44" aria-label="A Ferretti">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-8">
          <Reveal>
            <p className="editorial-label opacity-50 mb-8">01 — A Ferretti</p>
          </Reveal>
          <h2 className="font-serif-display text-[11.5vw] md:text-[6.2vw] leading-[0.9]">
            <MaskLine>MODA NÃO É</MaskLine>
            <MaskLine delay={0.06}>SÓ O QUE VOCÊ VESTE.</MaskLine>
            <span className="block mt-4 italic opacity-90">
              <MaskLine delay={0.12}>É como você se</MaskLine>
              <MaskLine delay={0.18}>apresenta ao mundo.</MaskLine>
            </span>
          </h2>
          <Reveal delay={0.1} className="mt-10 max-w-xl">
            <p className="leading-relaxed opacity-80">
              A Ferretti Wear nasceu em Brasília para criar roupas que acompanham pessoas
              reais — diferentes corpos, diferentes rotinas, diferentes formas de existir.
            </p>
            <p className="mt-4 editorial-label">Moda autoral · Agênero · Atemporal</p>
            <Link href="/a-ferretti" className="inline-flex items-center gap-2 mt-6 text-[12px] tracking-[0.25em] uppercase font-bold border-b border-ink pb-1">
              Conhecer a história <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
        <div className="md:col-span-4">
          <Reveal delay={0.15}>
            <EditorialImage color="#E85D1F" label="Editorial Ferretti" sub="corpo × tecido" tall href="/looks" />
            <p className="text-xs mt-3 opacity-50">Corpos reais, modelagem agênero, conforto e elegância.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ BRASÍLIA — WOW #3 ============ */
function Brasilia() {
  const [hover, setHover] = useState(false);
  return (
    <section className="bg-ink text-bone py-28 md:py-40 overflow-clip" aria-label="Feita em Brasília">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="editorial-label opacity-50">02 — Feita em Brasília</p>
          <h2 className="font-serif-display text-[12vw] md:text-[7vw] leading-[0.88] mt-6">
            ENTRE O CONCRETO<br /><span className="italic">E O MOVIMENTO.</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 mt-14 items-stretch">
          <Reveal>
            <div
              className="relative aspect-[4/5] overflow-hidden cursor-crosshair"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onFocus={() => setHover(true)}
              onBlur={() => setHover(false)}
              tabIndex={0}
              role="img"
              aria-label="Interação: arquitetura de Brasília revela modelo Ferretti ao passar o mouse"
            >
              {/* camada arquitetura */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${hover ? "opacity-0" : "opacity-100"}`}
                style={{
                  background:
                    "repeating-linear-gradient(0deg, #3a3835 0 14px, #8E8C86 14px 16px), linear-gradient(180deg,#b9c3d4,#8E8C86)",
                }}
                aria-hidden
              >
                <span className="absolute top-6 left-6 editorial-label bg-ink/70 px-3 py-2">Eixo Monumental — concreto</span>
              </div>
              {/* camada roupa */}
              <div
                className={`absolute inset-0 transition-all duration-700 ${hover ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                style={{ background: "linear-gradient(120deg,#E85D1F 0 45%, #5B2A86 45% 75%, #1E6B3A 75% 100%)" }}
                aria-hidden
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[52%] h-[80%] rounded-t-full bg-ink/85" />
                <span className="absolute top-6 left-6 editorial-label bg-bone text-ink px-3 py-2">Ferretti — corpo em movimento</span>
              </div>
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.3em] uppercase bg-bone text-ink px-4 py-2">
                {hover ? "Concreto → corpo" : "Passe o mouse — revele →"}
              </span>
            </div>
          </Reveal>
          <div className="flex flex-col justify-between gap-8">
            <Reveal delay={0.1}>
              <p className="text-lg md:text-2xl leading-relaxed opacity-85 max-w-[36ch]">
                A geometria de Brasília encontra a fluidez da roupa.
                Arquitetura rígida fora. Liberdade dentro.
              </p>
              <p className="mt-6 text-sm opacity-60 max-w-[52ch] leading-relaxed">
                Não é um site turístico. Brasília é direção de arte: linhas, sombras,
                luz dura, céu aberto, Cerrado. O neutro da cidade faz a cor da roupa vibrar.
              </p>
            </Reveal>
            <div className="grid grid-cols-3 gap-3">
              {[
                { c: "#8E8C86", t: "Concreto" },
                { c: "#E85D1F", t: "Cerrado" },
                { c: "#1D4ED8", t: "Céu" },
              ].map((x) => (
                <Reveal key={x.t}>
                  <div className="aspect-square" style={{ background: x.c }} aria-hidden />
                  <p className="text-[10px] tracking-[0.3em] uppercase mt-2 opacity-60">{x.t}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SOMOS AS CORES — WOW #2 sticky color shift ============ */
function Cores() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative bg-bone" aria-label="Somos as cores" style={{ height: "520svh" }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden flex flex-col justify-center">
        <ColorWash progress={scrollYProgress} />
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10 w-full">
          <p className="editorial-label opacity-60">03 — Somos as cores · Campanha 2026</p>
          <h2 className="font-serif-display text-[20vw] md:text-[11vw] leading-[0.82] mt-2">
            SOMOS<br />AS <span className="italic">CORES.</span>
          </h2>
          <ColorSteps progress={scrollYProgress} />
          <Link href="/colecoes/somos-as-cores" className="inline-flex items-center gap-2 mt-8 text-[12px] tracking-[0.3em] uppercase font-bold border-b border-current pb-1 w-fit">
            Entrar na campanha <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ColorWash({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const bg = useTransform(
    progress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#F4F1E8", "#E85D1F", "#5B2A86", "#1D4ED8", "#1E6B3A", "#E8B400"]
  );
  return <motion.div className="absolute inset-0" style={{ backgroundColor: bg }} aria-hidden />;
}

function ColorSteps({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  // mostra look ativo conforme scroll — sem hooks condicionais
  return (
    <div className="mt-8 flex gap-3 flex-wrap" aria-hidden>
      {COLORS.map((c, i) => (
        <Step key={c.name} progress={progress} index={i} total={COLORS.length} color={c} />
      ))}
    </div>
  );
}

function Step({ progress, index, total, color }: { progress: ReturnType<typeof useScroll>["scrollYProgress"]; index: number; total: number; color: { name: string; hex: string; look: string } }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, (start + end) / 2, end], [0.25, 1, 0.25]);
  const y = useTransform(progress, [start, end], [14, -14]);
  return (
    <motion.div style={{ opacity, y }} className="flex items-center gap-2 bg-ink/85 text-bone px-4 py-2 rounded-full text-[11px] tracking-[0.25em] uppercase">
      <span className="w-3 h-3 rounded-full" style={{ background: color.hex }} />
      {color.name} · {color.look}
    </motion.div>
  );
}

/* ============ COLEÇÃO assimétrica ============ */
function Colecao() {
  return (
    <section className="bg-bone py-28 md:py-40" aria-label="Coleção">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal>
            <p className="editorial-label opacity-50">04 — A coleção</p>
            <h2 className="font-serif-display text-[11vw] md:text-[5.5vw] leading-[0.9] mt-4">
              UMA PEÇA.<br /><span className="italic">MUITAS POSSIBILIDADES.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/pecas" className="inline-flex items-center gap-2 text-[12px] tracking-[0.3em] uppercase font-bold border-b border-ink pb-1">
              Ver todas as peças <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 mt-14">
          {PIECES.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={Math.min(i * 0.06, 0.3)}
              className={
                p.span === "XL"
                  ? "col-span-12 md:col-span-7"
                  : p.span === "M"
                    ? "col-span-6 md:col-span-3"
                    : "col-span-6 md:col-span-2"
              }
            >
              <Link href={`/pecas/${p.slug}`} className="group block" aria-label={`${p.name} — ${p.fabric}`}>
                <EditorialImage color={p.colors[0]} label={p.editorialNote} sub={p.fabric} tall={p.span !== "S"} />
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-serif-display text-xl md:text-2xl leading-none group-hover:italic transition">{p.name}</p>
                    <p className="text-[11px] tracking-[0.2em] uppercase opacity-50 mt-1">{p.category} · {p.fabric}</p>
                  </div>
                  <span className="text-[11px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Ver peça →
                  </span>
                </div>
                <p className="text-xs mt-1 opacity-60">Sob consulta · {p.availability}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ LOOKS / PESSOAS REAIS / ATEMPORAL / MATÉRIA / SALOMÃO / RUNWAY ============ */
function Looks() {
  const [active, setActive] = useState(LOOKS[0]);
  return (
    <section className="bg-ink text-bone py-28 md:py-40" aria-label="Looks">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="editorial-label opacity-50">05 — Looks</p>
          <h2 className="font-serif-display text-[11vw] md:text-[6vw] leading-[0.9] mt-4">
            NÃO É A ROUPA.<br /><span className="italic">É QUEM VESTE.</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-1" role="list">
            {LOOKS.map((l) => (
              <button
                key={l.id}
                role="listitem"
                onMouseEnter={() => setActive(l)}
                onFocus={() => setActive(l)}
                onClick={() => setActive(l)}
                className={`w-full text-left flex items-baseline justify-between border-b border-bone/15 py-5 transition ${active.id === l.id ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                aria-label={`${l.title} — ${l.colorName}`}
              >
                <span className="font-serif-display text-4xl md:text-6xl">{l.title}</span>
                <span className="text-[11px] tracking-[0.3em] uppercase flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full inline-block" style={{ background: l.color }} aria-hidden />
                  {l.colorName}
                </span>
              </button>
            ))}
          </div>
          <Reveal className="md:sticky md:top-28 self-start">
            <div className="aspect-[4/5] relative overflow-hidden" style={{ background: active.color }} role="img" aria-label={`${active.title} em ${active.colorName}`}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[54%] h-[82%] rounded-t-full bg-ink/85" aria-hidden />
              <p className="absolute bottom-6 left-6 right-6 font-serif-display italic text-2xl md:text-3xl text-bone">{active.statement}</p>
            </div>
            <Link href="/looks" className="inline-flex items-center gap-2 mt-5 text-[12px] tracking-[0.3em] uppercase font-bold border-b border-bone pb-1">
              Comprar o look <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PessoasReais() {
  return (
    <section className="bg-bone py-28 md:py-40" aria-label="Moda para pessoas reais">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="editorial-label opacity-50">06 — Pessoas reais</p>
          <h2 className="font-serif-display text-[12vw] md:text-[6.5vw] leading-[0.88] mt-4 max-w-6xl">
            NÃO EXISTE UM CORPO CERTO PARA A ROUPA.
          </h2>
          <p className="font-serif-display italic text-[7vw] md:text-[3vw] mt-2 opacity-80">
            Existe a roupa que faz sentido para você.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {[
            { c: "#E85D1F", t: "Corpos diversos" },
            { c: "#5B2A86", t: "Idades diversas" },
            { c: "#1E6B3A", t: "Estilos diversos" },
          ].map((x) => (
            <Reveal key={x.t}>
              <EditorialImage color={x.c} label={x.t} sub="individualidade" tall />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="text-sm opacity-60 max-w-[60ch]">Diversidade como linguagem — não como marketing superficial. A mesma linguagem de moda, em diferentes corpos, identidades e personalidades.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Atemporal() {
  return (
    <section className="border-y border-ink/10 bg-bone py-24 md:py-36" aria-label="Atemporalidade">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <h2 className="font-serif-display text-[13vw] md:text-[5.5vw] leading-[0.88]">
            TENDÊNCIA<br />PASSA.<br /><span className="italic">ESTILO FICA.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex gap-2 flex-wrap">
            {["Dia", "Trabalho", "Jantar", "Evento", "Viagem", "Cidade"].map((t) => (
              <span key={t} className="text-[11px] tracking-[0.25em] uppercase border border-ink/20 rounded-full px-5 py-2.5">{t}</span>
            ))}
          </div>
          <p className="mt-6 opacity-70 leading-relaxed max-w-[48ch]">
            Uma peça, muitas possibilidades. Consumo consciente começa no desenho:
            modelagem que atravessa ocasiões sem datar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Materia() {
  const mats = [
    { n: "LINHO", d: "Leve. Respirável. Atemporal.", c: "#E5E0D3" },
    { n: "ALGODÃO", d: "Conforto natural, toque macio.", c: "#F4F1E8" },
    { n: "VISCOSE", d: "Fluidez e caimento em movimento.", c: "#d8d3c5" },
    { n: "CROCHÊ / MACRAMÊ", d: "Mão, tempo e origem.", c: "#E8B400" },
    { n: "LESÉ 3D", d: "Textura tátil, detalhe artesanal.", c: "#8E8C86" },
  ];
  return (
    <section className="bg-bone py-28 md:py-40" aria-label="Tecidos e artesania">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="editorial-label opacity-50">07 — Matéria</p>
          <h2 className="font-serif-display text-[11vw] md:text-[5.5vw] leading-[0.9] mt-4">TOQUE ANTES<br />DO <span className="italic">CONCEITO.</span></h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-5 border-t border-ink/15">
          {mats.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.05} className="border-b md:border-b-0 md:border-l first:border-l-0 border-ink/15 py-8 md:px-6 first:pl-0 group hover:bg-ink hover:text-bone transition-colors duration-500">
              <div className="w-14 h-14 rounded-full mb-6 border border-current" style={{ background: m.c }} aria-hidden />
              <p className="font-serif-display text-3xl">{m.n}</p>
              <p className="text-sm mt-2 opacity-70">{m.d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="text-xs mt-6 opacity-50">Sem cards verdes de sustentabilidade. Materialidade de verdade: fibras naturais, produção local, tiragem consciente.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Salomao() {
  return (
    <section className="bg-[#E5E0D3] py-28 md:py-40" aria-label="Salomão Ferretti">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <EditorialImage color="#101010" label="Salomão Ferretti" sub="retrato + manifesto" tall />
          </Reveal>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center">
          <Reveal>
            <p className="editorial-label opacity-50">08 — O estilista</p>
            <h2 className="font-serif-display text-[14vw] md:text-[6vw] leading-[0.85] mt-4">SALOMÃO<br />FERRETTI</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="font-serif-display italic text-2xl md:text-4xl leading-tight mt-8 max-w-[24ch]">
              “Brasília estava cinza. Nós fomos as cores.”
            </blockquote>
            <p className="mt-6 opacity-75 leading-relaxed max-w-[56ch]">
              Criador da Ferretti Wear, Salomão desenha em Brasília uma moda autoral
              para pessoas reais — individualidade, corpos diversos, processo criativo
              local e expressão pessoal acima de tendência.
            </p>
            <Link href="/salomao-ferretti" className="inline-flex items-center gap-2 mt-6 text-[12px] tracking-[0.3em] uppercase font-bold border-b border-ink pb-1 w-fit">
              Ler o manifesto <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Runway() {
  return (
    <section className="bg-ink text-bone py-28 md:py-40" aria-label="Ferretti on the runway">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="editorial-label opacity-50">09 — Arquivo</p>
          <h2 className="font-serif-display text-[11vw] md:text-[6vw] leading-[0.88] mt-4">FERRETTI<br /><span className="italic">ON THE RUNWAY</span></h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {[
            { y: "2024", c: "#8E8C86", t: "Origens — concreto e base" },
            { y: "2025", c: "#5B2A86", t: "Transição — a cor entra" },
            { y: "2026", c: "#E85D1F", t: "Somos as cores — 30 looks" },
          ].map((d) => (
            <Link key={d.y} href="/colecoes/somos-as-cores" className="group">
              <Reveal>
                <EditorialImage color={d.c} label={d.y} sub={d.t} />
                <p className="mt-3 flex justify-between text-[11px] tracking-[0.3em] uppercase opacity-70">
                  <span>{d.y}</span><span className="group-hover:translate-x-1 transition">Abrir editorial →</span>
                </p>
              </Reveal>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialPreview() {
  return (
    <section className="bg-bone py-28 md:py-40" aria-label="Editorial">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="editorial-label opacity-50">10 — Editorial</p>
            <h2 className="font-serif-display text-[12vw] md:text-[5.5vw] leading-[0.9] mt-4">REVISTA,<br />NÃO <span className="italic">BLOG.</span></h2>
          </Reveal>
          <Reveal delay={0.1} className="hidden md:block">
            <Link href="/editorial" className="inline-flex items-center gap-2 text-[12px] tracking-[0.3em] uppercase font-bold border-b border-ink pb-1">
              Todas as matérias <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {EDITORIAL_POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link href={`/editorial/${p.slug}`} className="group block border-t border-ink/15 pt-5">
                <p className="text-[10px] tracking-[0.35em] uppercase opacity-50">{p.tag}</p>
                <p className="font-serif-display text-2xl md:text-[1.7rem] leading-[1.02] mt-3 group-hover:italic transition">{p.title}</p>
                <p className="text-sm mt-3 opacity-60">{p.excerpt}</p>
                <span className="inline-block mt-4 text-[11px] tracking-[0.25em] uppercase font-bold">Ler →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feed() {
  return (
    <section className="bg-bone pb-28 md:pb-40" aria-label="From the feed">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <div className="flex items-end justify-between">
            <h2 className="font-serif-display text-[11vw] md:text-[4.5vw] leading-[0.9]">FROM<br />THE <span className="italic">FEED</span></h2>
            <a href={STORE.instagramUrl} target="_blank" rel="noreferrer" className="text-[12px] tracking-[0.3em] uppercase font-bold border-b border-ink pb-1 whitespace-nowrap">
              {STORE.instagram} →
            </a>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3 mt-10">
          {["#E85D1F", "#5B2A86", "#1D4ED8", "#1E6B3A", "#E8B400", "#101010"].map((c, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <a href={STORE.instagramUrl} target="_blank" rel="noreferrer" aria-label={`Abrir Instagram Ferretti — imagem ${i + 1}`}>
                <div className="aspect-square relative overflow-hidden group" style={{ background: `linear-gradient(135deg, ${c}, #101010)` }}>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-ink/40 text-bone text-[11px] tracking-[0.3em] uppercase">View</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="text-xs mt-4 opacity-50">Campanhas · desfiles · looks · bastidores · pessoas · loja. Grid editorial conectado ao Instagram real.</p>
      </div>
    </section>
  );
}

function Casa() {
  return (
    <section className="bg-[#101010] text-bone py-28 md:py-40 border-t border-bone/10" aria-label="Casa Ferretti">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="editorial-label opacity-50">11 — A loja</p>
          <h2 className="font-serif-display text-[13vw] md:text-[5.5vw] leading-[0.88] mt-4">VISITE A<br />CASA <span className="italic">FERRETTI.</span></h2>
          <p className="mt-8 flex items-start gap-2 opacity-80"><MapPin size={18} className="mt-0.5 shrink-0" /> {STORE.address}<br />{STORE.city}</p>
          <p className="mt-2 text-sm opacity-60">Físico: {STORE.hoursPhysical} · {STORE.hoursOnline}</p>
          <div className="flex gap-4 mt-8 flex-wrap">
            <Link href="/casa-ferretti" className="inline-flex items-center gap-2 bg-bone text-ink px-7 py-4 text-[12px] tracking-[0.3em] uppercase font-bold">
              Como chegar <ArrowUpRight size={15} />
            </Link>
            <Link href="/contato" className="inline-flex items-center gap-2 border border-bone/30 px-7 py-4 text-[12px] tracking-[0.3em] uppercase font-bold hover:bg-bone hover:text-ink transition">
              Falar com a loja
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <EditorialImage color="#1E6B3A" label="Casa Ferretti" sub="CLN 102 Norte" tall />
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Brasilia />
      <Cores />
      <Colecao />
      <Looks />
      <PessoasReais />
      <Atemporal />
      <Materia />
      <Salomao />
      <Runway />
      <EditorialPreview />
      <Feed />
      <Casa />
    </>
  );
}
