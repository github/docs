import liquid from '../../lib/render-content/liquid.js'

export default async function breadcrumbs(req, res, next) {
  if (!req.context.page) return next()
  const isEarlyAccess = req.context.page.relativePath.startsWith('early-access')
  if (req.context.page.hidden && !isEarlyAccess) return next()

  req.context.breadcrumbs = []

  // Return an empty array on the landing page.
  if (req.context.page.documentType === 'homepage') {
    return next()
  }

  req.context.breadcrumbs = await getBreadcrumbs(req, isEarlyAccess)

  return next()
}

async function getBreadcrumbs(req, isEarlyAccess = false) {
  const crumbs = []
  const { currentPath, currentVersion } = req.context
  const split = currentPath.split('/')
  let cutoff = 2
  if (isEarlyAccess) {
    // When in Early access docs consider the "root" be much higher.
    // E.g. /en/early-access/github/migrating/understanding/about
    // we only want it start at /migrating/understanding/about
    // Essentially, we're skipping "/early-access" and its first
    // top-level like "/github"
    cutoff++

    // The only exception to this rule is for the
    // /{version}/early-access/insights/... URLs because they're a
    // bit different.
    // If there are more known exceptions, extend this conditional.
    if (!split.includes('insights')) {
      cutoff++
    }

    // If the URL is early access AND has a version in it, go even further
    // E.g. /en/enterprise-server@3.3/early-access/admin/hosting/mysql
    // should start at /hosting/mysql.
    if (currentVersion !== 'free-pro-team@latest') {
      cutoff++
    }
  }
  while (split.length > cutoff && split[split.length - 1] !== currentVersion) {
    const href = split.join('/')
    const page = req.context.pages[href]
    if (page) {
      crumbs.push({
        href,
        title: await getShortTitle(page, req.context),
      })
    } else {
      console.warn(`No page found with for '${href}'`)
    }
    split.pop()
  }
  crumbs.reverse()

  return crumbs
}

async function getShortTitle(page, context) {
  // Note! Don't use `page.title` or `page.shortTitle` because if they get
  // set during rendering, they become the HTML entities encoded string.
  // E.g. "Delete &amp; restore a package"

  if (page.rawShortTitle) {
    if (page.rawShortTitle.includes('{')) {
      // Can't easily cache this because the `page` is reused for multiple
      // permalinks. We could do what the `Page.render()` method does which
      // specifically caches based on the `context.currentPath` but at
      // this point it's probably not worth it.
      return await liquid.parseAndRender(page.rawShortTitle, context)
    }
    return page.rawShortTitle
  }
  if (page.rawTitle.includes('{')) {
    return await liquid.parseAndRender(page.rawTitle, context)
  }
  return page.rawTitle
}
