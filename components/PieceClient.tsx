"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";
import EditorialImage from "@/components/EditorialImage";
import { PIECES } from "@/lib/data";
import { useStore } from "@/lib/store";

export default function PieceClient({ slug }: { slug: string }) {
  const piece = PIECES.find((p) => p.slug === slug);
  const { add, setCartOpen } = useStore();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [err, setErr] = useState("");

  if (!piece) {
    return (
      <div className="pt-32 pb-24 mx-auto max-w-2xl px-5 text-center">
        <p className="font-serif-display text-4xl">Peça não encontrada.</p>
        <Link href="/pecas" className="inline-flex items-center gap-2 mt-6 text-[12px] tracking-[0.3em] uppercase font-bold border-b border-ink pb-1">
          <ArrowLeft size={14} /> Voltar às peças
        </Link>
      </div>
    );
  }

  const c = color || piece.colorNames[0];
  const s = size || "";

  return (
    <div className="pt-28 pb-24 mx-auto max-w-[1600px] px-5 md:px-10">
      <Link href="/pecas" className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100">
        <ArrowLeft size={14} /> Todas as peças
      </Link>
      <div className="grid md:grid-cols-2 gap-10 mt-8">
        <EditorialImage color={piece.colors[0]} label={piece.editorialNote} sub={piece.fabric} tall />
        <div>
          <p className="editorial-label opacity-50">{piece.category} · {piece.fabric}</p>
          <h1 className="font-serif-display text-[11vw] md:text-[4.5vw] leading-[0.96] mt-3">{piece.name}</h1>
          <p className="mt-4 text-sm opacity-70 leading-relaxed">{piece.description}</p>
          <p className="mt-3 text-xs opacity-60">Composição: {piece.composition}</p>
          <p className="mt-2 text-xs opacity-60">{piece.availability}</p>
          <p className="mt-4 font-serif-display italic text-2xl">Sob consulta</p>

          <div className="mt-8">
            <p className="editorial-label opacity-60 mb-3">Cor — {c}</p>
            <div className="flex gap-2 flex-wrap">
              {piece.colorNames.map((cn) => (
                <button
                  key={cn}
                  onClick={() => setColor(cn)}
                  aria-pressed={c === cn}
                  className={`text-[11px] tracking-[0.2em] uppercase border px-4 py-2 rounded-full transition ${c === cn ? "bg-ink text-bone border-ink" : "border-ink/20 hover:border-ink"}`}
                >
                  {cn}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="editorial-label opacity-60 mb-3">Tamanho {s && `— ${s}`}</p>
            <div className="flex gap-2 flex-wrap">
              {piece.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => { setSize(sz); setErr(""); }}
                  aria-pressed={s === sz}
                  className={`text-[11px] tracking-[0.15em] uppercase border px-4 py-2.5 min-w-[56px] transition ${s === sz ? "bg-ink text-bone border-ink" : "border-ink/20 hover:border-ink"}`}
                >
                  {sz}
                </button>
              ))}
            </div>
            {err && <p className="text-sm mt-2 text-red-800" role="alert">{err}</p>}
          </div>

          <button
            onClick={() => {
              if (!s) { setErr("Escolha um tamanho — modelagem agênero, do PP ao GG."); return; }
              add({ slug: piece.slug, name: piece.name, size: s, color: c, qty: 1, colors: piece.colors });
              setCartOpen(true);
            }}
            className="mt-8 w-full bg-ink text-bone py-4 px-6 flex items-center justify-between text-[12px] tracking-[0.3em] uppercase font-bold hover:opacity-90"
          >
            Adicionar à sacola <Plus size={16} />
          </button>
          <p className="text-[11px] opacity-50 mt-3 leading-relaxed">
            Arquitetura de compra preparada: sem checkout falso, sem preço inventado.
            Finalização via Casa Ferretti.
          </p>

          <div className="mt-10 border-t border-ink/10 pt-6 text-sm opacity-70 space-y-2">
            <p><strong>Modelagem:</strong> agênero, para corpos reais.</p>
            <p><strong>Origem:</strong> feita em Brasília — produção local.</p>
            <p><strong>Cuidado:</strong> fibras naturais pedem lavagem suave.</p>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Product",
        name: piece.name, category: piece.category, material: piece.fabric,
        description: piece.description,
      }) }} />
    </div>
  );
}
