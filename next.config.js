/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.treehouse-ks.eu',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
}
module.exports = {
  // ...
  unstable_runtimeJS: false,
}
