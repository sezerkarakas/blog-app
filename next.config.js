/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pexels.com",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
