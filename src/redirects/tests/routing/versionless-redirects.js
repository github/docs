import { jest } from '@jest/globals'

import { get } from '../../../../tests/helpers/e2etest.js'
import getExceptionRedirects from '../../lib/exception-redirects.js'
import { latest } from '#src/versions/lib/enterprise-server-releases.js'

import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const VERSIONLESS_REDIRECTS_FILE = path.join(
  __dirname,
  '../../../../tests/fixtures/versionless-redirects.txt',
)

// This test checks the default versioning redirect fallbacks described in lib/all-versions.js.
// The fixture is a text file that formerly lived in /src/redirects/lib/static/redirect-exceptions.txt.
//
// (That exceptions file still exists but is much smaller now that we've added the default fallbacks.
// It only contains "true" exceptions now. Those are tested in tests/routing/redirect-exceptions.js.)
describe('versioned redirects', () => {
  jest.setTimeout(5 * 60 * 1000)

  const versionlessRedirects = getExceptionRedirects(VERSIONLESS_REDIRECTS_FILE)

  test.each(Object.keys(versionlessRedirects))('responds with redirect on %p', async (oldPath) => {
    const newPath = versionlessRedirects[oldPath]
    const englishNewPath = `/en${newPath.replace(
      '/enterprise-server@latest',
      `/enterprise-server@${latest}`,
    )}`
    const { statusCode, headers } = await get(oldPath, { followRedirects: false })
    expect(statusCode).toBe(302)
    expect(headers.location).toBe(englishNewPath)
  })
})
