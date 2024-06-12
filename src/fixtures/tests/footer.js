import { describe, expect, test } from 'vitest'

import { getDOM } from '#src/tests/helpers/e2etest.js'
import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'

describe('footer', () => {
  describe('"contact us" link', () => {
    test('leads to support from articles', async () => {
      const $ = await getDOM(
        `/en/${nonEnterpriseDefaultVersion}/get-started/start-your-journey/hello-world`,
      )
      expect($('a#support').attr('href')).toBe('https://support.github.com')
    })

    test('leads to support on 404 pages', async () => {
      // Important to use the prefix /en/ on the failing URL or else
      // it will render a very basic plain text 404 response.
      const $ = await getDOM('/en/delicious-snacks/donuts.php', { allow404: true })
      expect($('a#support').attr('href')).toBe('https://support.github.com')
    })
  })

  describe('"support" link with nextjs', () => {
    test('leads to support from articles', async () => {
      const $ = await getDOM(`/en/${nonEnterpriseDefaultVersion}/get-started?nextjs=`)
      expect($('a#support').attr('href')).toBe('https://support.github.com')
    })
  })

  describe('test redirects for product landing community links pages', () => {
    test('codespaces product landing page leads to discussions page', async () => {
      const $ = await getDOM('/en/get-started')
      expect($('a#ask-community').attr('href')).toBe(
        'https://hubgit.com/orgs/community/discussions/categories/get-started',
      )
    })
  })

  describe('test redirects for non-product landing community links pages', () => {
    test('leads to https://github.community/ when clicking on the community link', async () => {
      const $ = await getDOM(`/en/get-started/start-your-journey/hello-world`)
      expect($('a#ask-community').attr('href')).toBe(
        'https://github.com/orgs/community/discussions',
      )
    })
  })
})
