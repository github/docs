import GithubSlugger from 'github-slugger'
import { toString } from 'hast-util-to-string'
import { visit } from 'unist-util-visit'
import type { Element, Root } from 'hast'

interface UseEnglishHeadingsOptions {
  englishHeadings?: Record<string, string>
}

// Translated pages keep English heading IDs so inbound anchors stay stable.
export default function useEnglishHeadings({ englishHeadings }: UseEnglishHeadingsOptions) {
  if (!englishHeadings) return
  return (tree: Root) => {
    // One slugger per document gives repeated headings the same suffixes as the English page.
    const slugger = new GithubSlugger()
    visit(tree, 'element', (node: Element) => {
      if (!['h2', 'h3', 'h4'].includes(node.tagName)) return
      const text: string = toString(node)
      const englishHeading: string | undefined = englishHeadings[text]
      // Unmatched headings would otherwise register an empty slug and shift later suffixes.
      if (!englishHeading) return
      const englishSlug: string = slugger.slug(englishHeading)
      if (englishSlug) {
        // Leave the existing ID when no English slug exists.
        node.properties.id = englishSlug
      }
    })
  }
}
