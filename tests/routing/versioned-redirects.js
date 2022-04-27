import { jest } from '@jest/globals'

import { get } from '../helpers/e2etest.js'
import getExceptionRedirects from '../helpers/exception-redirects.js'

describe('versioned redirects', () => {
  jest.setTimeout(5 * 60 * 1000)

  const exceptionRedirects = getExceptionRedirects()

  test.each(Object.keys(exceptionRedirects))('responds with 200 on %p', async (oldPath) => {
    const newPath = exceptionRedirects[oldPath]
    const englishNewPath = `/en${newPath}`
    const { statusCode, headers } = await get(oldPath, { followRedirects: false })
    expect(statusCode).toBe(302)
    expect(headers.location).toBe(englishNewPath)
  })
})
