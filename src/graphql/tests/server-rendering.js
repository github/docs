import { getDOM } from '../../../tests/helpers/e2etest.js'

describe('server rendering certain GraphQL pages', () => {
  test('minitoc hrefs on breaking-changes match', async () => {
    const $ = await getDOM('/graphql/overview/breaking-changes')
    const links = $('[data-testid="minitoc"] a[href]')
    const hrefs = links.map((i, link) => $(link).attr('href')).get()
    expect(hrefs.length).toBeGreaterThan(0)

    for (const href of hrefs) {
      if (!href.startsWith('#')) {
        throw new Error(`Expected href to start with # but got ${href}`)
      }
      const headings = $(href)
      expect(headings.length).toBe(1)
    }
    expect.assertions(hrefs.length + 1)
  })
})
