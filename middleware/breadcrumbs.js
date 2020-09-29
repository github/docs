const path = require('path')
const { getPathWithoutLanguage } = require('../lib/path-utils')

module.exports = async (req, res, next) => {
  req.context.breadcrumbs = {}

  if (!req.context.page) return next()
  if (req.context.page.relativePath === 'index.md') return next()

  const rawPath = getPathWithoutLanguage(req.path)
  const pathParts = rawPath.split('/')

  // drop first '/'
  pathParts.shift()

  // drop the version segment so pathParts now starts with /product
  pathParts.shift()

  const productPath = path.posix.join('/', req.context.currentProduct)
  const product = req.context.siteTree[req.language][req.context.currentVersion].products[req.context.currentProduct]

  req.context.breadcrumbs.product = {
    href: path.posix.join('/', req.context.currentVersion, productPath),
    title: product.title
  }

  if (!pathParts[1]) return next()

  // get category path
  // e.g., `getting-started-with-github` in /free-pro-team@latest/github/getting-started-with-github
  // or /enterprise-server@2.21/github/getting-started-with-github
  const categoryPath = path.posix.join('/', req.context.currentVersion, productPath, pathParts[1])

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
