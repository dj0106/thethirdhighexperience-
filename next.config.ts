import type { NextConfig } from "next";

// Only use basePath for GitHub Pages production build; local dev uses root
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Static export only when building for GitHub Pages
  ...(process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' ? { output: 'export' as const } : {}),

  // Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },

  basePath: basePath || undefined,
  ...(basePath ? { assetPrefix: basePath } : {}),

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  
  // Fix client-side routing
  trailingSlash: true,

  // Optimize build output
  compress: true,

  // Build configs (keep these)
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;
