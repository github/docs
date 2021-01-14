const { get, last } = require('lodash')
const { getLanguageCode } = require('../lib/patterns')

// get the childArticles set on map topics in lib/site-tree.js
module.exports = function getMapTopicContent (productId, siteTree, currentLanguage, currentVersion, currentPath) {
  const maptopicPath = currentPath
  const categoryPath = currentPath.replace(new RegExp(`/${last(currentPath.split('/'))}$`), '')
  const siteTreePath = getSiteTreePath(currentVersion, productId, categoryPath, maptopicPath)
  let childArticles = get(siteTree[currentLanguage], siteTreePath)

  // try falling back to English if needed
  if (!childArticles && currentLanguage !== 'en') {
    const englishCategoryPath = categoryPath.replace(getLanguageCode, '/en')
    const englishMaptopicPath = maptopicPath.replace(getLanguageCode, '/en')
    const englishSiteTreePath = getSiteTreePath(currentVersion, productId, englishCategoryPath, englishMaptopicPath)
    childArticles = get(siteTree.en, englishSiteTreePath)
  }

  if (!childArticles) {
    console.error(`can't find child articles for map topic ${currentPath}`)
    return ''
  }

  return childArticles
    .map(article => `{% link_with_intro /${article.href} %}`)
    .join('\n\n')
}

function getSiteTreePath (version, productId, categoryPath, maptopicPath) {
  return [version, 'products', productId, 'categories', categoryPath, 'maptopics', maptopicPath, 'childArticles']
}
