/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rodrigobrito.dev.br",
      },
    ],
  },
};

export default nextConfig;
