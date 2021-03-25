// This middleware serves a file that's used by the GitHub support team
// to quickly search for Help articles by title and insert the link to
// the article into a reply to a customer.
const path = require('path')
const matter = require('gray-matter')
const readFileAsync = require('../lib/readfile-async')
const dotcomDir = path.join(__dirname, '../content/github')
const dotcomIndex = path.join(dotcomDir, 'index.md')
const linkRegex = /{% (?:topic_)?link_in_list ?\/(.*?) ?%}/g

module.exports = async function categoriesForSupportTeam (req, res, next) {
  if (req.path !== '/categories.json') return next()
  const categories = await generateCategories()
  return res.json(categories)
}

async function generateCategories () {
  // get links included in dotcom index page.
  // each link corresponds to a dotcom subdirectory
  // example: getting-started-with-github
  const links = getLinks(await readFileAsync(dotcomIndex, 'utf8'))

  // get links included in each subdir's index page
  // these are links to articles
  const categories = await Promise.all(links.map(async link => {
    const category = {}
    const indexPath = getPath(link, 'index')
    const indexContents = await readFileAsync(indexPath, 'utf8')
    const { data, content } = matter(indexContents)

    // get name from title frontmatter
    category.name = data.title

    // get child article links
    const articleLinks = getLinks(content)

    category.published_articles = (await Promise.all(articleLinks.map(async articleLink => {
      // get title from frontmatter
      const articlePath = getPath(link, articleLink)
      const articleContents = await readFileAsync(articlePath, 'utf8')
      const { data } = matter(articleContents)

      // do not include map topics in list of published articles
      if (data.mapTopic) return

      return {
        title: data.title,
        slug: articleLink
      }
    }))).filter(Boolean)

    return category
  }))

  return categories
}

function getLinks (contents) {
  return contents.match(linkRegex)
    .map(link => link.match(linkRegex.source)[1])
}

function getPath (link, filename) {
  return path.join(dotcomDir, link, `${filename}.md`)
}
