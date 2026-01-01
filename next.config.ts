import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  // Enable static export for GitHub Pages (only in production build)
  // Note: API routes won't work with static export, so we disable it in development
  ...(process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' && { output: 'export' }),
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  basePath: "/thethirdhighexperience",
  assetPrefix: "/thethirdhighexperience/",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
