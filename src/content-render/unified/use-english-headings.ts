import GithubSlugger from 'github-slugger'
import { encode } from 'html-entities'
import { toString } from 'hast-util-to-string'
import { visit } from 'unist-util-visit'

const slugger = new GithubSlugger()

// Note: Using 'any' for node because the unist/hast type system is complex and
// the visit function's type constraints don't easily allow for proper element typing
// without extensive type gymnastics. The runtime check ensures type safety.
const matcher = (node: any) => node.type === 'element' && ['h2', 'h3', 'h4'].includes(node.tagName)

interface UseEnglishHeadingsOptions {
  englishHeadings?: Record<string, string>
}

// replace translated IDs and links in headings with English
export default function useEnglishHeadings({ englishHeadings }: UseEnglishHeadingsOptions) {
  if (!englishHeadings) return
  // Note: Using 'any' for tree because unified's AST types are complex and
  // this function works with different tree types depending on the processor
  return (tree: any) => {
    // Note: Using 'any' for node because visit() callback typing is restrictive
    // and doesn't easily allow for proper element typing without complex generics
    visit(tree, matcher, (node: any) => {
      slugger.reset()
      // Get the plain text content of the heading node
      const text: string = toString(node)
      // find English heading in the collection
      const englishHeading: string = englishHeadings[encode(text)]
      // get English slug
      const englishSlug: string = slugger.slug(englishHeading)
      // use English slug for heading ID and link
      if (englishSlug) {
        // only use English slug if there is one, otherwise we'll end up with
        // empty IDs
        node.properties.id = englishSlug
      }
    })
  }
}
