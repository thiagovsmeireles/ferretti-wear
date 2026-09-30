import Link from "next/link";
import Image from "next/image";

/**
 * Foto editorial: usa foto real quando `src` existe,
 * senão cai no bloco arte-direcionado concreto × cor (sem stock genérico).
 */
export default function EditorialImage({
  color = "#101010",
  label = "FOTO EDITORIAL",
  sub = "concreto × cor",
  tall = false,
  className = "",
  href,
  src,
  alt,
  position = "50% 30%",
}: {
  color?: string;
  label?: string;
  sub?: string;
  tall?: boolean;
  className?: string;
  href?: string;
  src?: string;
  alt?: string;
  position?: string;
}) {
  const inner = (
    <div
      className={`grain relative overflow-hidden img-editorial group ${tall ? "aspect-[3/4.4]" : "aspect-[4/5]"} ${className}`}
      style={
        src
          ? { background: "#101010" }
          : {
              background: `linear-gradient(180deg, rgba(16,16,16,0.08), rgba(16,16,16,0.42)), linear-gradient(112deg, #d8d3c5 0 34%, ${color} 34.2% 100%)`,
            }
      }
      role={src ? undefined : "img"}
      aria-label={src ? undefined : `${label} — ${sub}. Espaço reservado para fotografia real Ferretti.`}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt ?? `${label} — ${sub}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ objectPosition: position }}
          />
          {/* véu editorial para legibilidade + unidade com a direção de arte */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                "linear-gradient(180deg, rgba(16,16,16,0.22) 0%, rgba(16,16,16,0) 30%, rgba(16,16,16,0) 62%, rgba(16,16,16,0.5) 100%)",
            }}
          />
        </>
      ) : (
        <>
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
          {/* céu */}
          <div className="absolute top-0 left-0 w-[34%] h-[38%] bg-gradient-to-b from-[#aebfd4] to-[#d8d3c5]" aria-hidden />
        </>
      )}
      <div className="absolute top-6 left-6 right-6 flex justify-between text-bone text-[10px] tracking-[0.35em] uppercase" aria-hidden>
        <span className="bg-ink/60 px-2 py-1 backdrop-blur-sm">{label}</span>
        <span className="bg-ink/60 px-2 py-1 backdrop-blur-sm hidden sm:block">{sub}</span>
      </div>
      <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-3" aria-hidden>
        <span className="font-serif-display italic text-bone text-xl leading-none drop-shadow truncate">Ferretti</span>
        <span className="text-bone/80 text-[10px] tracking-[0.3em] uppercase shrink-0">BSB — 2026</span>
      </div>
    </div>
  );

  if (href) return <Link href={href} className="block">{inner}</Link>;
  return inner;
}
