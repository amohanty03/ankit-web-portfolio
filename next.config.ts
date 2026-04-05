import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_EMAIL:
      process.env.NEXT_PUBLIC_EMAIL ??
      process.env.PUBLIC_EMAIL ??
      process.env.EMAIL ??
      "",
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1oC9u8BNGaZNHQO2RRRRRTMARnX1D61Mh/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
