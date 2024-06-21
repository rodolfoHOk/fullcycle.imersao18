/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/nextjs',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'example.com',
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:8000'],
    },
  },
};

export default nextConfig;
