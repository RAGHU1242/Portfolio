import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard Next.js configuration for Vercel deployment at root URL (/)
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
