import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/team-builder-hf", // team-builder-hf.git
  eslint: { ignoreDuringBuilds: true },
  /* config options here */
};

export default nextConfig;
