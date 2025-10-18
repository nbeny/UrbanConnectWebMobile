import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.pexels.com", "www.pexels.com", "localhost", "images.unsplash.com"], // ajouter le domaine de tes images externes
  },
};

export default nextConfig;
