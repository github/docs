import { getProductGroups } from '../../lib/get-product-groups.js'
import warmServer from '../../lib/warm-server.js'
import { languageKeys } from '#src/languages/lib/languages.js'
import { allVersionKeys } from '#src/versions/lib/all-versions.js'

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
  // Before executing getProductGroups, which might need to do some
  // Liquid parsing & executing, we want to make sure the request
  // does have a valid version.
  // The `currentVersion` is taken from the `req.path` but
  // `currentVersionObj` is looking up `currentVersion` with all
  // known versions. Because if it's not valid, any possible
  // use of `{% ifversion ... %}` in Liquid, will throw an error.
  if (isHomepage(req.pagePath) && req.context.currentVersionObj) {
    const { pages } = await warmServer()
    req.context.productGroups = await getProductGroups(pages, req.language, req.context)
  }

  return next()
}
