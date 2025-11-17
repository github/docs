import statsd from '@/observability/lib/statsd'
import { loadUnversionedTree, loadSiteTree, loadPages, loadPageMap } from './page-data'
import loadRedirects from '@/redirects/lib/precompile'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

type WarmServerResult = {
  pages: Awaited<ReturnType<typeof loadPageMap>>
  redirects: Awaited<ReturnType<typeof loadRedirects>>
  unversionedTree: Awaited<ReturnType<typeof loadUnversionedTree>>
  siteTree: Awaited<ReturnType<typeof loadSiteTree>>
  pageList: Awaited<ReturnType<typeof loadPages>>
  pageMap: Awaited<ReturnType<typeof loadPageMap>>
}

// Instrument these functions so that
// it's wrapped in a timer that reports to Datadog
const dog = {
  loadUnversionedTree: statsd.asyncTimer(loadUnversionedTree, 'load_unversioned_tree'),
  loadSiteTree: statsd.asyncTimer(loadSiteTree, 'load_site_tree'),
  loadPages: statsd.asyncTimer(loadPages, 'load_pages'),
  loadPageMap: statsd.asyncTimer(loadPageMap, 'load_page_map'),
  loadRedirects: statsd.asyncTimer(loadRedirects, 'load_redirects'),
  warmServer: statsd.asyncTimer(warmServer, 'warm_server'),
}

// For multiple-triggered Promise sharing
let promisedWarmServer: Promise<WarmServerResult> | undefined

async function warmServer(languagesOnly: string[] = []): Promise<WarmServerResult> {
  const startTime = Date.now()

  logger.debug(
    `Priming context information...${languagesOnly && languagesOnly.length ? ` ${languagesOnly.join(',')} only` : ''}`,
  )

  const unversionedTree = await dog.loadUnversionedTree(languagesOnly)
  const siteTree = await dog.loadSiteTree(unversionedTree, languagesOnly)
  const pageList = await dog.loadPages(unversionedTree, languagesOnly)
  const pageMap = await dog.loadPageMap(pageList)
  const redirects = await dog.loadRedirects(pageList)

  statsd.gauge('memory_heap_used', process.memoryUsage().heapUsed, ['event:warm-server'])

  logger.debug(`Context primed in ${Date.now() - startTime} ms`)

  return {
    pages: pageMap,
    redirects,
    unversionedTree,
    siteTree,
    pageList,
    pageMap,
  }
}

// Instrument the `warmServer` function so that
// it's wrapped in a timer that reports to Datadog
// dog.warmServer = statsd.asyncTimer(warmServer, 'warm_server') as typeof warmServer

// We only want statistics if the priming needs to occur, so let's wrap the
// real method and return early [without statistics] whenever possible
export default async function warmServerWrapper(languagesOnly: string[] = []) {
  // Handle receiving multiple calls to this method from multiple page requests
  // by holding the in-progress Promise and returning it instead of allowing
  // the server to actually load all of the files multiple times.
  if (!promisedWarmServer) {
    promisedWarmServer = dog.warmServer(languagesOnly)
  }
  return promisedWarmServer
}
