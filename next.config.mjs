import { withContentCollections } from "@content-collections/next";

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: 'randomuser.me' },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "d2vwwcvoksz7ty.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["shiki"],
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default withContentCollections(nextConfig);