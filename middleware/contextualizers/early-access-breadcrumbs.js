module.exports = async function breadcrumbs (req, res, next) {
  if (!req.context.page) return next()
  if (!req.context.page.relativePath.startsWith('early-access')) return next()

  req.context.breadcrumbs = []

  // Return an empty array on the landing page.
  if (req.context.page.documentType === 'homepage') {
    return next()
  }

  const earlyAccessProduct = req.context.siteTree[req.language][req.context.currentVersion].childPages.find(childPage => childPage.page.relativePath === 'early-access/index.md')
  if (!earlyAccessProduct) return next()

  // Create initial landing page breadcrumb
  req.context.breadcrumbs.push({
    documentType: earlyAccessProduct.page.documentType,
    href: '',
    title: earlyAccessProduct.page.title
  })

  // If this is the Early Access landing page, return now
  if (req.context.currentPath === earlyAccessProduct.href) {
    return next()
  }

  // Otherwise, create breadcrumbs
  await createBreadcrumb(
    earlyAccessProduct.childPages,
    req.context
  )

  return next()
}

async function createBreadcrumb (pageArray, context) {
  // Find each page in the siteTree's array of child pages that starts with the requested path.
  const childPage = pageArray.find(page => context.currentPath.startsWith(page.href))

  // Gray out product breadcrumb links and `Articles` categories
  const hideHref = childPage.page.documentType === 'product' ||
    (childPage.page.documentType === 'category' && childPage.page.relativePath.endsWith('/articles/index.md'))

  context.breadcrumbs.push({
    documentType: childPage.page.documentType,
    href: hideHref ? '' : childPage.href,
    title: await childPage.page.renderTitle(context, { textOnly: true, encodeEntities: true })
  })

  // Recursively loop through the siteTree and create each breadcrumb, until we reach the
  // point where the current siteTree page is the same as the requested page. Then stop.
  if (childPage.childPages && context.currentPath !== childPage.href) {
    createBreadcrumb(childPage.childPages, context)
  }
}
