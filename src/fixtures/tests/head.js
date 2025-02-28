import { describe, expect, test } from 'vitest'

import { getDOM } from '#src/tests/helpers/e2etest.js'

describe('<head>', () => {
  test('includes page intro in `description` meta tag', async () => {
    const $ = await getDOM('/get-started/markdown/intro')
    // The intro has Markdown syntax which becomes HTML encoded in the lead element.
    const lead = $('[data-testid="lead"] p')
    expect(lead.html()).toMatch('<code>syntax</code>')
    // As a meta description its content is stripped of all HTML
    const description = $('head meta[name="description"]')
    expect(description.attr('content')).toBe('This intro has Markdown syntax for HubGit')
  })
})
