import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://fszl3md1ja6jsjkk.public.blob.vercel-storage.com/**"),
    ],
    qualities: [50, 75],
  },
};

export default nextConfig;
