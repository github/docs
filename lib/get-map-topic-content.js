// get the childArticles set on map topics in lib/site-tree.js
module.exports = function getMapTopicContent (parentProductId, breadcrumbs, siteTree) {
  const childArticles = siteTree.products[parentProductId].categories[breadcrumbs.category.href].maptopics[breadcrumbs.maptopic.href].childArticles

  if (!childArticles) {
    console.error(`can't find child articles from siteTree for map topic '${breadcrumbs.maptopic.href}'`)
  }

  return childArticles
    .map(article => `{% link_with_intro /${article.href} %}`)
    .join('\n\n')
}
