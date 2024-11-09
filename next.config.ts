import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Useful for identifying issues during development
  swcMinify: true,       // Enables faster builds and smaller output
};

export default nextConfig;
