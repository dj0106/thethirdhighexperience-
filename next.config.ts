import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Generate a standalone production build (useful for Docker and minimal runtime images)
  output: 'standalone',
  // ESLint defaults to running during build; keep it strict in CI, but can be relaxed via env if needed
  eslint: {
    // Set to true only if you want to skip ESLint errors during build in some environments
    ignoreDuringBuilds: false,
  },
  // TypeScript checks run during build; keep strict
  typescript: {
    // Set to true only if you want to allow production builds with type errors
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
