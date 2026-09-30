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
};

export default nextConfig;
