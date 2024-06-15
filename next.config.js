// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ["img.youtube.com"],
  },
};

module.exports = nextConfig;
