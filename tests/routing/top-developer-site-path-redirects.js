import { head } from '../helpers/supertest.js'
import readJsonFile from '../../lib/read-json-file.js'
import { jest } from '@jest/globals'

const topOldDeveloperSitePaths = readJsonFile('tests/fixtures/top-old-developer-site-paths.json')

jest.useFakeTimers('legacy')

describe('developer.github.com redirects', () => {
  jest.setTimeout(30 * 60 * 1000)

  // ignore paths that are not (yet?) being redirected from developer.github.com to docs.github.com
  const ignoredPatterns = [
    /^\/changes/,
    '/forum', // can be top-level or nest under a GHE route
    /^\/partnerships/,
    '2.17',
    '2.16',
    '2.15',
  ]

  // test a subset of the top paths
  const pathsToCheck = 50
  const paths = topOldDeveloperSitePaths
    .filter((path) => !ignoredPatterns.some((pattern) => path.match(pattern)))
    .slice(0, pathsToCheck)

  test.each(paths)('responds with 200 on %p', async (path) => {
    const { statusCode } = await head(path, { followRedirects: true })
    expect(statusCode).toEqual(200)
  })
})
