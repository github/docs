const path = require('path')
const { getPathWithoutLanguage } = require('../lib/path-utils')
const nonEnterpriseDefaultVersion = require('../lib/non-enterprise-default-version')
const removeFPTFromPath = require('../lib/remove-fpt-from-path')

module.exports = async (req, res, next) => {
  if (!req.context.page) return next()
  if (req.context.page.hidden) return next()

  req.context.breadcrumbs = {}

  // Return an empty object on the landing page
  if (req.context.page.relativePath === 'index.md') return next()

  const rawPath = getPathWithoutLanguage(req.path)
  const pathParts = rawPath.split('/')

  // drop first '/'
  pathParts.shift()

  const productPath = path.posix.join('/', req.context.currentProduct)
  const product = req.context.siteTree[req.language][req.context.currentVersion].products[req.context.currentProduct]

  if (!product) {
    return next()
  }

  req.context.breadcrumbs.product = {
    href: removeFPTFromPath(path.posix.join('/', req.context.currentLanguage, req.context.currentVersion, productPath)),
    title: product.title
  }

  // if this is not FPT, drop the version segment so pathParts now starts with /product
  // if this is FPT, there is no version segment so pathParts already starts with /product
  if (req.context.currentVersion !== nonEnterpriseDefaultVersion) {
    pathParts.shift()
  }

  if (!pathParts[1]) return next()

  // get category path
  // e.g., `getting-started-with-github` in /free-pro-team@latest/github/getting-started-with-github
  // or /enterprise-server@2.21/github/getting-started-with-github
  const categoryPath = removeFPTFromPath(path.posix.join('/', req.context.currentLanguage, req.context.currentVersion, productPath, pathParts[1]))

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
    const maptopicPath = req.path

    maptopic = category.maptopics[maptopicPath]

    if (!maptopic) return next()

    req.context.breadcrumbs.maptopic = {
      href: maptopicPath,
      title: maptopic.shortTitle || maptopic.title
    }
  } else {
    const articlePath = req.path

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

    const articlePage = req.context.page
    const articleTitle = await articlePage.renderProp('shortTitle', req.context, { textOnly: true, encodeEntities: true })

    req.context.breadcrumbs.article = {
      href: articlePath,
      title: articleTitle
    }
  }
  return next()
}
