import { describe, expect, test } from 'vitest'
import { readFileSync } from 'fs'

import { get } from '#src/tests/helpers/e2etest.js'

describe('secret-scanning pipeline', () => {
  const { targetFilename } = JSON.parse(readFileSync('src/secret-scanning/lib/config.json'))
  // This test ensures that the configured page exists. If the page moves
  // this test will fail.
  test(`check if ${targetFilename} was moved`, async () => {
    const page = await get(`/${targetFilename}`, { followRedirects: true })
    expect(page.statusCode).toBe(200)
  })
})
