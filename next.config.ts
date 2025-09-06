import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ ESLint errors ignore karega build ke waqt
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ TypeScript errors ignore karega build ke waqt
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
