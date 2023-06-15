import { getDOMCached as getDOM } from '../helpers/e2etest.js'

describe('glossary', () => {
  test('headings are sorted alphabetically', async () => {
    const $ = await getDOM('/get-started/quickstart/github-glossary')
    const headings = $('#article-contents h2')
    const headingTexts = headings.map((_, el) => $(el).text()).get()
    const cloned = [...headingTexts].sort((a, b) => a.localeCompare(b))
    const equalStringArray = (a, b) => a.length === b.length && a.every((v, i) => v === b[i])
    expect(equalStringArray(headingTexts, cloned)).toBe(true)
  })
  test('Markdown links are correct', async () => {
    const $ = await getDOM('/get-started/quickstart/github-glossary')
    const internalLink = $('#article-contents a[href="/en/get-started/foo"]')
    expect(internalLink.length).toBe(1)
    // That link used AUTOTITLE so it should be "expanded"
    expect(internalLink.text()).toBe('Fooing Around')
  })

  test('all Liquid is evaluated', async () => {
    const $ = await getDOM('/get-started/quickstart/github-glossary')
    const paragraphs = $('#article-contents p')
    const paragraphTexts = paragraphs.map((_, el) => $(el).text()).get()
    expect(paragraphTexts.find((text) => text.includes('{%'))).toBe(undefined)
  })

  test('liquid in one of the description depends on version', async () => {
    // fpt
    {
      const $ = await getDOM('/get-started/quickstart/github-glossary')
      const paragraphs = $('#article-contents p')
      const paragraphTexts = paragraphs
        .map((_, el) => $(el).text())
        .get()
        .join('\n')
      expect(paragraphTexts).toContain('status check on GitHub.')
    }

    // ghes
    {
      const $ = await getDOM('/enterprise-server@latest/get-started/quickstart/github-glossary')
      const paragraphs = $('#article-contents p')
      const paragraphTexts = paragraphs
        .map((_, el) => $(el).text())
        .get()
        .join('\n')
      expect(paragraphTexts).toContain('status check on GitHub Enterprise Server.')
    }
  })
})
