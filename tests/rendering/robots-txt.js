import languages from '../../lib/languages.js'
import robotsParser from 'robots-parser'
import robotsMiddleware from '../../middleware/robots.js'
import { get } from '../helpers/supertest.js'
import MockExpressResponse from 'mock-express-response'
import { jest } from '@jest/globals'

describe('robots.txt', () => {
  jest.setTimeout(5 * 60 * 1000)

  let res, robots
  beforeAll(async () => {
    res = await get('/robots.txt')
    robots = robotsParser('https://docs.github.com/robots.txt', res.text)
  })

  it('allows indexing of the homepage and English content', async () => {
    expect(robots.isAllowed('https://docs.github.com/')).toBe(true)
    expect(robots.isAllowed('https://docs.github.com/en')).toBe(true)
    expect(
      robots.isAllowed('https://docs.github.com/en/articles/verifying-your-email-address')
    ).toBe(true)
  })

  it('allows indexing of generally available localized content', async () => {
    Object.values(languages)
      .filter((language) => !language.wip)
      .forEach((language) => {
        expect(robots.isAllowed(`https://docs.github.com/${language.code}`)).toBe(true)
        expect(
          robots.isAllowed(
            `https://docs.github.com/${language.code}/articles/verifying-your-email-address`
          )
        ).toBe(true)
      })
  })

  it('disallows indexing of herokuapp.com domains', async () => {
    const req = {
      hostname: 'docs-internal-12345--my-branch.herokuapp.com',
      path: '/robots.txt',
    }
    const res = new MockExpressResponse()
    const next = () => {
      /* no op */
    }

    await robotsMiddleware(req, res, next)
    expect(res._getString()).toEqual('User-agent: *\nDisallow: /')
  })

  it('does not have duplicate lines', () => {
    const lines = new Set()
    for (const line of res.text.split('\n')) {
      if (/^\s*$/.test(line)) continue
      expect(lines.has(line)).toBe(false)
      lines.add(line)
    }
  })
})
