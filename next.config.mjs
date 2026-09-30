/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === "true";
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isPages ? "/ferretti-wear" : "",
  assetPrefix: isPages ? "/ferretti-wear/" : undefined,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Exposto ao bundle do cliente: prefixo manual para <img> não-otimizada,
  // que no export estático não recebe o basePath automaticamente.
  env: {
    NEXT_PUBLIC_BASE_PATH: isPages ? "/ferretti-wear" : "",
  },
};

export default nextConfig;
