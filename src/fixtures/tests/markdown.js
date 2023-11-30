import { getDOM } from '#src/tests/helpers/e2etest.js'

describe('markdown rendering', () => {
  test('markdown in intro', async () => {
    const $ = await getDOM('/get-started/markdown/intro')
    const html = $('[data-testid="lead"]').html()
    expect(html).toMatch('<strong>Markdown</strong>')
    expect(html).toMatch('<code>syntax</code>')
    expect(html).toMatch('<em>HubGit</em>')
  })

  test('page with permission frontmatter', async () => {
    const $ = await getDOM('/get-started/markdown/permissions')
    const html = $('[data-testid="permissions-statement"]').html()
    // part of the UI
    expect(html).toMatch('Who can use this feature')
    // Markdown
    expect(html).toMatch('<strong>admin</strong>')
    // Liquid
    expect(html).toMatch('HubGit Pages site')
  })
})
