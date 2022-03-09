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
    crumbs.push({
      href,
      title: await getShortTitle(page, req.context),
    })
    split.pop()
  }
  crumbs.reverse()

  return crumbs
}

async function getShortTitle(page, context) {
  if (page.rawShortTitle) {
    if (page.rawShortTitle.includes('{')) {
      // Can't easily cache this because the `page` is reused for multiple
      // permalinks. We could do what the `Page.render()` method does which
      // specifically caches based on the `context.currentPath` but at
      // this point it's probably not worth it.
      return await liquid.parseAndRender(page.rawShortTitle, context)
    }
    return page.shortTitle
  }
  if (page.rawTitle.includes('{')) {
    return await liquid.parseAndRender(page.rawTitle, context)
  }
  return page.title
}
