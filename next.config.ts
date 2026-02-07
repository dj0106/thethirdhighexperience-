import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Enable static export for GitHub Pages (only when explicitly set)
  // Note: API routes won't work with static export
  ...(isStaticExport && { output: 'export' }),

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure base path for GitHub Pages (must match repo name: thethirdhighexperience)
  basePath: isProduction ? '/thethirdhighexperience' : '',
  // Configure asset prefix for GitHub Pages
  assetPrefix: isProduction ? '/thethirdhighexperience/' : '',
  // Expose base path to client for fetch() etc.
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? '/thethirdhighexperience' : '',
  },
  // Ensure trailing slash is handled properly
  trailingSlash: true,

  // Optimize build output
  compress: true,

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: isProduction,
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: isProduction,
  },

  // Exclude unnecessary files from build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;
