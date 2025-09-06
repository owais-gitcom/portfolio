const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Build ke waqt TypeScript errors ignore karega
    ignoreBuildErrors: true,
  },
};
