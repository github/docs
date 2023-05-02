import { getProductGroups } from '../../lib/all-products.js'
import warmServer from '../../lib/warm-server.js'
import { languageKeys } from '../../lib/languages.js'
import { allVersionKeys } from '../../lib/all-versions.js'

const isHomepage = (path) => {
  const split = path.split('/')
  // E.g. `/foo` but not `foo/bar` or `foo/`
  if (split.length === 2 && split[1] && !split[0]) {
    return languageKeys.includes(split[1])
  }
  // E.g. `/foo/possiblyproductname` but not `foo/possiblyproductname` or
  // `/foo/something/`
  if (split.length === 3 && !split[0] && split[2]) {
    return allVersionKeys.includes(split[2])
  }
  return false
}

export default async function productGroups(req, res, next) {
  // It's important to use `req.pathPage` instead of `req.path` because
  // the request could be the client-side routing from Next where the URL
  // might be something like `/_next/data/foo/bar.json` which is translated,
  // in another middleware, to what it would equate to if it wasn't
  // client-side routing.
  if (isHomepage(req.pagePath)) {
    const { pages } = await warmServer()
    req.context.productGroups = getProductGroups(pages, req.language)
  }

  return next()
}
