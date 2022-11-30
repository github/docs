import { getDOM } from '../helpers/supertest.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
import { jest } from '@jest/globals'

describe('footer', () => {
  jest.setTimeout(10 * 60 * 1000)

  describe('"contact us" link', () => {
    test('leads to dotcom support on dotcom pages', async () => {
      const $ = await getDOM(`/en/${nonEnterpriseDefaultVersion}/github`)
      expect($('a#contact-us').attr('href')).toBe('https://support.github.com/contact')
    })

    test('leads to Enterprise support on Enterprise pages', async () => {
      const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}`)
      expect($('a#contact-us').attr('href')).toBe('https://enterprise.github.com/support')
    })

    test('leads to dotcom support on 404 pages', async () => {
      const $ = await getDOM('/en/delicious-snacks/donuts.php')
      expect($('a#contact-us').attr('href')).toBe('https://support.github.com/contact')
    })
  })

  describe('"contact us" link with nextjs', () => {
    test('leads to dotcom support on dotcom pages', async () => {
      const $ = await getDOM(`/en/${nonEnterpriseDefaultVersion}/github?nextjs=`)
      expect($('a#contact-us').attr('href')).toBe('https://support.github.com/contact')
    })
  })

  describe('test redirects for product landing community links pages', () => {
    test('codespaces product landing page leads to codespaces discussions page', async () => {
      const $ = await getDOM(`/en/codespaces`)
      expect($('a#ask-community').attr('href')).toBe(
        'https://github.com/github/feedback/discussions/categories/codespaces-feedback'
      )
    })

    test('sponsors product landing page leads to sponsors discussions page', async () => {
      const $ = await getDOM(`/en/sponsors`)
      expect($('a#ask-community').attr('href')).toBe(
        'https://github.com/github/feedback/discussions/categories/sponsors-feedback'
      )
    })

    test('codespaces product landing page leads to discussions discussions page', async () => {
      const $ = await getDOM(`/en/discussions`)
      expect($('a#ask-community').attr('href')).toBe(
        'https://github.com/github/feedback/discussions/categories/discussions-feedback'
      )
    })
  })

  describe('test redirects for non-product landing community links pages', () => {
    test('leads to https://github.community/ when clicking on the community link', async () => {
      const $ = await getDOM(`/en/github/authenticating-to-github`)
      expect($('a#ask-community').attr('href')).toBe('https://github.community/')
    })
  })
})
