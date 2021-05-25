const { namePrefix } = require('../../lib/search/config')
const getAlgoliaClient = require('./algolia-client')

module.exports = async function getRemoteIndexNames () {
  const algoliaClient = getAlgoliaClient()
  const indices = await algoliaClient.listIndices()

  // ignore other indices that may be present in the Algolia account like `helphub-`, etc
  const indexNames = indices.items
    .map(field => field.name)
    .filter(name => name.startsWith(namePrefix))

  return indexNames
}
