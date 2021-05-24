const { productIds } = require('./lib/all-products')
const languages = require('./lib/languages')

module.exports = {
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
