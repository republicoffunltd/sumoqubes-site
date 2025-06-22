/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'github.githubassets.com', 
      'avatars.githubusercontent.com',
      // Add any other external domains you're using
    ],
  },
}

module.exports = nextConfig