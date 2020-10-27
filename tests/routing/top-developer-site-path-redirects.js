const { head } = require('../helpers')

describe('developer.github.com redirects', () => {
  jest.setTimeout(30 * 60 * 1000)

  it('responds with 200 for the top historical request paths', async () => {
    // ignore paths that are not (yet?) being redirected from developer.github.com to docs.github.com
    const ignoredPatterns = [
      /^\/changes/,
      '/forum', // can be top-level or nest under a GHE route
      /^\/partnerships/,
      '2.17',
      '2.16',
      '2.15'
    ]

    // test a subset of the top paths
    const pathsToCheck = 300
    const paths = require('../fixtures/top-old-developer-site-paths.json')
      .filter(path => !ignoredPatterns.some(pattern => path.match(pattern)))
      .slice(0, pathsToCheck)

    const non200s = []

    for (const path of paths) {
      const { statusCode } = await head(path, { followRedirects: true })
      if (statusCode !== 200) {
        non200s.push(path)
      }
    }

    // generate an object with empty values as the error message
    const errorMessage = JSON.stringify(non200s.reduce((acc, path) => {
      acc[path] = ''
      return acc
    }, {}), null, 2)

    expect(non200s, errorMessage).toEqual([])
  })
})
