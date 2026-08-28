import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    // Both root layouts live in route groups, so the default 404 would
    // render Next's bare unstyled page; this enables app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
