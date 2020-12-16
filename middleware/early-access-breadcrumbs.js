const path = require('path')
const { getPathWithoutLanguage } = require('../lib/path-utils')

// Early Access content doesn't conform to the same structure as other products, so we
// can't derive breadcrumbs from the siteTree in the same way. Hence, this separate middleware.
module.exports = async (req, res, next) => {
  if (!req.context.page) return next()
  if (!req.context.page.hidden) return next()

  req.context.breadcrumbs = {}

  const earlyAccessProduct = req.context.siteTree[req.language][req.context.currentVersion].products[req.context.currentProduct]

  req.context.breadcrumbs.earlyAccessProduct = {
    href: '', // no link for the EA product breadcrumb
    title: earlyAccessProduct.title
  }

  const rawPath = getPathWithoutLanguage(req.path)
  const pathParts = rawPath.split('/')

  // drop first '/'
  pathParts.shift()

  // drop the version and early-accesss segments so pathParts now starts with /product
  pathParts.shift()
  pathParts.shift()

  // Early Access products do not require an index.md, so look for a matching public product
  const product = req.context.siteTree[req.language][req.context.currentVersion].products[pathParts[0]]

  if (!product) return next()

  req.context.breadcrumbs.product = {
    href: '', // no link for the EA product breadcrumbs
    title: product.title
  }

  if (!pathParts[1]) return next()

  // get Early Access category path
  // e.g., `enforcing-best-practices-with-github-policies` in /free-pro-team@latest/early-access/github/enforcing-best-practices-with-github-policies
  const categoryPath = path.posix.join('/', req.context.currentVersion, 'early-access', pathParts[0], pathParts[1])
  const category = req.context.pages[path.posix.join('/en', categoryPath)]

  if (!category) return next()

  req.context.breadcrumbs.category = {
    href: categoryPath, // do include a link for EA category breadcrumbs
    title: category.shortTitle || category.title
  }

  if (!pathParts[2]) return next()

  // for Early Access purposes, we don't need to differentiate between map topics and articles breadcrumbs
  const mapTopicOrArticlePath = path.posix.join(categoryPath, pathParts[2])
  const mapTopicOrArticle = req.context.pages[path.posix.join('/en', mapTopicOrArticlePath)]

  if (!mapTopicOrArticle) return next()

  const mapTopicOrArticleTitle = await mapTopicOrArticle.renderProp('shortTitle', req.context, { textOnly: true, encodeEntities: true })

  req.context.breadcrumbs.article = {
    href: mapTopicOrArticlePath, // do include a link for EA map topic/article breadcrumbs
    title: mapTopicOrArticleTitle
  }

  return next()
}
