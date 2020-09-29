const languages = require('../../lib/languages')
const robotsParser = require('robots-parser')
const robotsMiddleware = require('../../middleware/robots')
const { get } = require('../helpers')
const MockExpressResponse = require('mock-express-response')
const products = require('../../lib/all-products')
const enterpriseServerReleases = require('../../lib/enterprise-server-releases')

describe('robots.txt', () => {
  jest.setTimeout(5 * 60 * 1000)

  let res, robots
  beforeAll(async (done) => {
    res = await get('/robots.txt')
    robots = robotsParser('https://help.github.com/robots.txt', res.text)
    done()
  })

  it('allows indexing of the homepage and English content', async () => {
    expect(robots.isAllowed('https://help.github.com/')).toBe(true)
    expect(robots.isAllowed('https://help.github.com/en')).toBe(true)
    expect(robots.isAllowed('https://help.github.com/en/articles/verifying-your-email-address')).toBe(true)
  })

  it('allows indexing of generally available localized content', async () => {
    Object.values(languages)
      .filter(language => !language.wip)
      .forEach(language => {
        expect(robots.isAllowed(`https://help.github.com/${language.code}`)).toBe(true)
        expect(robots.isAllowed(`https://help.github.com/${language.code}/articles/verifying-your-email-address`)).toBe(true)
      })
  })

  it('disallows indexing of WIP localized content', async () => {
    Object.values(languages)
      .filter(language => language.wip)
      .forEach(language => {
        expect(robots.isAllowed(`https://help.github.com/${language.code}`)).toBe(false)
        expect(robots.isAllowed(`https://help.github.com/${language.code}/articles/verifying-your-email-address`)).toBe(false)
      })
  })

  it('disallows indexing of herokuapp.com domains', async () => {
    const req = {
      hostname: 'docs-internal-12345--my-branch.herokuapp.com',
      path: '/robots.txt'
    }
    const res = new MockExpressResponse()
    const next = () => { /* no op */ }

    await robotsMiddleware(req, res, next)
    expect(res._getString()).toEqual('User-agent: *\nDisallow: /')
  })

  it('disallows indexing of WIP products', async () => {
    const wipProductIds = Object.values(products)
      .filter(product => product.wip)
      .map(product => product.id)

    wipProductIds.forEach(id => {
      const { href } = products[id]
      const blockedPaths = [
        // English
        `https://help.github.com/en${href}`,
        `https://help.github.com/en${href}/overview`,
        `https://help.github.com/en${href}/overview/intro`,
        `https://help.github.com/en/enterprise/${enterpriseServerReleases.latest}/user${href}`,
        `https://help.github.com/en/enterprise/${enterpriseServerReleases.oldestSupported}/user${href}`,

        // Japanese
        `https://help.github.com/ja${href}`,
        `https://help.github.com/ja${href}/overview`,
        `https://help.github.com/ja${href}/overview/intro`,
        `https://help.github.com/ja/enterprise/${enterpriseServerReleases.latest}/user${href}`,
        `https://help.github.com/ja/enterprise/${enterpriseServerReleases.oldestSupported}/user${href}`
      ]

      blockedPaths.forEach(path => {
        expect(robots.isAllowed(path)).toBe(false)
      })
    })
  })

  it('allows indexing of non-WIP products', async () => {
    expect('actions' in products).toBe(true)
    expect(robots.isAllowed('https://help.github.com/en/actions')).toBe(true)
    expect(robots.isAllowed('https://help.github.com/en/actions/overview')).toBe(true)
    expect(robots.isAllowed('https://help.github.com/en/actions/overview/intro')).toBe(true)
    expect(robots.isAllowed(`https://help.github.com/en/enterprise/${enterpriseServerReleases.latest}/user/actions`)).toBe(true)
    expect(robots.isAllowed(`https://help.github.com/en/enterprise/${enterpriseServerReleases.oldestSupported}/user/actions`)).toBe(true)
  })
})
