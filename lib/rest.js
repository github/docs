const { chain, get, groupBy } = require('lodash')
const operations = require('@github/rest-api-operations')
const allVersions = require('./all-versions')
const allVersionKeys = Object.keys(allVersions)

let allCategories = []
allVersionKeys.forEach(currentVersion => {
  // Translate the versions from the openapi to versions used in the docs
  const openApiVersion = allVersions[currentVersion].openApiVersionName

  // Check that the openApiVersion is configured in the OpenAPI
  if (!operations[openApiVersion]) return

  operations[currentVersion] = operations[openApiVersion]
  delete operations[openApiVersion]

  // This list is generated for use in the tests,
  // so we can verify that the names of the markdown files
  // in content/rest/reference/*.md are congruous with the
  // set of REST resource names like activity, gists, repos, etc.
  allCategories = allCategories.concat(chain(operations[currentVersion]).map('category').sort().uniq().value())

  // Attach convenience properties to each operation that can't easily be created in Liquid
  operations[currentVersion].forEach(operation => {
    operation.hasRequiredPreviews = get(operation, 'x-github.previews', []).some(preview => preview.required)
  })
})

// Get the unique set of categories
const categories = [...new Set(allCategories)]

// This is a collection of operations that have `enabledForGitHubApps = true`
// It's grouped by resource title to make rendering easier
const operationsEnabledForGitHubApps = allVersionKeys.reduce((acc, currentVersion) => {
  acc[currentVersion] = chain(operations[currentVersion] || [])
    .filter(operation => operation['x-github'].enabledForGitHubApps)
    .orderBy('category')
    .value()
  acc[currentVersion] = groupBy(acc[currentVersion], 'category')
  return acc
}, {})

module.exports = {
  categories,
  operations,
  operationsEnabledForGitHubApps
}
