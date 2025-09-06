import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Build ke waqt lint errors ko ignore karega
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
