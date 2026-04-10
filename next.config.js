/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'i.ibb.co'],
  },
  transpilePackages: ['framer-motion'],
}

module.exports = nextConfig
