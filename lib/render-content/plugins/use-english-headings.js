const GithubSlugger = require('github-slugger')
const Entities = require('html-entities').XmlEntities
const toString = require('hast-util-to-string')
const visit = require('unist-util-visit')
const entities = new Entities()

const matcher = node => (
  node.type === 'element' &&
  ['h2', 'h3', 'h4'].includes(node.tagName)
)

// replace translated IDs and links in headings with English
module.exports = function useEnglishHeadings ({ englishHeadings }) {
  if (!englishHeadings) return
  return tree => {
    visit(tree, matcher, node => {
      // Get the plain text content of the heading node
      const text = toString(node)
      // find English heading in the collection
      const englishHeading = englishHeadings[entities.encode(text)]
      // get English slug
      const englishSlug = GithubSlugger.slug(englishHeading)
      // use English slug for heading ID and link
      node.properties.id = englishSlug
    })
  }
}
