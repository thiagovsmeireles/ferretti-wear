"use client";
import Link from "next/link";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";
import { useStore } from "@/lib/store";

export default function CartDrawer() {
  const { cart, remove, cartOpen, setCartOpen } = useStore();
  return (
    <div aria-hidden={!cartOpen} className={`fixed inset-0 z-[70] transition-[visibility] duration-[600ms] ${cartOpen ? "visible" : "invisible pointer-events-none"}`}>
      <div
        onClick={() => setCartOpen(false)}
        className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ${
          cartOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Sacola"
        className={`absolute right-0 top-0 h-full w-full max-w-[440px] bg-bone flex flex-col transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
          <span className="editorial-label">Sacola ({cart.reduce((a, b) => a + b.qty, 0)})</span>
          <button aria-label="Fechar sacola" onClick={() => setCartOpen(false)} className="p-2">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col justify-center gap-4">
              <p className="font-serif-display text-4xl leading-[0.95]">
                Sua sacola
                <br />
                está vazia.
              </p>
              <p className="text-sm opacity-60 max-w-[28ch]">
                A roupa não define você. Mas pode contar muito sobre quem você é.
              </p>
              <Link
                href="/pecas"
                onClick={() => setCartOpen(false)}
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.25em] uppercase font-bold border-b border-ink pb-1 w-fit"
              >
                Explorar peças <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            cart.map((i) => (
              <div key={i.slug + i.size} className="flex gap-4">
                <div
                  className="w-20 h-24 shrink-0"
                  style={{ background: `linear-gradient(135deg, ${i.colors[0]}, #101010)` }}
                  aria-hidden
                />
                <div className="flex-1">
                  <p className="font-serif-display text-xl leading-none">{i.name}</p>
                  <p className="text-xs mt-1 opacity-60">
                    {i.color} · {i.size} · Qtd {i.qty}
                  </p>
                  <p className="text-xs mt-1 opacity-60">Valor sob consulta — checkout em arquitetura preparada</p>
                  <button
                    onClick={() => remove(i.slug, i.size)}
                    className="text-[11px] tracking-[0.2em] uppercase underline underline-offset-4 mt-2 opacity-70"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-ink/10 px-6 py-5 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="opacity-60">Subtotal</span>
            <span>Sob consulta</span>
          </div>
          <p className="text-[11px] opacity-50 leading-relaxed">
            E-commerce em arquitetura preparada. Finalização via Casa Ferretti — sem checkout falso.
          </p>
          <Link
            href="/casa-ferretti"
            onClick={() => setCartOpen(false)}
            className="group bg-ink text-bone py-4 px-6 flex items-center justify-between text-[12px] tracking-[0.3em] uppercase font-bold"
          >
            Visite a Casa Ferretti
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" size={16} />
          </Link>
        </div>
      </aside>
    </div>
  );
}
