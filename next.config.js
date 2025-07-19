import fs from 'fs'
import path from 'path'
import frontmatter from 'gray-matter'

// Resolve root directory explicitly to avoid ambiguity
const ROOT = process.env.ROOT ?? path.resolve(process.cwd())

// Hard-coded language keys to avoid TypeScript import in config file
const languageKeys = ['en', 'es', 'ja', 'pt', 'zh', 'ru', 'fr', 'ko', 'de']

// Read homepage frontmatter to get product IDs
const homepage = path.posix.join(ROOT, 'content/index.md')
const { data } = frontmatter(fs.readFileSync(homepage, 'utf8'))
const productIds = data.children

const DEFAULT_VERSION = 'free-pro-team@latest'

export default {
  // Speed up production `next build` by ignoring typechecking during build
  // Type-checking still occurs in Dockerfile build step
  typescript: {
    ignoreBuildErrors: true,
  },

  // Prevent ESLint errors from breaking builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  i18n: {
    locales: languageKeys,
    defaultLocale: 'en',
  },

  sassOptions: {
    quietDeps: true,
    // Silence specific deprecation warnings from sass compiler
    silenceDeprecations: [
      'legacy-js-api',
      'import',
      'global-builtin',
      'color-4-api',
      'mixed-decls',
    ],
  },

  async rewrites() {
    return productIds.map((productId) => ({
      source: `/${productId}/:path*`,
      destination: `/${DEFAULT_VERSION}/${productId}/:path*`,
    }))
  },

  webpack(config) {
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    // Prevent bundling node 'fs' module on client-side
    config.resolve.fallback = { fs: false }
    return config
  },

  // Disable compression (optional, depends on your infrastructure)
  compress: false,

  // Disable ETags to avoid stale content issues with CDN
  generateEtags: false,

  experimental: {
    // Increase large page data warning threshold to 1MB
    largePageDataBytes: 1024 * 1024,

    // Enable scroll restoration when navigating back/forward
    scrollRestoration: true,
  },

  compiler: {
    styledComponents: true,
  },
}
