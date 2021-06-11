const { productIds } = require('./lib/all-products')
const languages = require('./lib/languages')

module.exports = {
  // speed up production `next build` by ignoring typechecking during that step of build.
  // type-checking still occurs in the Dockerfile build
  typescript: {
    ignoreBuildErrors: true
  },
  i18n: {
    locales: Object.values(languages).map(({ code }) => code),
    defaultLocale: 'en'
  },
  async rewrites () {
    const DEFAULT_VERSION = 'free-pro-team@latest'
    return productIds.map((productId) => {
      return {
        source: `/${productId}/:path*`,
        destination: `/${DEFAULT_VERSION}/${productId}/:path*`
      }
    })
  }
}
