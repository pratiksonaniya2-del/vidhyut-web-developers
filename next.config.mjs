/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evolve.nitb.in',
      },
    ],
  },
};

export default nextConfig;