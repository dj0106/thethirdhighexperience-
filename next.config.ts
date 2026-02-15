import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Always enable static export for GitHub Pages (remove conditional)
  output: 'export',

  // Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },

  // Fix: Match your EXACT repo name with trailing slash
  basePath: '/thethirdhighexperience-',
  assetPrefix: '/thethirdhighexperience-',
  
  // Expose base path to client
  env: {
    NEXT_PUBLIC_BASE_PATH: '/thethirdhighexperience-',
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
