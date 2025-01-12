import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utmost-crane-455.convex.cloud',
        pathname: '**', // Use '**' to allow all paths or specify a pattern if needed
      },
    ],
  },
};

export default nextConfig;
