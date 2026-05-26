import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // NOTE: do not set `output: 'export'`. The contact form relies on the
  // /api/contact route handler, which requires a server runtime (Vercel
  // serverless functions). A static export drops API routes entirely.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
