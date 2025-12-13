import { describe, expect, test } from 'vitest'
import cheerio from 'cheerio'

import { getDOMCached as getDOM } from '@/tests/helpers/e2etest'

describe('glossary', () => {
  test('headings are sorted alphabetically', async () => {
    const $: cheerio.Root = await getDOM('/get-started/learning-about-github/github-glossary')
    const headings = $('#article-contents h2')
    const headingTexts = headings.map((_: number, el: any) => $(el).text()).get()
    const cloned = [...headingTexts].sort((a: string, b: string) => a.localeCompare(b))
    const equalStringArray = (a: string[], b: string[]) =>
      a.length === b.length && a.every((v, i) => v === b[i])
    expect(equalStringArray(headingTexts, cloned)).toBe(true)
  })
  test('Markdown links are correct', async () => {
    const $: cheerio.Root = await getDOM('/get-started/learning-about-github/github-glossary')
    const internalLink = $('#article-contents a[href="/en/get-started/foo"]')
    expect(internalLink.length).toBe(1)
    // That link used AUTOTITLE so it should be "expanded"
    expect(internalLink.text()).toBe('Fooing Around')
  })

  test('all Liquid is evaluated', async () => {
    const $: cheerio.Root = await getDOM('/get-started/learning-about-github/github-glossary')
    const paragraphs = $('#article-contents p')
    const paragraphTexts = paragraphs.map((_: number, el: any) => $(el).text()).get()
    expect(paragraphTexts.find((text: string) => text.includes('{%'))).toBe(undefined)
  })

  test('liquid in one of the description depends on version', async () => {
    // fpt
    {
      const $: cheerio.Root = await getDOM('/get-started/learning-about-github/github-glossary')
      const paragraphs = $('#article-contents p')
      const paragraphTexts = paragraphs
        .map((_: number, el: any) => $(el).text())
        .get()
        .join('\n')
      expect(paragraphTexts).toContain('status check on HubGit.')
    }

    // ghes
    {
      const $: cheerio.Root = await getDOM(
        '/enterprise-server@latest/get-started/learning-about-github/github-glossary',
      )
      const paragraphs = $('#article-contents p')
      const paragraphTexts = paragraphs
        .map((_: number, el: any) => $(el).text())
        .get()
        .join('\n')
      expect(paragraphTexts).toContain('status check on HubGit Enterprise Server.')
    }
  })
})
