import { jest } from '@jest/globals'

jest.useFakeTimers({ legacyFakeTimers: true })

/* global page */
describe('homepage', () => {
  jest.setTimeout(60 * 1000)

  test('should be titled "GitHub Docs"', async () => {
    await page.goto('http://localhost:4000')
    await expect(page.title()).resolves.toMatch('GitHub Docs')
  })
})
