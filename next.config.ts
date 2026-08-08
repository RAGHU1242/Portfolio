import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 uses Turbopack by default — no custom webpack config needed.
  // Three.js / R3F are client-only (loaded via dynamic + ssr:false), so
  // no special bundler config is required.

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Empty turbopack config to acknowledge Turbopack usage
  experimental: {},
};

export default nextConfig;
