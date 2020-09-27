const flat = require('flat')
const renderContent = require('./render-content')
const delimiter = '#'

// render localized and product-version-aware page title
// note this only supports titles with liquid, not short titles

module.exports = async function siteTreeTitles (siteTree, siteData) {
  // use a non-period delimiter because versions contain periods (like 2.19)
  const flatTree = flat(siteTree, { delimiter: delimiter })

  const titlesWithLiquid = Object.entries(flatTree)
    .filter(([path, title]) => path.endsWith('title') && title.includes('{'))

  await Promise.all(titlesWithLiquid.map(async ([path, title]) => {
    path = path.replace(`${delimiter}title`, '') // ignore the `title` path part for now

    // derive values from path parts
    const [
      languageCode,
      version,
      products,
      product,
      categories,
      category,
      maptopics,
      maptopic,
      articles,
      article
    ] = path.split(delimiter)

    // create context object for rendering of dynamic liquid data in page titles
    const ctx = {
      page: { version },
      site: siteData[languageCode].site
    }

    const renderedTitle = await renderContent(title, ctx, { textOnly: true })

    // no product titles have liquid because we get them from lib/all-products.js
    // so we can assume all titles processed here will be either a category, maptopic, or article
    // we can also assume a category value will exist for any of these
    const currentCategory = siteTree[languageCode][version][products][product][categories][category]

    if (!maptopic) currentCategory.title = renderedTitle

    let currentMaptopic
    if (maptopic) {
      currentMaptopic = currentCategory[maptopics][maptopic]
      if (!article) currentMaptopic.title = renderedTitle
    }

    let currentArticle
    if (article) {
      currentArticle = currentMaptopic[articles][article]
      currentArticle.title = renderedTitle
    }
  }))
}
