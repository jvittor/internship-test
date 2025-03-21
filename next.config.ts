import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['via.placeholder.com', 'mighty.tools'],
  },
};

export default nextConfig;