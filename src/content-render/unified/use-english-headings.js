import GithubSlugger from 'github-slugger'
import { encode } from 'html-entities'
import { toString } from 'hast-util-to-string'
import { visit } from 'unist-util-visit'
const slugger = new GithubSlugger()

const matcher = (node) => node.type === 'element' && ['h2', 'h3', 'h4'].includes(node.tagName)

// replace translated IDs and links in headings with English
export default function useEnglishHeadings({ englishHeadings }) {
  if (!englishHeadings) return
  return (tree) => {
    visit(tree, matcher, (node) => {
      slugger.reset()
      // Get the plain text content of the heading node
      const text = toString(node)
      // find English heading in the collection
      const englishHeading = englishHeadings[encode(text)]
      // get English slug
      const englishSlug = slugger.slug(englishHeading)
      // use English slug for heading ID and link
      if (englishSlug) {
        // only use English slug if there is one, otherwise we'll end up with
        // empty IDs
        node.properties.id = englishSlug
      }
    })
  }
}
