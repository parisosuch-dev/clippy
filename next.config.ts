import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "/**", // This allows all paths under the Discord CDN domain
      },
    ],
  },
};

export default nextConfig;
