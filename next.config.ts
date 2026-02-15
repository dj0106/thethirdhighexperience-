import type { NextConfig } from "next";

// For custom domain: always root path (no basePath needed)
// Set these in .env.local for local dev flexibility
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Always static export for GitHub Pages
  output: 'export' as const,

  // Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },

  // NO basePath for custom domain (runs at thirdhighexperience.com root)
  basePath: undefined,
  assetPrefix: undefined,

  env: {
    NEXT_PUBLIC_BASE_PATH: '', // Empty for root domain
  },
  
  // Fix client-side routing
  trailingSlash: true,

  // Optimize build output
  compress: true,

  // Build configs
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;
