import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // This enables the new app directory
  },
  reactStrictMode: true, // optional but recommended
};

export default nextConfig;