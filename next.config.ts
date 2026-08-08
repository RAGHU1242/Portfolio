import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages deployment
  output: "export",
  basePath: isProd ? "/Portfolio" : "",
  trailingSlash: true,

  // Images must be unoptimized for static export hosting on GitHub Pages
  images: {
    unoptimized: true,
  },

  // Expose basePath to client components for asset linking (e.g. resume PDF)
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/Portfolio" : "",
  },
};

export default nextConfig;
