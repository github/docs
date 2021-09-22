import readJsonFile from '../read-json-file.js'
import { latest } from '../../lib/enterprise-server-releases.js'
const developerRedirects = readJsonFile('./lib/redirects/static/developer.json')
const latestDevRedirects = {}

// Replace hardcoded 'latest' with real value in the redirected path
Object.entries(developerRedirects).forEach(([oldPath, newPath]) => {
  latestDevRedirects[oldPath] = newPath.replace(
    'enterprise-server@latest',
    `enterprise-server@${latest}`
  )
})

// This function runs at server warmup and precompiles possible redirect routes.
// It outputs them in key-value pairs within a neat Javascript object: { oldPath: newPath }
export default async function precompileRedirects(pageList) {
  const allRedirects = Object.assign({}, latestDevRedirects)

  // CURRENT PAGES PERMALINKS AND FRONTMATTER
  // create backwards-compatible old paths for page permalinks and frontmatter redirects
  await Promise.all(
    pageList.map(async (page) => Object.assign(allRedirects, page.buildRedirects()))
  )

  return allRedirects
}
