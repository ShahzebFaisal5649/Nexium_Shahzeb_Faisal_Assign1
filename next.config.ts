/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable SWC completely and use Babel instead
  swcMinify: false,
  experimental: {
    swcMinify: false,
  },
  // Use Babel for compilation
  babel: {
    presets: ['next/babel'],
  },
  // Ensure stable directory structure
  distDir: '.next',
  // Disable telemetry to avoid issues
  telemetry: {
    enabled: false,
  },
}

module.exports = nextConfig