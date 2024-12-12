/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  trailingSlash: true,
  assetPrefix: "./",
  basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
