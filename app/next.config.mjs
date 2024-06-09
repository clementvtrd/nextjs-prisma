/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  transpilePackages: [
    "lucide-react",
  ],
  images: {
    remotePatterns: [
      {
        hostname: '*.googleusercontent.com',
        protocol: 'https',
      }
    ]
  }
};

export default nextConfig;
