/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/newsletter",
        permanent: true, // 301 redirect (SEO friendly)
      },
    ]
  },
}

export default nextConfig
