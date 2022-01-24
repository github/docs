import statsd from './statsd.js'
import { loadUnversionedTree, loadSiteTree, loadPages, loadPageMap } from './page-data.js'
import loadRedirects from './redirects/precompile.js'
import loadSiteData from './site-data.js'

// Instrument these functions so that
// it's wrapped in a timer that reports to Datadog
const dog = {
  loadUnversionedTree: statsd.asyncTimer(loadUnversionedTree, 'load_unversioned_tree'),
  loadSiteTree: statsd.asyncTimer(loadSiteTree, 'load_site_tree'),
  loadPages: statsd.asyncTimer(loadPages, 'load_pages'),
  loadPageMap: statsd.asyncTimer(loadPageMap, 'load_page_map'),
  loadRedirects: statsd.asyncTimer(loadRedirects, 'load_redirects'),
  loadSiteData: statsd.timer(loadSiteData, 'load_site_data'),
}

// For multiple-triggered Promise sharing
let promisedWarmServer

async function warmServer() {
  const startTime = Date.now()

  if (process.env.NODE_ENV !== 'test') {
    console.log('Priming context information...')
  }

  const unversionedTree = await dog.loadUnversionedTree()
  const site = dog.loadSiteData()
  const siteTree = await dog.loadSiteTree(unversionedTree, site)
  const pageList = await dog.loadPages(unversionedTree)
  const pageMap = await dog.loadPageMap(pageList)
  const redirects = await dog.loadRedirects(pageList)

  if (process.env.NODE_ENV !== 'test') {
    console.log(`Context primed in ${Date.now() - startTime} ms`)
  }

  return {
    pages: pageMap,
    site,
    redirects,
    unversionedTree,
    siteTree,
  }
}

// Instrument the `warmServer` function so that
// it's wrapped in a timer that reports to Datadog
dog.warmServer = statsd.asyncTimer(warmServer, 'warm_server')

// We only want statistics if the priming needs to occur, so let's wrap the
// real method and return early [without statistics] whenever possible
export default async function warmServerWrapper() {
  // Handle receiving multiple calls to this method from multiple page requests
  // by holding the in-progress Promise and returning it instead of allowing
  // the server to actually load all of the files multiple times.
  if (!promisedWarmServer) {
    promisedWarmServer = dog.warmServer()
  }
  return promisedWarmServer
}
