import { fromMarkdown } from 'mdast-util-from-markdown'
import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'
import type { Node } from 'unist'

import { renderLiquid } from '@/content-render/liquid/index'
import findPage from '@/frame/lib/find-page'
import Permalink from '@/frame/lib/permalink'
import { trailingSlash } from '@/frame/lib/patterns'
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

export default async function getEnglishHeadings(
  page: PageWithMarkdown,
  context: Context,
): Promise<Record<string, string> | undefined> {
  // Glossary headings come from data, not page markdown.
  if (page.relativePath.endsWith('/github-glossary.md')) {
    const languageGlossary = getDataByLanguage('glossaries.external', 'en') as GlossaryTerm[]
    return languageGlossary.reduce((prev: Record<string, string>, curr: GlossaryTerm) => {
      prev[curr.term] = curr.slug
      return prev
    }, {})
  }

  const translatedHeadings = await getHeadings(page.markdown, context)
  if (!translatedHeadings.length) return

  // Page keys drop the trailing slash that relativePathToSuffix can leave.
  const englishHref = `/en${Permalink.relativePathToSuffix(page.relativePath)}`.replace(
    trailingSlash,
    '$1',
  )
  const englishPage = findPage(englishHref, context.pages, context.redirects)
  if (!englishPage) return

  // English heading changes can misalign with unsynced translations.
  const englishHeadings = await getHeadings(englishPage.markdown, {
    ...context,
    currentLanguage: 'en',
  })
  if (!englishHeadings.length) return

  const headingMap: Record<string, string> = {}
  for (let i = 0; i < translatedHeadings.length; i++) {
    const k = translatedHeadings[i]
    headingMap[k] = englishHeadings[i]
  }
  return headingMap
}

// Keys and values must match the heading text after Liquid renders, which is what the page shows.
async function getHeadings(markdown: string, context: Context): Promise<string[]> {
  const ast = fromMarkdown(markdown)
  const headingNodes: HeadingNode[] = []

  visit(ast, (node: Node) => {
    if (node.type !== 'heading') return
    const headingNode = node as HeadingNode
    if (![2, 3, 4].includes(headingNode.depth)) return
    headingNodes.push(headingNode)
  })

  return Promise.all(headingNodes.map((node) => renderHeading(node, markdown, context)))
}

async function renderHeading(node: HeadingNode, markdown: string, context: Context) {
  const text = toString(node)
  const start = node.position?.start.offset
  const end = node.position?.end.offset
  if (start === undefined || end === undefined) return text
  const source = markdown.slice(start, end)
  if (!source.includes('{%') && !source.includes('{{')) return text
  try {
    return toString(fromMarkdown(await renderLiquid(source, context)))
  } catch {
    // A heading can hold half of a Liquid block that only parses as part of the whole page.
    return text
  }
}
