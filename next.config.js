/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env:{
    uri:"mongodb+srv://noobtuber:noobtuber@cluster0.3dnvq2i.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
