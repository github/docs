const statsd = require('./statsd')
const loadPages = require('./pages')
const loadRedirects = require('./redirects/precompile')
const loadSiteData = require('./site-data')
const loadSiteTree = require('./site-tree')

// For local caching
let pages, site, redirects, siteTree

function isFullyWarmed () {
  return Boolean(pages && site && redirects && siteTree)
}

function getWarmedCache () {
  return {
    pages,
    site,
    redirects,
    siteTree
  }
}

async function warmServer () {
  const startTime = Date.now()

  if (process.env.NODE_ENV !== 'test') {
    console.log('Priming context information...')
  }

  if (!pages || !site) {
    // Promise.all is used to load multiple things in parallel
    [pages, site] = await Promise.all([
      pages || loadPages(),
      site || loadSiteData()
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
