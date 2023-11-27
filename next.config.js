/** @type {import('next').NextConfig} */

const withNextra = require('nextra') (
  {
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    latex: true
  }
)

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withNextra(nextConfig)
