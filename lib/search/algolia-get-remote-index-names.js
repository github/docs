const { namePrefix } = require('./config')
const getAlgoliaClient = require('./algolia-client')

module.exports = async function getRemoteIndexNames () {
  const algoliaClient = getAlgoliaClient()
  const indices = await algoliaClient.listIndexes()

  // ignore other indices that may be present in the Algolia account like `helphub-`, etc
  const indexNames = indices.items
    .map(field => field.name)
    .filter(name => name.startsWith(namePrefix))

  return indexNames
}
