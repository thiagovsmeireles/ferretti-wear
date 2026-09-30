import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ferrettiwear.com.br";
  const routes = ["", "/colecoes", "/colecoes/somos-as-cores", "/pecas", "/looks", "/editorial", "/a-ferretti", "/salomao-ferretti", "/casa-ferretti", "/contato"];
  return routes.map((r) => ({ url: base + r, lastModified: new Date(), changeFrequency: "weekly", priority: r === "" ? 1 : 0.7 }));
}
