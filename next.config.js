/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cms.treehouse-ks.eu',
      'https://cms.treehouse-ks.eu',
      'https://www.cms.treehouse-ks.eu',
      'www.cms.treehouse-ks.eu',
    ],
  },
}

module.exports = nextConfig;
