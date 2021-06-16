const pathToRegexp = require('path-to-regexp')

const { FEATURE_NEXTJS } = process.env;

const productIds = [
  // 'actions',
  'admin',
  "billing",
  "code-security",
  "codespaces",
  "communities",
  "desktop",
  "developers",
  "discussions",
  // 'early-access',
  "education",
  // 'github',
  "graphql",
  // 'insights',
  "issues",
  "organizations",
  // 'packages',
  "pages",
  "rest",
  "sponsors",
];

const landingPageExp = pathToRegexp('/:locale/:versionId?/:productId')

module.exports = function isNextRequest(req, res, next) {
  req.renderWithNextjs = false;

  if (FEATURE_NEXTJS) {
    if ('nextjs' in req.query) {
      req.renderWithNextjs = true;
    } else {
      // Custom path matching to determine if we should render with nextjs

      // Remove any query string (?...) and/or fragment identifier (#...)
      const { pathname } = new URL(req.originalUrl, "https://docs.github.com");

      // Should the current path be rendered by NextJS?
      const landingPageMatch = landingPageExp.exec(pathname)
      if (landingPageMatch) {
        const productId = landingPageMatch[3]
        req.renderWithNextjs = productIds.includes(productId)
      }
    }
  }

  next();
};
