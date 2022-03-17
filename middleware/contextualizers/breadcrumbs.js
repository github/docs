import liquid from '../../lib/render-content/liquid.js'

export default async function breadcrumbs(req, res, next) {
  if (!req.context.page) return next()
  if (req.context.page.hidden) return next()

  req.context.breadcrumbs = []

  // Return an empty array on the landing page.
  if (req.context.page.documentType === 'homepage') {
    return next()
  }

  req.context.breadcrumbs = await getBreadcrumbs(req)

  return next()
}

async function getBreadcrumbs(req) {
  const crumbs = []
  const { currentPath, currentVersion } = req.context
  const split = currentPath.split('/')
  while (split.length > 2 && split[split.length - 1] !== currentVersion) {
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
