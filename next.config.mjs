/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/newsite',
  assetPrefix: '/newsite',
   trailingSlash: true,
}

export default nextConfig
