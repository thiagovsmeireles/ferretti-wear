import Link from "next/link";

/**
 * Direção fotográfica sem stock genérico:
 * blocos concreto × cor que evocam Brasília + roupa.
 * Troque `label` por <Image> real em /public/editorial/*.jpg quando houver asset.
 */
export default function EditorialImage({
  color = "#101010",
  label = "FOTO EDITORIAL",
  sub = "concreto × cor",
  tall = false,
  className = "",
  href,
}: {
  color?: string;
  label?: string;
  sub?: string;
  tall?: boolean;
  className?: string;
  href?: string;
}) {
  const inner = (
    <div
      className={`grain relative overflow-hidden img-editorial group ${tall ? "aspect-[3/4.4]" : "aspect-[4/5]"} ${className}`}
      style={{
        background: `linear-gradient(180deg, rgba(16,16,16,0.08), rgba(16,16,16,0.42)), linear-gradient(112deg, #d8d3c5 0 34%, ${color} 34.2% 100%)`,
      }}
      role="img"
      aria-label={`${label} — ${sub}. Espaço reservado para fotografia real Ferretti.`}
    >
      {/* linhas modernistas */}
      <div className="absolute inset-0 opacity-40" aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(16,16,16,0.55) 0 2px, transparent 2px 88px), linear-gradient(rgba(16,16,16,0.35) 1px, transparent 1px)",
          backgroundSize: "auto, 100% 120px",
        }}
      />
      {/* figura — silhueta editorial abstrata, não stock */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[46%] h-[78%] rounded-t-full transition-transform duration-700 group-hover:scale-[1.04]"
        style={{ background: `linear-gradient(180deg, ${color}, rgba(16,16,16,0.9))` }} aria-hidden />
      <div className="absolute top-6 left-6 right-6 flex justify-between text-bone text-[10px] tracking-[0.35em] uppercase" aria-hidden>
        <span className="bg-ink/60 px-2 py-1 backdrop-blur-sm">{label}</span>
        <span className="bg-ink/60 px-2 py-1 backdrop-blur-sm hidden sm:block">{sub}</span>
      </div>
      <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between" aria-hidden>
        <span className="font-serif-display italic text-bone text-2xl leading-none drop-shadow">Ferretti</span>
        <span className="text-bone/80 text-[10px] tracking-[0.3em] uppercase">BSB — 2026</span>
      </div>
      {/* céu */}
      <div className="absolute top-0 left-0 w-[34%] h-[38%] bg-gradient-to-b from-[#aebfd4] to-[#d8d3c5]" aria-hidden />
    </div>
  );

  if (href) return <Link href={href} className="block">{inner}</Link>;
  return inner;
}
