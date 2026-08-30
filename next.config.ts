import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Canonical home is `/` for the default Marathi mood.
        source: "/marathi",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
