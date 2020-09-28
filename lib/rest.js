const { chain, get, union, flatten, groupBy } = require('lodash')
const { supported } = require('./enterprise-server-releases')
const operations = require('@github/rest-api-operations')
// TODO need to update this to the new versions in coordination with openAPI
const { oldVersions } = require('./old-versions-utils')
const allVersions = oldVersions

// This list is generated for use in the tests,
// so we can verify that the names of the markdown files
// in content/rest/reference/*.md are congruous with the
// set of REST resource names like activity, gists, repos, etc.
function getCategories (operations) {
  return chain(operations).map('category').sort().uniq().value()
}
const dotcomCategories = getCategories(operations.dotcom)
const enterpriseCategories = flatten(supported.map(v => getCategories(operations[v])))
const categories = union(dotcomCategories, enterpriseCategories)

// Attach convenience properties to each operation that can't easily be created in Liquid
allVersions.forEach(currentVersion => {
  operations[currentVersion].forEach(operation => {
    operation.hasRequiredPreviews = get(operation, 'x-github.previews', []).some(preview => preview.required)
  })
})

// This is a collection of operations that have `enabledForApps = true`
// It's grouped by resource title to make rendering easier
const operationsEnabledForApps = allVersions.reduce((acc, currentVersion) => {
  acc[currentVersion] = chain(operations[currentVersion] || [])
    .filter(operation => operation['x-github'].enabledForApps)
    .orderBy('category')
    .value()
  acc[currentVersion] = groupBy(acc[currentVersion], 'category')
  return acc
}, {})

module.exports = {
  categories,
  operations,
  operationsEnabledForApps
}
