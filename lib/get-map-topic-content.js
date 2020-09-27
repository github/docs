const findPage = require('./find-page')

// get the page.childArticles set on english map topics in lib/site-tree.js
module.exports = function getMapTopicContent (page, pages, redirects) {
  const englishPage = page.languageCode !== 'en'
    ? findPage(`/${page.relativePath.replace(/.md$/, '')}`, pages, redirects, 'en')
    : page

  if (!englishPage) {
    console.error(`cannot find english page: ${page.fullPath}`)
    return
  }

  if (!englishPage.childArticles) {
    console.error(`error getting child articles on map topic: ${page.fullPath}`)
    return
  }

  return englishPage.childArticles
    .map(article => `{% link_with_intro /${article.href} %}`)
    .join('\n\n')
}
