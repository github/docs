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
    locales: ['en', 'cn', 'ja', 'es', 'pt', 'de'],
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
}
