import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  /* config options here */
  images: {
    domains: ['media.lesechos.com'],
  },
};

export default nextConfig;
