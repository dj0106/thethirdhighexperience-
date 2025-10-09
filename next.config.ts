import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Enable static export for GitHub Pages
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Configure base path for GitHub Pages (repository name)
  basePath: process.env.NODE_ENV === 'production' ? '/thethirdhighexperience' : '',
  // Configure asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/thethirdhighexperience/' : '',
  // Ensure trailing slash is handled properly
  trailingSlash: true,
  // ESLint defaults to running during build; keep it strict in CI, but can be relaxed via env if needed
  eslint: {
    // Set to true only if you want to skip ESLint errors during build in some environments
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  // TypeScript checks run during build; keep strict
  typescript: {
    // Set to true only if you want to allow production builds with type errors
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
