import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    preloadEntriesOnStart: false,
    webpackMemoryOptimizations: true,
    middlewarePrefetch: 'strict',
    reactCompiler: true,
    ppr: true,
    cacheComponents: true,
    serverMinification: true,
    nextScriptWorkers: true,
  }
};

export default nextConfig;
