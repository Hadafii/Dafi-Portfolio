import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Abaikan error saat build
  },
  eslint: {
    ignoreDuringBuilds: true, // Abaikan error ESLint saat build
  },
};

export default nextConfig;
