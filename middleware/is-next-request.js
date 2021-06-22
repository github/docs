const pathToRegexp = require('path-to-regexp')

const { productIds } = require('../lib/all-products')
const versionIds = Object.keys(require('../lib/all-versions'))

const { FEATURE_NEXTJS } = process.env;

const homePageExp = pathToRegexp('/:locale/:versionId?')
const productPageExp = pathToRegexp('/:locale/:versionId?/:productId')
const subSectionExp = pathToRegexp('/:locale/:versionId?/:productId/:subSection*')

module.exports = function isNextRequest(req, res, next) {
  req.renderWithNextjs = false;

  if (FEATURE_NEXTJS && !req.path.startsWith('/_next/')) {
    if ('nextjs' in req.query) {
      req.renderWithNextjs = true;
    } else {
      // Custom path matching to determine if we should render with nextjs

      // Remove any query string (?...) and/or fragment identifier (#...)
      const { pathname } = new URL(req.originalUrl, "https://docs.github.com");

      // Should the current path be rendered by NextJS?
      const homePageMatch = homePageExp.exec(pathname)
      const productPageMatch = productPageExp.exec(pathname)
      const subSectionMatch = subSectionExp.exec(pathname)
      if (homePageMatch && (!homePageMatch[2] || versionIds.includes(homePageMatch[2]))) {
        req.renderWithNextjs = true
      } else if (productPageMatch && productIds.includes(productPageMatch[3])) {
        req.renderWithNextjs = true
      } else if (subSectionMatch) {
        req.renderWithNextjs = true
      }
    }
  }

  next();
};
