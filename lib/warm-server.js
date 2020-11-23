const statsd = require('./statsd')
const fetchEarlyAccessPaths = require('./fetch-early-access-paths')
let pages, site, redirects, siteTree, earlyAccessPaths

async function warmServer () {
  if (!pages) {
    if (process.env.NODE_ENV !== 'test') {
      console.log('Priming context information')
    }

    // Promise.all is used to load multiple things in parallel
    [pages, site, earlyAccessPaths] = await Promise.all([
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

// Instrument the `warmServer` function so that
// it's wrapped in a timer that reports to Datadog
module.exports = statsd.asyncTimer(warmServer, 'warm_server')
