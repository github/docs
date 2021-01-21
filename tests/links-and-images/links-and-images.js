const linkinator = require('linkinator')
const checker = new linkinator.LinkChecker()
const { deprecated } = require('../../lib/enterprise-server-releases')

const config = {
  path: 'http://localhost:4002/en',
  concurrency: 400,
  recurse: true,
  linksToSkip: [
    // Skip any link that is not an internal link
    '^((?!http://localhost:4002/en).)*$',
    // Skip dist files
    '/dist/index.*',
    // Skip deprecated Enterprise content
    `enterprise(-server@|/)(${deprecated.join('|')})/?`
  ]
}

describe('page rendering', () => {
  jest.setTimeout(1000 * 1000)

  let result
  beforeAll(async (done) => {
    result = (await checker.check(config)).links
    done()
  })

  test('every page has internal links that can be resolved', async () => {
    const brokenLinks = result
      .filter(link => link.state === 'BROKEN')
      .map(link => {
        delete link.failureDetails
        return link
      })
    expect(brokenLinks.length, `Found ${brokenLinks.length} total broken links: ${JSON.stringify([...brokenLinks], null, 2)}`).toBe(0)
  })
})
