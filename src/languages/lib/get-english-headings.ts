import GithubSlugger from 'github-slugger'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'
import type { Node } from 'unist'

import { renderLiquid } from '@/content-render/liquid/index'
import findPage from '@/frame/lib/find-page'
import Permalink from '@/frame/lib/permalink'
import { trailingSlash } from '@/frame/lib/patterns'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import type { Context, Glossary } from '@/types'

interface HeadingNode extends Node {
  type: 'heading'
  depth: number
}

interface PageWithMarkdown {
  relativePath: string
  markdown: string
}

export default async function getEnglishHeadings(
  page: PageWithMarkdown,
  context: Context,
): Promise<Record<string, string> | undefined> {
  // Glossary term headings come from data, not page markdown.
  if (page.relativePath.endsWith('/github-glossary.md')) {
    const enGlossary = getDataByLanguage('glossaries.external', 'en') as Glossary[]
    const translatedGlossary = getDataByLanguage(
      'glossaries.external',
      context.currentLanguage!,
    ) as Glossary[]
    const headingMap = await getMarkdownHeadingMap(page, context)
    // Translated glossary files keep the English term order, but lag behind English additions and removals.
    if (translatedGlossary.length !== enGlossary.length) return headingMap
    const enSlugs = getEnglishGlossarySlugs(enGlossary)
    const termCounts = new Map<string, number>()
    for (const entry of translatedGlossary) {
      if (entry?.term) termCounts.set(entry.term, (termCounts.get(entry.term) || 0) + 1)
    }
    const glossaryMap: Record<string, string> = {}
    for (let i = 0; i < translatedGlossary.length; i++) {
      if (!translatedGlossary[i]?.term || !enSlugs[i]) continue
      // Some translations reuse one term for two English terms, and a single key cannot map to both IDs.
      if ((termCounts.get(translatedGlossary[i].term) || 0) > 1) continue
      glossaryMap[translatedGlossary[i].term] = enSlugs[i]
    }
    return { ...headingMap, ...glossaryMap }
  }

  return getMarkdownHeadingMap(page, context)
}

// The English page slugs terms in sorted order, so duplicates like @mention and mention get suffixed IDs.
// useEnglishHeadings slugs these values again, which leaves them unchanged.
function getEnglishGlossarySlugs(enGlossary: Glossary[]): string[] {
  const slugger = new GithubSlugger()
  const slugs: string[] = []
  const sortedIndexes = enGlossary
    .map((_, i) => i)
    .sort((a, b) => (enGlossary[a]?.term || '').localeCompare(enGlossary[b]?.term || '', 'en'))
  for (const i of sortedIndexes) {
    if (enGlossary[i]?.term) slugs[i] = slugger.slug(enGlossary[i].term)
  }
  return slugs
}

async function getMarkdownHeadingMap(
  page: PageWithMarkdown,
  context: Context,
): Promise<Record<string, string> | undefined> {
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
