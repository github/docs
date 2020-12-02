const statsd = require('./statsd')
const fetchEarlyAccessPaths = require('./fetch-early-access-paths')
const loadPages = require('./pages')
const loadRedirects = require('./redirects/precompile')
const loadSiteData = require('./site-data')
const loadSiteTree = require('./site-tree')

// For local caching
let pages, site, redirects, siteTree, earlyAccessPaths

function isFullyWarmed () {
  return Boolean(pages && site && earlyAccessPaths && redirects && siteTree)
}

function getWarmedCache () {
  return {
    pages,
    site,
    redirects,
    siteTree,
    earlyAccessPaths
  }
}

async function warmServer () {
  const startTime = Date.now()

  if (process.env.NODE_ENV !== 'test') {
    console.log('Priming context information...')
  }

  if (!pages || !site || !earlyAccessPaths) {
    // Promise.all is used to load multiple things in parallel
    [pages, site, earlyAccessPaths] = await Promise.all([
      pages || loadPages(),
      site || loadSiteData(),
      earlyAccessPaths || fetchEarlyAccessPaths()
    ])
  }

  if (!redirects) {
    redirects = await loadRedirects(pages)
  }

  if (!siteTree) {
    siteTree = await loadSiteTree(pages, site, redirects)
  }

  if (process.env.NODE_ENV !== 'test') {
    console.log(`Context primed in ${Date.now() - startTime} ms`)
  }

  return getWarmedCache()
}

// Instrument the `warmServer` function so that
// it's wrapped in a timer that reports to Datadog
const instrumentedWarmServer = statsd.asyncTimer(warmServer, 'warm_server')

// We only want statistics if the priming needs to occur, so let's wrap the
// real method and return early [without statistics] whenever possible
module.exports = async function warmServerWrapper () {
  // Bail out early if everything is properly ready to use
  if (isFullyWarmed()) {
    return getWarmedCache()
  }

  return instrumentedWarmServer()
}
