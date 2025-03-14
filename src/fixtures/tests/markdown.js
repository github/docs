import { describe, expect, test } from 'vitest'

import { getDOM } from '#src/tests/helpers/e2etest.js'

describe('markdown rendering', () => {
  test('markdown in intro', async () => {
    const $ = await getDOM('/get-started/markdown/intro')
    const html = $('[data-testid="lead"]').html()
    expect(html).toMatch('<strong>Markdown</strong>')
    expect(html).toMatch('<code>syntax</code>')
    expect(html).toMatch('<em>HubGit</em>')
  })
})

describe('alerts', () => {
  test('basic rendering', async () => {
    const $ = await getDOM('/get-started/markdown/alerts')
    const alerts = $('#article-contents .ghd-alert')
    // See src/fixtures/fixtures/content/get-started/markdown/alerts.md
    // to be this confident in the assertions.
    expect(alerts.length).toBe(5)
    const svgs = $('svg', alerts)
    expect(svgs.length).toBe(5)
    const titles = $('.ghd-alert-title', alerts)
      .map((_, el) => $(el).text())
      .get()
    expect(titles).toEqual(['Tip', 'Note', 'Important', 'Warning', 'Caution'])
    const bodies = $('p:nth-child(2)', alerts)
      .map((_, el) => $(el).text())
      .get()
      .map((s) => s.trim())
    expect(bodies).toEqual([
      "Here's a free tip",
      'A note.',
      'This is important',
      'Just a warning',
      'Be careful!',
    ])
  })
})
