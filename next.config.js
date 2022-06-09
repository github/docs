// import { productIds } from './lib/all-products.js'
// import languages from './lib/languages.js'

const fs = require('fs')
const frontmatter = require('gray-matter')
const path = require('path')
const homepage = path.posix.join(process.cwd(), 'content/index.md')
const { data } = frontmatter(fs.readFileSync(homepage, 'utf8'))
const productIds = data.children

module.exports = {
  // speed up production `next build` by ignoring typechecking during that step of build.
  // type-checking still occurs in the Dockerfile build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    // locales: Object.values(languages).map(({ code }) => code),
    locales: ['en', 'cn', 'ja', 'es', 'pt'],
    defaultLocale: 'en',
  },
  sassOptions: {
    quietDeps: true,
  },
  async rewrites() {
    const DEFAULT_VERSION = 'free-pro-team@latest'
    return productIds.map((productId) => {
      return {
        source: `/${productId}/:path*`,
        destination: `/${DEFAULT_VERSION}/${productId}/:path*`,
      }
    })
  },
  webpack: (config) => {
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    return config
  },

  // https://nextjs.org/docs/api-reference/next.config.js/compression
  compress: false,

  // ETags break stale content serving from the CDN. When a response has
  // an ETag, the CDN attempts to revalidate the content in the background.
  // This causes problems with serving stale content, since upon revalidating
  // the CDN marks the cached content as "fresh".
  generateEtags: false,
}
