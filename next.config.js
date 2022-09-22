/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://media.istockphoto.com']
  }
}

module.exports = nextConfig
