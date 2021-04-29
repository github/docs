const path = require('path')
const { productMap } = require('./all-products')
const languageCodes = Object.keys(require('./languages'))
const addTitlesToTree = require('./site-tree-titles')
const allVersions = Object.keys(require('./all-versions'))
const { getPathWithoutVersion } = require('./path-utils')
const getApplicableVersions = require('./get-applicable-versions')
const findPage = require('./find-page')
const removeFPTFromPath = require('./remove-fpt-from-path')

// This module builds a localized tree of every page on the site
// It includes single-source pages that have different variants
// for different product versions, e.g. dotcom vs GHES
//
// siteTree[languageCode][version].products[productHref].categories[categoryHref].maptopics[maptopicHref].articles
// or if a category has direct child articles:
// siteTree[languageCode][version].products[productHref].categories[categoryHref].articles

module.exports = async function buildSiteTree (pageMap, site, redirects) {
  const siteTree = {}

  languageCodes.forEach(languageCode => {
    siteTree[languageCode] = {}

    allVersions.forEach(version => {
      siteTree[languageCode][version] = {}
      const productTree = {}

      Object.values(productMap).forEach(item => {
        const product = { title: item.name }

        // return early if the product has external docs, like Atom
        if (item.external) {
          product.href = item.href
          product.external = true
          productTree[item.id] = product
          return
        }

        // find the product TOC page so we have access to the TOC items
        const page = findPage(item.href, pageMap, redirects)

        // skip if page can't be found in this version
        if (!page) return
        if (!getApplicableVersions(page.versions).includes(version)) return

        // item.hrefs have a default version via lib/all-products, so update to the current version
        product.href = removeFPTFromPath(path.join('/', languageCode, version, getPathWithoutVersion(item.href)))

        product.categories = buildCategoriesTree(page.tocItems, product.href, pageMap, redirects, version)

        productTree[item.id] = product
        return null
      })

      siteTree[languageCode][version].products = productTree
    })
  })

  await addTitlesToTree(siteTree, site)

  return siteTree
}

function buildCategoriesTree (tocItems, versionedProductHref, pageMap, redirects, version) {
  const categoryTree = {}

  // for every category in a product TOC...
  tocItems.forEach(item => {
    const category = {}

    category.href = path.posix.join(versionedProductHref, item.href)

    // find the category TOC page and get its TOC items
    const page = findPage(category.href, pageMap, redirects)

    // skip if page can't be found in this version
    if (!page) return
    if (!getApplicableVersions(page.versions).includes(version)) return

    category.title = page.title
    category.shortTitle = page.shortTitle

    // support standalone pages at the category level, like actions/quickstart.md
    if (!page.tocItems) {
      category.standalone = true
    }

    // TOC items can be maptopics and/or articles
    if (page.tocItems) {
      const hasMaptopics = page.tocItems.some(item => item.type === 'maptopic')

      // if TOC contains maptopics, build a maptopics tree
      // otherwise build an articles tree
      if (hasMaptopics) {
        category.maptopics = buildMaptopicsTree(page.tocItems, category.href, pageMap, redirects, version)
      } else {
        category.articles = buildArticlesTree(page.tocItems, category.href, pageMap, redirects, version)
      }
    }

    categoryTree[category.href] = category
  })

  return categoryTree
}

function buildMaptopicsTree (tocItems, versionedCategoryHref, pageMap, redirects, version) {
  const maptopicTree = {}

  // for every maptopic in a category TOC...
  tocItems
    .filter(item => item.type === 'maptopic')
    .forEach(item => {
      const maptopic = {}

      maptopic.href = path.posix.join(versionedCategoryHref, item.href)

      // find the category TOC page and get its TOC items
      const page = findPage(maptopic.href, pageMap, redirects)

      // skip if page can't be found in this version
      if (!page) return
      if (!getApplicableVersions(page.versions).includes(version)) return

      // if this is not a maptopic, return early
      if (!page.mapTopic) return

      maptopic.title = page.title
      maptopic.shortTitle = page.shortTitle
      maptopic.hidden = page.hidden
      // make the child articles accessible to the page object for maptopic rendering
      maptopic.childArticles = getChildArticles(tocItems, item.href)
      maptopic.articles = buildArticlesTree(maptopic.childArticles, versionedCategoryHref, pageMap, redirects, version)

      maptopicTree[maptopic.href] = maptopic
    })

  return maptopicTree
}

function buildArticlesTree (tocItems, versionedCategoryHref, pageMap, redirects, version) {
  const articleTree = {}

  // REST categories may not have TOC items
  if (!tocItems) return articleTree

  // for every article in a maptopic (or category) TOC...
  tocItems.forEach(item => {
    const article = {}

    article.href = path.posix.join(versionedCategoryHref, item.href)

    // find the category TOC page and get its TOC items
    const page = findPage(article.href, pageMap, redirects)

    // skip if page can't be found in this version
    if (!page) return
    if (!getApplicableVersions(page.versions).includes(version)) return

    article.title = page.title
    article.shortTitle = page.shortTitle
    article.hidden = page.hidden

    articleTree[article.href] = article
  })

  return articleTree
}

// in a category TOC, get the {% link_in_list %} items under the current {% topic_link_in_list %}
function getChildArticles (tocItems, maptopicPath) {
  let withinMaptopic = false

  return tocItems.filter(item => {
    if (item.type === 'maptopic') {
      if (item.href === maptopicPath) {
        withinMaptopic = true
      } else {
        withinMaptopic = false
      }
    } else {
      if (withinMaptopic) return item.href
    }
    return false
  })
}
