"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useStore } from "@/lib/store";
import { PIECES, EDITORIAL_POSTS } from "@/lib/data";

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore();
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return [
      ...PIECES.filter((p) =>
        `${p.name} ${p.category} ${p.fabric}`.toLowerCase().includes(s)
      ).map((p) => ({ type: "Peça", title: p.name, href: `/pecas/${p.slug}` })),
      ...EDITORIAL_POSTS.filter((p) =>
        `${p.title} ${p.tag}`.toLowerCase().includes(s)
      ).map((p) => ({ type: p.tag, title: p.title, href: `/editorial/${p.slug}` })),
    ];
  }, [q]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-bone flex flex-col" role="dialog" aria-label="Busca">
      <div className="flex items-center justify-between px-5 md:px-10 py-5">
        <span className="editorial-label opacity-60">Ferretti — Busca</span>
        <button aria-label="Fechar busca" onClick={() => setSearchOpen(false)} className="p-2">
          <X size={22} strokeWidth={1.4} />
        </button>
      </div>
      <div className="px-5 md:px-10 max-w-5xl w-full mx-auto pt-10">
        <label htmlFor="search" className="editorial-label opacity-60">
          O que você procura?
        </label>
        <input
          id="search"
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="linho, roxo, vestido, Brasília…"
          className="w-full bg-transparent font-serif-display text-[11vw] md:text-7xl leading-none py-4 border-b border-ink/20 placeholder:opacity-25 focus:outline-none"
        />
        <div className="py-8 space-y-3">
          {q.trim() === "" ? (
            <div className="flex flex-wrap gap-2">
              {["Linho", "Viscose", "Roxo", "Alfaiataria", "Crochê", "Brasília"].map((t) => (
                <button
                  key={t}
                  onClick={() => setQ(t)}
                  className="text-[11px] tracking-[0.25em] uppercase border border-ink/20 rounded-full px-4 py-2 hover:bg-ink hover:text-bone transition"
                >
                  {t}
                </button>
              ))}
            </div>
          ) : results.length === 0 ? (
            <p className="opacity-60">Nada encontrado para “{q}”. Tente “linho” ou “Brasília”.</p>
          ) : (
            results.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                onClick={() => setSearchOpen(false)}
                className="flex items-baseline justify-between border-b border-ink/10 py-4 group"
              >
                <span className="font-serif-display text-2xl md:text-4xl group-hover:italic transition">
                  {r.title}
                </span>
                <span className="text-[11px] tracking-[0.3em] uppercase opacity-50">{r.type} →</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
