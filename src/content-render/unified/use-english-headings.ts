import GithubSlugger from 'github-slugger'
import { encode } from 'html-entities'
import { toString } from 'hast-util-to-string'
import { visit } from 'unist-util-visit'
import type { Element, Root } from 'hast'

const slugger = new GithubSlugger()

interface UseEnglishHeadingsOptions {
  englishHeadings?: Record<string, string>
}

// replace translated IDs and links in headings with English
export default function useEnglishHeadings({ englishHeadings }: UseEnglishHeadingsOptions) {
  if (!englishHeadings) return
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (!['h2', 'h3', 'h4'].includes(node.tagName)) return
      slugger.reset()
      const text: string = toString(node)
      const englishHeading: string = englishHeadings[encode(text)]
      const englishSlug: string = slugger.slug(englishHeading)
      if (englishSlug) {
        // only use English slug if there is one, otherwise we'll end up with
        // empty IDs
        node.properties.id = englishSlug
      }
    })
  }
}
