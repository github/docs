import { fileURLToPath } from 'url'
import path from 'path'
import { jest } from '@jest/globals'

import { get } from '../../../../tests/helpers/e2etest.js'
import getExceptionRedirects from '../../lib/exception-redirects.js'
import { latest } from '#src/versions/lib/enterprise-server-releases.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const EXCEPTIONS_FILE = path.join(__dirname, '../../lib/static/redirect-exceptions.txt')

describe('redirect exceptions', () => {
  jest.setTimeout(5 * 60 * 1000)

  const redirectExceptions = getExceptionRedirects(EXCEPTIONS_FILE)

  test.each(Object.keys(redirectExceptions))('responds with redirect on %p', async (oldPath) => {
    const newPath = redirectExceptions[oldPath]
    const englishNewPath = `/en${newPath.replace(
      '/enterprise-server@latest',
      `/enterprise-server@${latest}`,
    )}`
    const { statusCode, headers } = await get(oldPath, { followRedirects: false })
    expect(statusCode).toBe(302)
    expect(headers.location).toBe(englishNewPath)
  })
})
