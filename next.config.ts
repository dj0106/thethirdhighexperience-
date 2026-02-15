import type { NextConfig } from "next";

// Custom domain thirdhighexperience.com at root (no base path). Set NEXT_PUBLIC_BASE_PATH only for subpath deploys.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Static export for GitHub Pages (custom domain: thirdhighexperience.com)
  output: "export" as const,

  // Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },

  // basePath only when set (e.g. subpath deploy); empty for custom domain at root.
  // When empty, asset URLs stay root-relative (/images/..., etc.) so images load correctly.
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
