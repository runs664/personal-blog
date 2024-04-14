/** @type {import('next').NextConfig} */

const withNextra = require('nextra') (
  {
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    latex: true,
    i18n: {
      locales: ['en-US', 'id-ID'],
      defaultLocale: 'en-US',
    },
  }
)

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: false,
  runtimeCaching,
});

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

module.exports = withNextra(nextConfig)