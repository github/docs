import { languageKeys } from '../languages.js'
import readJsonFile from '../read-json-file.js'
import { latest } from '../../lib/enterprise-server-releases.js'
import getExceptionRedirects from './exception-redirects.js'
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

  // Exception redirects are those that are essentially unicorn one-offs.
  // For example, we have redirects for documents that used to be on
  // `free-pro-team@latest` but have now been moved to
  // `enterprise-cloud@latest`. The advantage of the exception redirects
  // file is that it's encoded in plain text so it's possible to write
  // comments and it's also possible to write 1 destination URL once
  // for each N redirect origins
  const exceptions = getExceptionRedirects()
  Object.entries(exceptions).forEach(([fromURL, toURL]) => {
    allRedirects[fromURL] = `/en${toURL}`
    for (const languageCode of languageKeys) {
      allRedirects[`/${languageCode}${fromURL}`] = `/${languageCode}${toURL}`
    }
  })

  // CURRENT PAGES PERMALINKS AND FRONTMATTER
  // create backwards-compatible old paths for page permalinks and frontmatter redirects
  await Promise.all(
    pageList.map(async (page) => Object.assign(allRedirects, page.buildRedirects()))
  )

  return allRedirects
}
