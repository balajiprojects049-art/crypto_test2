/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;
