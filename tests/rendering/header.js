import { expect, jest } from '@jest/globals'

import { getDOM } from '../helpers/e2etest.js'
import { oldestSupported } from '../../lib/enterprise-server-releases.js'

describe('header', () => {
  jest.setTimeout(5 * 60 * 1000)

  describe('mobile-only product dropdown links', () => {
    test('include Get started and admin, and emphasize the current product', async () => {
      const $ = await getDOM(
        '/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer'
      )
      const getStarted = $('div ul ul li a[href="/en/get-started"]')
      expect(getStarted.length).toBe(1)
      expect(getStarted.text().trim()).toBe('Get started')

      const ghec = $(`[data-testid=product-picker] a[href="/en/enterprise-cloud@latest/admin"]`)
      expect(ghec.length).toBe(1)
      expect(ghec.text().trim()).toBe('Enterprise administrators')
    })

    test('emphasizes the product that corresponds to the current page', async () => {
      const $ = await getDOM(
        `/en/enterprise-server@${oldestSupported}/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line`
      )

      expect($('[data-testid=product-picker] summary').text()).toBe('Get started')
    })
  })
})
