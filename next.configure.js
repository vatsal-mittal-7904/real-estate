/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React 18's new features
    experimental: {
      appDir: true,
    },
    webpack: (config) => {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
    },
  };
  
  module.exports = nextConfig;
  