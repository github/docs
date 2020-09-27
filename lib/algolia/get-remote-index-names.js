const algoliaClient = require('./client')
const AlgoliaIndex = require('./search-index')

module.exports = async function getRemoteIndexNames () {
  const indices = await algoliaClient.listIndexes()

  // ignore other indices that may be present in the Algolia account like `helphub-`, etc
  const indexNames = indices.items
    .map(field => field.name)
    .filter(name => name.startsWith(AlgoliaIndex.namePrefix))

  return indexNames
}
