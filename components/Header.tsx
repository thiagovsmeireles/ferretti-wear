"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useStore } from "@/lib/store";

const LINKS = [
  { href: "/colecoes", label: "Coleções" },
  { href: "/pecas", label: "Peças" },
  { href: "/looks", label: "Looks" },
  { href: "/editorial", label: "Editorial" },
  { href: "/a-ferretti", label: "A Ferretti" },
  { href: "/casa-ferretti", label: "Casa Ferretti" },
];

export default function Header() {
  const { cart, setCartOpen, setSearchOpen, menuOpen, setMenuOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-bone/90 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto max-w-[1600px] px-5 md:px-10 flex items-center justify-between transition-all ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <button
            className="md:hidden p-2 -ml-2"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
            {LINKS.slice(0, 3).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] tracking-[0.25em] uppercase font-semibold hover:opacity-50 transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/" aria-label="Ferretti Wear — início" className="text-center">
            <span className="font-serif-display text-[26px] md:text-[32px] leading-none block">
              ferretti
            </span>
            <span className="block text-[9px] tracking-[0.4em] uppercase opacity-60 -mt-0.5">
              Brasília — Moda autoral
            </span>
          </Link>

          <div className="flex items-center gap-1 md:gap-2">
            <nav className="hidden md:flex items-center gap-7 mr-6" aria-label="Secundária">
              {LINKS.slice(3).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[11px] tracking-[0.25em] uppercase font-semibold hover:opacity-50 transition"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <button
              aria-label="Buscar"
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:opacity-50 transition"
            >
              <Search size={19} strokeWidth={1.5} />
            </button>
            <button
              aria-label={`Abrir sacola, ${cart.length} itens`}
              onClick={() => setCartOpen(true)}
              className="p-2 hover:opacity-50 transition relative"
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              {cart.length > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-ink text-bone text-[10px] flex items-center justify-center">
                  {cart.reduce((a, b) => a + b.qty, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* mobile fullscreen editorial menu */}
      <div
        className={`fixed inset-0 z-[60] bg-ink text-bone flex flex-col transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="editorial-label opacity-60">Ferretti Wear — Brasília</span>
          <button aria-label="Fechar menu" onClick={() => setMenuOpen(false)} className="p-2">
            <X size={24} strokeWidth={1.2} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-center px-8 gap-1" aria-label="Menu mobile">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif-display text-[13vw] leading-[0.95] hover:italic hover:translate-x-2 transition-all"
            >
              <span className="text-[11px] align-super mr-3 font-sans tracking-widest opacity-50">
                0{i + 1}
              </span>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="px-8 pb-10 flex justify-between text-[11px] tracking-[0.3em] uppercase opacity-70">
          <span>VISTA QUEM VOCÊ É</span>
          <span>@ferrettiwear →</span>
        </div>
      </div>
    </>
  );
}
