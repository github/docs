const { getDOM } = require('../helpers/supertest')
const enterpriseServerReleases = require('../../lib/enterprise-server-releases')
const nonEnterpriseDefaultVersion = require('../../lib/non-enterprise-default-version')

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
})
