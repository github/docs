import { Client } from '@elastic/elasticsearch'
import { safeUrlDisplay } from '@/search/lib/helpers/strings'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

const DEFAULT_REQUEST_TIMEOUT = 5000

// Each Client owns a keep-alive connection pool, so reuse one per process
// instead of opening new connections on every search.
const clients = new Map<string, Client>()

export function getElasticsearchClient(
  overrideURL = '',
  verbose = false,
  options?: { requestTimeout?: number },
): Client {
  const node = getElasticsearchURL(overrideURL)
  if (verbose) {
    logger.info('Connecting to Elasticsearch URL', { url: safeUrlDisplay(node) })
  }
  const requestTimeout = options?.requestTimeout ?? DEFAULT_REQUEST_TIMEOUT
  const key = `${node}|${requestTimeout}`
  let client = clients.get(key)
  if (!client) {
    client = new Client({ node, requestTimeout })
    clients.set(key, client)
  }
  return client
}

function getElasticsearchURL(overrideURL = ''): string {
  if (!process.env.ELASTICSEARCH_URL && !overrideURL) {
    throw new Error(
      'Must pass the elasticsearch URL option or ' +
        'set the environment variable ELASTICSEARCH_URL',
    )
  }
  let node = overrideURL || process.env.ELASTICSEARCH_URL || ''

  // Accept localhost:9200 as shorthand for http://localhost:9200.
  if (!node.startsWith('http') && !node.startsWith('://') && node.split(':').length === 2) {
    node = `http://${node}`
  }

  const parsed = new URL(node)
  if (!parsed.hostname) throw new Error('no valid hostname')

  return node
}
