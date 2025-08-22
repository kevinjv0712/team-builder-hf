import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/team-builder-hf" : "",
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
