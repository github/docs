import { Client } from '@elastic/elasticsearch'
import { safeUrlDisplay } from '@/search/lib/helpers/strings'

export function getElasticsearchClient(overrideURL = '', verbose = false): Client {
  const node = getElasticsearchURL(overrideURL)
  if (verbose) {
    console.log('Connecting to Elasticsearch URL:', safeUrlDisplay(node))
  }
  const client = new Client({ node })
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

  // Allow the user to lazily set it to `localhost:9200` for example.
  if (!node.startsWith('http') && !node.startsWith('://') && node.split(':').length === 2) {
    node = `http://${node}`
  }

  const parsed = new URL(node)
  if (!parsed.hostname) throw new Error('no valid hostname')

  return node
}
