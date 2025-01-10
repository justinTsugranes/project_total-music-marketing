/**
@type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    deviceSizes: [360, 480, 576, 768, 1200, 1920, 2048, 3840],
    domains: ['cdn.sanity.io', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
