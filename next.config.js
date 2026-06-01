/** @type {import('next').NextConfig} */
// When deploying to GitHub Pages as a project site (repo name in the URL),
// Next.js needs a basePath/assetPrefix so /_next/* and /public/* resolve.
// CI sets GITHUB_PAGES=true; local `npm run dev` / `npm run build` stay unprefixed.
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoName = 'Personal-Portfolio'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Static export for GitHub Pages
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  // Expose the basePath to client code so we can prefix raw <img>/<a> URLs if needed
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : '',
  },
  // GitHub Pages serves from a static host; the Next.js Image Optimization
  // server isn't available, so images must be served unoptimized.
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Emit trailing slashes so paths like /about/ resolve to /about/index.html on Pages
  trailingSlash: true,
}

module.exports = nextConfig