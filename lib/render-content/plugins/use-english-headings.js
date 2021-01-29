const GithubSlugger = require('github-slugger')
const Entities = require('html-entities').XmlEntities
const visit = require('unist-util-visit')
const slugger = new GithubSlugger()
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
      const text = node.children.find(n => n.type === 'text').value
      // find English heading in the collection
      const englishHeading = englishHeadings[entities.encode(text)]
      // get English slug
      const englishSlug = slugger.slug(englishHeading)
      // use English slug for heading ID and link
      node.properties.id = englishSlug
    })
  }
}
