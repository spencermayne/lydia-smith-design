import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://114ar3p2syk6wmma.public.blob.vercel-storage.com/**"),
    ],
    qualities: [50, 75],
  },
};

export default nextConfig;
