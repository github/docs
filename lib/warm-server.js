const statsd = require('./statsd')
const { loadPages, loadPageMap } = require('./pages')
const loadRedirects = require('./redirects/precompile')
const loadSiteData = require('./site-data')
const loadSiteTree = require('./site-tree')

// Instrument these functions so that
// it's wrapped in a timer that reports to Datadog
const dog = {
  loadPages: statsd.asyncTimer(loadPages, 'load_pages'),
  loadPageMap: statsd.asyncTimer(loadPageMap, 'load_page_map'),
  loadRedirects: statsd.timer(loadRedirects, 'load_redirects'),
  loadSiteData: statsd.timer(loadSiteData, 'load_site_data'),
  loadSiteTree: statsd.asyncTimer(loadSiteTree, 'load_site_tree')
}

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

  if (!pageList) {
    pageList = await dog.loadPages()
  }

  if (!site) {
    site = dog.loadSiteData()
  }

  if (!pageMap) {
    pageMap = await dog.loadPageMap(pageList)
  }

  if (!redirects) {
    redirects = dog.loadRedirects(pageList, pageMap)
  }

  if (!siteTree) {
    siteTree = await dog.loadSiteTree(pageMap, site, redirects)
  }

  if (process.env.NODE_ENV !== 'test') {
    console.log(`Context primed in ${Date.now() - startTime} ms`)
  }

  return getWarmedCache()
}

// Instrument the `warmServer` function so that
// it's wrapped in a timer that reports to Datadog
dog.warmServer = statsd.asyncTimer(warmServer, 'warm_server')

// We only want statistics if the priming needs to occur, so let's wrap the
// real method and return early [without statistics] whenever possible
module.exports = async function warmServerWrapper () {
  // Bail out early if everything is properly ready to use
  if (isFullyWarmed()) {
    return getWarmedCache()
  }

  return dog.warmServer()
}
