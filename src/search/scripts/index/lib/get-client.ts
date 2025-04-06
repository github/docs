import { Client } from '@elastic/elasticsearch'

export function getClient(): Client {
  const node = getElasticsearchURL()
  const client = new Client({ node })
  return client
}

function getElasticsearchURL() {
  if (!process.env.ELASTICSEARCH_URL) {
    throw new Error(
      'Must passed the elasticsearch URL option or ' +
        'set the environment variable ELASTICSEARCH_URL',
    )
  }
  let node = process.env.ELASTICSEARCH_URL

  // Allow the user to lazily set it to `localhost:9200` for example.
  if (!node.startsWith('http') && !node.startsWith('://') && node.split(':').length === 2) {
    node = `http://${node}`
  }

  const parsed = new URL(node)
  if (!parsed.hostname) throw new Error('no valid hostname')

  return node
}
