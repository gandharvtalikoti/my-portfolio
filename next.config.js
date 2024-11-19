/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.snapshot = {
      ...config.snapshot,
      managedPaths: []
    }
    return config
  }
}

module.exports = nextConfig
