import { describe, expect, test } from 'vitest'
import { readFileSync } from 'fs'

import { get } from '@/tests/helpers/e2etest'

interface ConfigFile {
  targetFilename: string
}

describe('secret-scanning pipeline', () => {
  const { targetFilename } = JSON.parse(
    readFileSync('src/secret-scanning/lib/config.json', 'utf8'),
  ) as ConfigFile
  test(`check if ${targetFilename} was moved`, async () => {
    const page = await get(`/${targetFilename}`, { followRedirects: true })
    expect(page.statusCode).toBe(200)
  })

  test('should not crash on malformed URL with double version', async () => {
    const url =
      '/en/enterprise-server@3.11/enterprise-cloud@latest/code-security/secret-scanning/introduction/supported-secret-scanning-patterns'
    const res = await get(url)
    // Invalid double-version URLs can return 404, but they must not return 500.
    expect(res.statusCode).not.toBe(500)
  })
})
