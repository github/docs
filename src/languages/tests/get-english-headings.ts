import rehypeSlug from 'rehype-slug'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'
import type { Element, Root } from 'hast'
import { beforeEach, describe, expect, test, vi } from 'vitest'

import { renderContent } from '@/content-render/index'
import useEnglishHeadings from '@/content-render/unified/use-english-headings'
import getEnglishHeadings from '@/languages/lib/get-english-headings'
import type { Context, Glossary, Page } from '@/types'

const glossaries = vi.hoisted(() => ({
  en: [] as Glossary[],
  es: [] as Glossary[],
}))

vi.mock('@/data-directory/lib/get-data', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/data-directory/lib/get-data')>()
  return {
    ...actual,
    getDataByLanguage: (dottedPath: string, langCode: string) => {
      if (dottedPath !== 'glossaries.external')
        return actual.getDataByLanguage(dottedPath, langCode)
      return glossaries[langCode as 'en' | 'es']
    },
  }
})

const glossaryPage = {
  relativePath: 'get-started/learning-about-github/github-glossary.md',
  markdown:
    '{% for glossary in glossaries %}\n\n## {{ glossary.term }}\n\n{% endfor %}\n\n## Lectura adicional',
}
const glossaryContext = {
  currentLanguage: 'es',
  pages: {
    '/en/get-started/learning-about-github/github-glossary': {
      markdown:
        '{% for glossary in glossaries %}\n\n## {{ glossary.term }}\n\n{% endfor %}\n\n## Further reading',
    } as unknown as Page,
  },
  redirects: {},
} as unknown as Context

function toGlossary(terms: string[]): Glossary[] {
  return terms.map((term) => ({ term, description: '' }))
}

async function renderHeadingIds(markdown: string, englishHeadings: Record<string, string>) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(useEnglishHeadings, { englishHeadings })
  const tree = (await processor.run(processor.parse(markdown))) as Root
  const ids: string[] = []
  visit(tree, 'element', (node: Element) => {
    if (node.tagName === 'h2') ids.push(String(node.properties.id))
  })
  return ids
}

function makeContext(englishMarkdown: string): Context {
  return {
    currentLanguage: 'en',
    currentVersion: 'free-pro-team@latest',
    pages: { '/en/foo/bar': { markdown: englishMarkdown } as unknown as Page },
    redirects: {},
  } as Context
}

const pages = {
  '/en': {
    relativePath: 'index.md',
    markdown: '## Get started',
  },
  '/en/rest/git': {
    relativePath: 'rest/git/index.md',
    markdown: '## About Git database',
  },
  '/en/rest/git/blobs': {
    relativePath: 'rest/git/blobs.md',
    markdown: '## About Git blobs',
  },
} as unknown as Record<string, Page>

const indexContext = { pages, redirects: {} } as Context

describe('getEnglishHeadings', () => {
  test('maps headings on index.md pages', async () => {
    const page = { relativePath: 'rest/git/index.md', markdown: '## 見出し' }
    expect(await getEnglishHeadings(page, indexContext)).toEqual({ 見出し: 'About Git database' })
  })

  test('maps headings on non-index pages', async () => {
    const page = { relativePath: 'rest/git/blobs.md', markdown: '## 見出し' }
    expect(await getEnglishHeadings(page, indexContext)).toEqual({ 見出し: 'About Git blobs' })
  })

  test('maps headings on the root index.md page', async () => {
    const page = { relativePath: 'index.md', markdown: '## 見出し' }
    expect(await getEnglishHeadings(page, indexContext)).toEqual({ 見出し: 'Get started' })
  })

  test('renders Liquid in translated and English headings', async () => {
    const page = {
      relativePath: 'foo/bar.md',
      markdown: [
        '## {% data variables.product.prodname_dependabot_alerts %} の有効化',
        '## {% data variables.product.prodname_actions %} について',
        '## Plain & simple',
        '## Acerca de Copilot',
      ].join('\n\n'),
    }
    const context = makeContext(
      [
        '## Enabling {% data variables.product.prodname_dependabot_alerts %}',
        '## About {% data variables.product.prodname_actions %}',
        '## Plain and simple',
        '## About {% data variables.product.prodname_copilot %}',
      ].join('\n\n'),
    )
    const headings = await getEnglishHeadings(page, context)
    expect(headings).toEqual({
      'Dependabot alerts の有効化': 'Enabling Dependabot alerts',
      'GitHub Actions について': 'About GitHub Actions',
      'Plain & simple': 'Plain and simple',
      'Acerca de Copilot': 'About GitHub Copilot',
    })
  })

  test('falls back to the raw heading text when Liquid fails to render', async () => {
    const page = { relativePath: 'foo/bar.md', markdown: '## Roto {% ifversion fpt %}' }
    const context = makeContext('## Broken {% ifversion fpt %}')
    const headings = await getEnglishHeadings(page, context)
    expect(headings).toEqual({ 'Roto {% ifversion fpt %}': 'Broken {% ifversion fpt %}' })
  })

  test('gives translated headings with Liquid their English IDs', async () => {
    const page = {
      relativePath: 'foo/bar.md',
      markdown: '## {% data variables.product.prodname_dependabot_alerts %} の有効化',
    }
    const context = makeContext(
      '## Enabling {% data variables.product.prodname_dependabot_alerts %}',
    )
    context.englishHeadings = await getEnglishHeadings(page, context)
    const html = await renderContent(page.markdown, context)
    expect(html).toContain('id="enabling-dependabot-alerts"')
  })

  test('keeps English suffixes for repeated translated headings with Liquid', async () => {
    const page = {
      relativePath: 'foo/bar.md',
      markdown: [
        '## {% data variables.product.prodname_actions %} の使用',
        '## 概要',
        '## {% data variables.product.prodname_actions %} の使用',
      ].join('\n\n'),
    }
    const context = makeContext(
      [
        '## Using {% data variables.product.prodname_actions %}',
        '## Overview',
        '## Using {% data variables.product.prodname_actions %}',
      ].join('\n\n'),
    )
    context.englishHeadings = await getEnglishHeadings(page, context)
    const html = await renderContent(page.markdown, context)
    expect(html).toContain('id="using-github-actions"')
    expect(html).toContain('id="overview"')
    expect(html).toContain('id="using-github-actions-1"')
  })
})

describe('getEnglishHeadings on glossary pages', () => {
  beforeEach(() => {
    glossaries.en = toGlossary(['fork', 'branch'])
    glossaries.es = toGlossary(['bifurcación', 'rama'])
  })

  test('maps translated glossary terms and page headings to English', async () => {
    const map = await getEnglishHeadings(glossaryPage, glossaryContext)
    expect(map?.['bifurcación']).toBe('fork')
    expect(map?.['rama']).toBe('branch')
    expect(map?.['Lectura adicional']).toBe('Further reading')
  })

  test('renders English IDs for special characters and duplicate slugs', async () => {
    glossaries.en = toGlossary(['@mention', 'fork & branch', 'mention'])
    glossaries.es = toGlossary(['@mención', "bifurcación & l'rama", 'mención'])
    const map = (await getEnglishHeadings(glossaryPage, glossaryContext))!
    // Translated pages sort terms by localized text, so use an order that differs from English.
    const ids = await renderHeadingIds(
      "## mención\n\n## bifurcación & l'rama\n\n## @mención\n\n## Lectura adicional",
      map,
    )
    expect(ids).toEqual(['mention-1', 'fork--branch', 'mention', 'further-reading'])
  })

  test('keeps localized IDs for a translated term shared by two English terms', async () => {
    glossaries.en = toGlossary(['fork', 'merge', 'squash'])
    glossaries.es = toGlossary(['bifurcación', 'combinar', 'combinar'])
    const map = (await getEnglishHeadings(glossaryPage, glossaryContext))!
    expect(map['combinar']).toBeUndefined()
    const ids = await renderHeadingIds('## bifurcación\n\n## combinar\n\n## combinar', map)
    expect(ids).toEqual(['fork', 'combinar', 'combinar-1'])
  })

  test('keeps localized term IDs when glossary lengths differ', async () => {
    glossaries.en = toGlossary(['branch', 'fork', 'pull request'])
    const map = await getEnglishHeadings(glossaryPage, glossaryContext)
    expect(map?.['bifurcación']).toBeUndefined()
    expect(map?.['rama']).toBeUndefined()
    expect(map?.['Lectura adicional']).toBe('Further reading')
  })
})
