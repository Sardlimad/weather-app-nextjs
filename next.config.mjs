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
  output: "export",
};

export default nextConfig;
