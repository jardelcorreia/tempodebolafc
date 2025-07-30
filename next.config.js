/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'newsapi.ai',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
