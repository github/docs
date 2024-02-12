import { readCompressedJsonFileFallback } from '../../../lib/read-json-file.js'
import getExceptionRedirects from './exception-redirects.js'
import { latest } from '#src/versions/lib/enterprise-server-releases.js'

const EXCEPTIONS_FILE = './src/redirects/lib/static/redirect-exceptions.txt'

// This function runs at server warmup and precompiles possible redirect routes.
// It outputs them in key-value pairs within a neat Javascript object: { oldPath: newPath }
export async function precompileRedirects(pageList) {
  const allRedirects = readCompressedJsonFileFallback('./src/redirects/lib/static/developer.json')

  const externalRedirects = readCompressedJsonFileFallback(
    './src/redirects/lib/external-sites.json',
  )
  Object.assign(allRedirects, externalRedirects)

  // CURRENT PAGES PERMALINKS AND FRONTMATTER
  // create backwards-compatible old paths for page permalinks and frontmatter redirects
  pageList
    .filter((page) => page.languageCode === 'en')
    .forEach((page) => Object.assign(allRedirects, page.buildRedirects()))

  // NOTE: Exception redirects **MUST COME AFTER** pageList redirects above in order
  // to properly override them. Exception redirects are unicorn one-offs that are not
  // otherwise handled by the versionless redirect fallbacks (see lib/all-versions.js).
  //
  // Examples of exceptions:
  // * We deprecate the FPT version of a page, and we want the FPT version to redirect
  //   to a different version that goes against the order in lib/all-versions.js.
  // * We deprecate a non-FPT version of a page, and we want the old version to redirect
  //   to a different version. Because the order in lib/all-versions.js only covers
  //   versionless links (like `/foo`), we need to specify an exception for the old
  //   versioned links (like `/enterprise-cloud@latest/foo`).
  // * We deprecate a version of a page, and instead of falling back to the next
  //   available version, we want to redirect that version to a different page entirely.
  //
  // The advantage of the exception redirects file is that it's encoded in plain
  // text so it's possible to write comments and it's also possible to write 1
  // destination URL once for each N redirect origins.
  const exceptions = getExceptionRedirects(EXCEPTIONS_FILE)
  Object.assign(allRedirects, exceptions)

  Object.entries(allRedirects).forEach(([fromURI, toURI]) => {
    // If the destination URL has a hardcoded `enterprise-server@latest` in
    // it we need to rewrite that now.
    // We never want to redirect to that as the final URL (in the 301 response)
    // but it might make sense for it to be in the `developer.json`
    // file since that it static.
    //
    //
    if (toURI.includes('/enterprise-server@latest')) {
      allRedirects[fromURI] = toURI.replace(
        '/enterprise-server@latest',
        `/enterprise-server@${latest}`,
      )
    }
  })

  return allRedirects
}

export default precompileRedirects
