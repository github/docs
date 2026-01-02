import { fromMarkdown } from 'mdast-util-from-markdown'
import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'
import type { Node } from 'unist'

import findPage from '@/frame/lib/find-page'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import type { Context } from '@/types'

interface HeadingNode extends Node {
  type: 'heading'
  depth: number
}

interface PageWithMarkdown {
  relativePath: string
  markdown: string
}

interface GlossaryTerm {
  term: string
  slug: string
}

// for any translated page, first get corresponding English markdown
// then get the headings on both the translated and English pageMap
// finally, create a map of translation:English for all headings on the page
export default function getEnglishHeadings(
  page: PageWithMarkdown,
  context: Context,
): Record<string, string> | undefined {
  // Special handling for glossaries, because their headings are
  // generated programmatically.
  if (page.relativePath.endsWith('/github-glossary.md')) {
    // Return an object of `{ localized-term: english-slug }`
    const languageGlossary = getDataByLanguage('glossaries.external', 'en') as GlossaryTerm[]
    return languageGlossary.reduce((prev: Record<string, string>, curr: GlossaryTerm) => {
      prev[curr.term] = curr.slug
      return prev
    }, {})
  }

  const translatedHeadings = getHeadings(page.markdown)
  if (!translatedHeadings.length) return

  const englishPage = findPage(
    `/en/${page.relativePath.replace(/.md$/, '')}`,
    context.pages,
    context.redirects,
  )
  if (!englishPage) return

  // FIX  there may be bugs if English headings are updated before translations sync up :/
  const englishHeadings = getHeadings(englishPage.markdown)
  if (!englishHeadings.length) return

  // return a map from translation:English
  const headingMap: Record<string, string> = {}
  translatedHeadings.forEach((k: string, i: number) => {
    headingMap[k] = englishHeadings[i]
  })
  return headingMap
}

function getHeadings(markdown: string): string[] {
  const ast = fromMarkdown(markdown)
  const headings: string[] = []

  visit(ast, (node: Node) => {
    if (node.type !== 'heading') return
    const headingNode = node as HeadingNode
    if (![2, 3, 4].includes(headingNode.depth)) return
    headings.push(toString(node))
  })

  return headings
}
