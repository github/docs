import { describe, expect, test } from 'vitest'
import type { CheerioAPI } from 'cheerio'

import { getDOM } from '@/tests/helpers/e2etest'

describe('<head>', () => {
  test('includes page intro in `description` meta tag', async () => {
    const $: CheerioAPI = await getDOM('/get-started/markdown/intro')
    // The lead renders Markdown syntax as HTML.
    const lead = $('[data-testid="lead"] p')
    expect(lead.html()).toMatch('<code>syntax</code>')
    // Meta descriptions strip all HTML from Markdown-rendered intros.
    const description = $('head meta[name="description"]')
    expect(description.attr('content')).toBe('This intro has Markdown syntax for HubGit')
  })
})
