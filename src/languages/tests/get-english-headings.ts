import { describe, expect, test } from 'vitest'

import { renderContent } from '@/content-render/index'
import getEnglishHeadings from '@/languages/lib/get-english-headings'
import type { Context, Page } from '@/types'

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
