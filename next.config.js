/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
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
