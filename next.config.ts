import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if applicable
        hostname: "sheng2025.vercel.app", // Replace with the actual hostname of your image source
        port: "", // Leave empty unless a specific port is used
        pathname: "", // Adjust if a specific path is required, or use '/**' for all paths
      },
      {
        protocol: "https", // Or 'http' if applicable
        hostname: "travel-japan2025.vercel.app", // Replace with the actual hostname of your image source
        port: "", // Leave empty unless a specific port is used
        pathname: "", // Adjust if a specific path is required, or use '/**' for all paths
      },
      // Add more patterns for other domains if needed
    ],
  },
};

export default nextConfig;
