import type { NextConfig } from "next";

// For custom domain: use ''. For GitHub Pages: set in build script (e.g. /thethirdhighexperience-)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Always static export for GitHub Pages
  output: "export" as const,

  // Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },

  // basePath so Next.js prefixes all routes and public assets (fixes prod images on GitHub Pages)
  ...(basePath && { basePath, assetPrefix: basePath }),

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  // Fix client-side routing
  trailingSlash: true,

  // Optimize build output
  compress: true,

  // Build configs
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === "production",
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === "production",
  },
  pageExtensions: ["tsx", "ts", "jsx", "js"],
};

export default nextConfig;
