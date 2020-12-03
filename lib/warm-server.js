const statsd = require('./statsd')
const { loadPages, loadPageMap } = require('./pages')
const loadRedirects = require('./redirects/precompile')
const loadSiteData = require('./site-data')
const loadSiteTree = require('./site-tree')

// For local caching
let pageList, pageMap, site, redirects, siteTree

function isFullyWarmed () {
  // NOTE: Yes, `pageList` is specifically excluded here as it is transient data
  const fullyWarmed = !!(pageMap && site && redirects && siteTree)
  return fullyWarmed
}

function getWarmedCache () {
  return {
    pages: pageMap,
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

  if (!pageList || !site) {
    // Promise.all is used to load multiple things in parallel
    [pageList, site] = await Promise.all([
      pageList || loadPages(),
      site || loadSiteData()
    ])
  }

  if (!pageMap) {
    pageMap = await loadPageMap(pageList)
  }

  if (!redirects) {
    redirects = await loadRedirects(pageList, pageMap)
  }

  if (!siteTree) {
    siteTree = await loadSiteTree(pageMap, site, redirects)
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
