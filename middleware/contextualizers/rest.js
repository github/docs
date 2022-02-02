import path from 'path'
import getRest from '../../lib/rest/index.js'
import removeFPTFromPath from '../../lib/remove-fpt-from-path.js'

// Global cache to avoid calling getRest() more than once
let rest = null

export default async function restContext(req, res, next) {
  // Bail early because these are pointless to contextualize
  if (req.path.startsWith('/_next/static')) return next()

  if (!rest) {
    rest = await getRest()
  }
  req.context.rest = rest

  // link to include in `Works with GitHub Apps` notes
  // e.g. /ja/rest/reference/apps or /en/enterprise/2.20/user/rest/reference/apps
  req.context.restGitHubAppsLink = removeFPTFromPath(
    path.join('/', req.context.currentLanguage, req.context.currentVersion, '/developers/apps')
  )

  // ignore requests to non-REST reference paths
  if (!req.pagePath.includes('rest/reference')) return next()

  // e.g. the `activity` from `/en/rest/reference/activity#events`
  const category = req.pagePath
    .split('rest/reference')[1]
    .replace(/^\//, '') // remove leading slash
    .split('/')[0]

  // ignore empty strings or bare `/`
  if (!category || category.length < 2) return next()

  const operationsForCurrentProduct = req.context.rest.operations[req.context.currentVersion] || []

  // find all operations with a category matching the current path
  req.context.currentRestOperations = operationsForCurrentProduct.filter(
    (operation) => operation.category === category
  )

  return next()
}
