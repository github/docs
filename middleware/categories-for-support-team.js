const path = require('path')

module.exports = async function categoriesForSupportTeam (req, res, next) {
  const englishSiteTree = req.context.siteTree.en

  const allCategories = []

  Object.keys(englishSiteTree).forEach(version => {
    const versionedProductsTree = englishSiteTree[version].products

    Object.values(versionedProductsTree).forEach(productObj => {
      if (productObj.id === 'early-access') return
      if (productObj.external) return

      Object.values(productObj.categories).forEach(categoryObj => {
        const articlesArry = []

        if (categoryObj.maptopics) {
          Object.values(categoryObj.maptopics).forEach(maptopicObj => {
            Object.values(maptopicObj.articles).forEach(articleObj => {
              articlesArry.push({
                title: articleObj.title,
                slug: path.basename(articleObj.href)
              })
            })
          })
        }

        if (categoryObj.standalone) {
          articlesArry.push({
            title: categoryObj.title,
            slug: path.basename(categoryObj.href)
          })
        }

        if (categoryObj.articles) {
          Object.values(categoryObj.articles).forEach(articleObj => {
            articlesArry.push({
              title: articleObj.title,
              slug: path.basename(articleObj.href)
            })
          })
        }

        allCategories.push({
          name: categoryObj.title,
          published_articles: articlesArry
        })
      })
    })
  })

  return res.json(allCategories)
}
