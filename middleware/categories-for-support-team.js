// This middleware serves a file that's used by the GitHub support team
// to quickly search for Help articles by title and insert the link to
// the article into a reply to a customer.
const path = require('path')
const fs = require('fs')
const matter = require('gray-matter')
const dotcomDir = path.join(__dirname, '../content/github')
const dotcomIndex = path.join(dotcomDir, 'index.md')
const linkRegex = /{% (?:topic_)?link_in_list ?\/(.*?) ?%}/g

module.exports = async (req, res, next) => {
  if (req.path !== '/categories.json') return next()
  const categories = generateCategories()
  return res.json(categories)
}

function generateCategories () {
  // get links included in dotcom index page.
  // each link corresponds to a dotcom subdirectory
  // example: getting-started-with-github
  const links = getLinks(fs.readFileSync(dotcomIndex, 'utf8'))

  const categories = []

  // get links included in each subdir's index page
  // these are links to articles
  links.forEach(link => {
    const category = {}
    const indexPath = getPath(link, 'index')
    const indexContents = fs.readFileSync(indexPath, 'utf8')
    const { data, content } = matter(indexContents)

    // get name from title frontmatter
    category.name = data.title

    // get child article links
    const articleLinks = getLinks(content)

    const publishedArticles = []

    articleLinks.forEach(articleLink => {
      const publishedArticle = {}

      // get title from frontmatter
      const articlePath = getPath(link, articleLink)
      const articleContents = fs.readFileSync(articlePath, 'utf8')
      const { data } = matter(articleContents)

      // do not include map topics in list of published articles
      if (data.mapTopic) return

      publishedArticle.title = data.title
      publishedArticle.slug = articleLink

      publishedArticles.push(publishedArticle)
    })

    category.published_articles = publishedArticles

    categories.push(category)
  })

  return categories
}

function getLinks (contents) {
  return contents.match(linkRegex)
    .map(link => link.match(linkRegex.source)[1])
}

function getPath (link, filename) {
  return path.join(dotcomDir, link, `${filename}.md`)
}
