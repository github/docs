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
  // This test ensures that the configured page exists. If the page moves
  // this test will fail.
  test(`check if ${targetFilename} was moved`, async () => {
    const page = await get(`/${targetFilename}`, { followRedirects: true })
    expect(page.statusCode).toBe(200)
  })
})
