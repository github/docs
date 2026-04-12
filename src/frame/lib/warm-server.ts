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

  const langSuffix =
    languagesOnly && languagesOnly.length ? ` (${languagesOnly.join(',')})` : ' (all languages)'

  logger.info(`warm-server: starting${langSuffix}`)

  let stepStart = Date.now()
  const unversionedTree = await dog.loadUnversionedTree(languagesOnly)
  logger.info('warm-server: loadUnversionedTree complete', {
    durationMs: Date.now() - stepStart,
    heapUsedMb: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
  })

  stepStart = Date.now()
  const siteTree = await dog.loadSiteTree(unversionedTree, languagesOnly)
  logger.info('warm-server: loadSiteTree complete', {
    durationMs: Date.now() - stepStart,
    heapUsedMb: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
  })

  stepStart = Date.now()
  const pageList = await dog.loadPages(unversionedTree, languagesOnly)
  logger.info('warm-server: loadPages complete', {
    durationMs: Date.now() - stepStart,
    pageCount: pageList.length,
    heapUsedMb: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
  })

  stepStart = Date.now()
  const pageMap = await dog.loadPageMap(pageList)
  logger.info('warm-server: loadPageMap complete', {
    durationMs: Date.now() - stepStart,
    permalinkCount: Object.keys(pageMap).length,
    heapUsedMb: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
  })

  stepStart = Date.now()
  const redirects = await dog.loadRedirects(pageList)
  logger.info('warm-server: loadRedirects complete', {
    durationMs: Date.now() - stepStart,
    redirectCount: Object.keys(redirects).length,
    heapUsedMb: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
  })

  statsd.gauge('memory_heap_used', process.memoryUsage().heapUsed, ['event:warm-server'])

  logger.info('warm-server: complete', {
    totalDurationMs: Date.now() - startTime,
    heapUsedMb: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
  })

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
