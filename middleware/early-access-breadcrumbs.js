const path = require('path')
const { getPathWithoutLanguage } = require('../lib/path-utils')
const nonEnterpriseDefaultVersion = require('../lib/non-enterprise-default-version')
const removeFPTFromPath = require('../lib/remove-fpt-from-path')

// Early Access content doesn't conform to the same structure as other products, so we
// can't derive breadcrumbs from the siteTree in the same way. Hence, this separate middleware.
module.exports = async function earlyAccessBreadcrumbs (req, res, next) {
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

  // if this is not FPT, drop the version segment
  // if this is FPT, there is no version segment
  if (req.context.currentVersion !== nonEnterpriseDefaultVersion) {
    pathParts.shift()
  }

  // drop the early-accesss segments so pathParts now starts with /product
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
  const categoryPath = removeFPTFromPath(path.posix.join('/', 'en', req.context.currentVersion, 'early-access', pathParts[0], pathParts[1]))
  const category = req.context.pages[categoryPath]

  if (!category) return next()

  req.context.breadcrumbs.category = {
    href: categoryPath, // do include a link for EA category breadcrumbs
    title: category.shortTitle || category.title
  }

  if (!pathParts[2]) return next()

  // for Early Access purposes, we don't need to differentiate between map topics and articles breadcrumbs
  const mapTopicOrArticlePath = path.posix.join(categoryPath, pathParts[2])
  const mapTopicOrArticle = req.context.pages[mapTopicOrArticlePath]

  if (!mapTopicOrArticle) return next()

  const mapTopicOrArticleTitle = await mapTopicOrArticle.renderProp('shortTitle', req.context, { textOnly: true, encodeEntities: true })

  req.context.breadcrumbs.article = {
    href: mapTopicOrArticlePath, // do include a link for EA map topic/article breadcrumbs
    title: mapTopicOrArticleTitle
  }

  return next()
}
