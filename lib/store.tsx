"use client";
import { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type CartItem = {
  slug: string;
  name: string;
  size: string;
  color: string;
  qty: number;
  colors: string[];
};

type Store = {
  cart: CartItem[];
  add: (i: CartItem) => void;
  remove: (slug: string, size: string) => void;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
};

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const value = useMemo<Store>(
    () => ({
      cart,
      add: (i) =>
        setCart((c) => {
          const found = c.find((x) => x.slug === i.slug && x.size === i.size);
          if (found)
            return c.map((x) =>
              x.slug === i.slug && x.size === i.size ? { ...x, qty: x.qty + i.qty } : x
            );
          return [...c, i];
        }),
      remove: (slug, size) => setCart((c) => c.filter((x) => !(x.slug === slug && x.size === size))),
      cartOpen,
      setCartOpen,
      searchOpen,
      setSearchOpen,
      menuOpen,
      setMenuOpen,
    }),
    [cart, cartOpen, searchOpen, menuOpen]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const s = useContext(Ctx);
  if (!s) throw new Error("useStore outside provider");
  return s;
}
