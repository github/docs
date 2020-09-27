const fetchEarlyAccessPaths = require('./fetch-early-access-paths')
let pages, site, redirects, siteTree, earlyAccessPaths

module.exports = async function warmServer () {
  if (!pages) {
    if (process.env.NODE_ENV !== 'test') {
      console.log('Priming context information')
    }

    // Promise.all is used to load multiple things in parallel
    ;[pages, site, earlyAccessPaths] = await Promise.all([
      require('./pages')(),
      require('./site-data')(),
      fetchEarlyAccessPaths()
    ])

    redirects = await require('./redirects/precompile')(pages)
    siteTree = await require('./site-tree')(pages, site, redirects)
  }

  return {
    pages, site, redirects, siteTree, earlyAccessPaths
  }
}
