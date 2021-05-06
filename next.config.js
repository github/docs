const { productIds } = require('./lib/all-products')

module.exports = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en'
  },
  async rewrites () {
    const defaultVersionId = 'free-pro-team@latest'
    return productIds.map((productId) => {
      return {
        source: `/${productId}/:path*`,
        destination: `/${defaultVersionId}/${productId}/:path*`
      }
    })
  }
}
