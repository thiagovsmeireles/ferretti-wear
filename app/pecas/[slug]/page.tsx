import PieceClient from "@/components/PieceClient";
import { PIECES } from "@/lib/data";

export function generateStaticParams() {
  return PIECES.map((p) => ({ slug: p.slug }));
}

export default function PiecePage({ params }: { params: { slug: string } }) {
  return <PieceClient slug={params.slug} />;
}
