import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/marathi",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
