const path = require('path')
const { getPathWithoutLanguage, getVersionedPathWithoutLanguage } = require('../lib/path-utils')

module.exports = async (req, res, next) => {
  req.context.breadcrumbs = {}

  if (!req.context.page) return next()
  if (req.context.page.relativePath === 'index.md') return next()

  let pathParts, product, categoryPath
  if (!process.env.FEATURE_NEW_VERSIONS) {
    if (req.context.page.relativePath === 'enterprise/index.md') return next()

    pathParts = req.context.currentPathWithoutLanguage.split('/')

    // remove first empty item
    pathParts.shift()

    let productPath

    // e.g., /github
    if (pathParts[0] !== 'enterprise') {
      productPath = path.posix.join('/', pathParts[0])
    }

    if (pathParts[0] === 'enterprise') {
      // handling for /enterprise/version/admin
      if (pathParts.includes('admin')) {
        productPath = path.posix.join('/', ...pathParts.slice(0, 3))
        // remove /enterprise/version so that path starts with /admin
        pathParts.splice(0, 2)
      }

      // handling for /enterprise/version/user/product
      if (pathParts.includes('user')) {
        productPath = path.posix.join('/', ...pathParts.slice(0, 4))
        // remove /enterprise/version/user so that path starts with /product
        pathParts.splice(0, 3)
      }
    }

    // turn /product paths into /enterprise/version/user/product paths and vice versa
    productPath = getVersionedPathWithoutLanguage(productPath, req.context.currentVersion)

    product = req.context.siteTree[req.language][req.context.currentVersion].products[req.context.currentProduct.id]

    // GitHub.com is the only product with a breadcrumbs-specific Enterprise title
    // in the sidebar, the product title is `GitHub.com` in all versions
    // in the breadcrumbs, the product title is either `GitHub.com` or `GitHub Enterprise Server`
    const productTitle = product.title === 'GitHub.com' && req.context.currentVersion !== 'dotcom'
      ? 'GitHub Enterprise Server'
      : product.title

    req.context.breadcrumbs.product = {
      href: productPath,
      title: productTitle
    }

    if (!pathParts[1]) return next()

    // get category path
    // e.g., /github/getting-started-with-github
    categoryPath = path.posix.join(productPath, pathParts[1])
  }

  if (process.env.FEATURE_NEW_VERSIONS) {
    const rawPath = getPathWithoutLanguage(req.path)
    pathParts = rawPath.split('/')

    // drop first '/'
    pathParts.shift()

    // drop the version segment so pathParts now starts with /product
    pathParts.shift()

    const productPath = path.posix.join('/', req.context.currentProduct)
    product = req.context.siteTree[req.language][req.context.currentVersion].products[req.context.currentProduct]

    req.context.breadcrumbs.product = {
      href: path.posix.join('/', req.context.currentVersion, productPath),
      title: product.title
    }

    if (!pathParts[1]) return next()

    // get category path
    // e.g., `getting-started-with-github` in /free-pro-team@latest/github/getting-started-with-github
    // or /enterprise-server@2.21/github/getting-started-with-github
    categoryPath = path.posix.join('/', req.context.currentVersion, productPath, pathParts[1])
  }

  const category = product.categories[categoryPath]

  if (!category) return next()

  req.context.breadcrumbs.category = {
    href: categoryPath,
    title: category.shortTitle || category.title
  }

  if (!pathParts[2]) return next()

  // get maptopic path
  // e.g., /github/getting-started-with-github/learning-about-github
  let maptopic
  if (req.context.page.mapTopic) {
    const maptopicPath = path.posix.join(categoryPath, pathParts[2])

    maptopic = category.maptopics[maptopicPath]

    if (!maptopic) return next()

    req.context.breadcrumbs.maptopic = {
      href: maptopicPath,
      title: maptopic.shortTitle || maptopic.title
    }
  } else {
    // get article path
    // e.g., /github/getting-started-with-github/githubs-products
    const articlePath = path.posix.join(categoryPath, pathParts[2])

    // find parent maptopic if one exists
    // some categories don't have maptopics, e.g. site-policy
    if (category.maptopics) {
      maptopic = Object.values(category.maptopics).find(maptopic => maptopic.articles[articlePath])

      if (maptopic) {
        req.context.breadcrumbs.maptopic = {
          href: maptopic.href,
          title: maptopic.shortTitle || maptopic.title
        }
      }
    }

    let articleKey = '/' + req.language + articlePath
    let articlePage = req.context.pages[articleKey]

    // fall back to English if localized article does not exist
    if (!articlePage && req.language !== 'en') {
      articleKey = '/en' + articlePath
      articlePage = req.context.pages[articleKey]
    }

    if (!articlePage) return next()

    const articleTitle = await articlePage.renderProp('shortTitle', req.context, { textOnly: true, encodeEntities: true })

    req.context.breadcrumbs.article = {
      href: articlePath,
      title: articleTitle
    }
  }

  return next()
}
