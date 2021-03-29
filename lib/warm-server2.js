const statsd = require('./statsd')
const loadPageData = require('./page-data')
const loadRedirects = require('./redirects/precompile')
const loadSiteData = require('./site-data')

// Instrument these functions so that
// it's wrapped in a timer that reports to Datadog
const dog = {
  loadPageData: statsd.asyncTimer(loadPageData, 'load_page_data'),
  loadRedirects: statsd.asyncTimer(loadRedirects, 'load_redirects'),
  loadSiteData: statsd.timer(loadSiteData, 'load_site_data')
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

  if (!siteTree) {
    const pageData = await dog.loadPageData()
    siteTree = pageData.siteTree
    pageList = pageData.pageList
    pageMap = pageData.pageMap
  }

  if (!site) {
    site = dog.loadSiteData()
  }

  if (!redirects) {
    redirects = await dog.loadRedirects(pageList)
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
