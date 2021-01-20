const developerRedirects = require('../redirects/static/developer')

// This function runs at server warmup and precompiles possible redirect routes.
// It outputs them in key-value pairs within a neat Javascript object: { oldPath: newPath }
module.exports = function precompileRedirects (pageList) {
  const allRedirects = Object.assign({}, developerRedirects)

  // CURRENT PAGES PERMALINKS AND FRONTMATTER
  // create backwards-compatible old paths for page permalinks and frontmatter redirects
  pageList.forEach(page => Object.assign(allRedirects, page.buildRedirects()))

  return allRedirects
}
