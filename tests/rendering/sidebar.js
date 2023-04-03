import { expect, jest } from '@jest/globals'

import { getDOM } from '../helpers/e2etest.js'
import { allVersions } from '../../lib/all-versions.js'

jest.useFakeTimers({ legacyFakeTimers: true })
const req = {}
describe('sidebar', () => {
  jest.setTimeout(3 * 60 * 1000)
  beforeAll(async () => {
    req.context = {
      allVersions,
      currentLanguage: 'en',
    }
  })

  test('highlights active product on Enterprise pages on xl viewport', async () => {
    const $ = await getDOM('/en/enterprise/admin')
    expect($('[data-testid=sidebar-product-xl]').length).toBe(1)
    expect($('[data-testid=sidebar-product-xl]').text().trim()).toBe('Enterprise administrators')
  })

  test('REST API Reference title is viewable', async () => {
    const $ = await getDOM('/en/rest')
    expect($('[data-testid=rest-sidebar-reference]').length).toBe(1)
  })

  test("test a page where there's known sidebar short titles that use Liquid and ampersands", async () => {
    const url =
      '/en/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards'
    const $ = await getDOM(url)
    const linkTexts = []
    $('[data-testid=sidebar]  a').each((i, element) => {
      linkTexts.push($(element).text())
    })
    // This makes sure that none of the texts in there has their final HTML
    // to be HTML entity encoded.
    expect(linkTexts.filter((text) => text.includes('&amp;')).length).toBe(0)
  })
})
