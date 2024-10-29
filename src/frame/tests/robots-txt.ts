import type { Response } from 'got'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import robotsParser, { type Robot } from 'robots-parser'

import {
  SURROGATE_ENUMS,
  makeLanguageSurrogateKey,
} from '@/frame/middleware/set-fastly-surrogate-key.js'
import { get } from '@/tests/helpers/e2etest.js'

describe('robots.txt', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  let res: Response<string>, robots: Robot
  beforeAll(async () => {
    res = await get('/robots.txt', {
      headers: {
        Host: 'docs.github.com',
      },
    })
    expect(res.statusCode).toBe(200)
    robots = robotsParser('https://docs.github.com/robots.txt', res.body)
  })

  test('allows indexing of the homepage and English content', async () => {
    expect(robots.isAllowed('https://docs.github.com/')).toBe(true)
    expect(robots.isAllowed('https://docs.github.com/en')).toBe(true)
    expect(
      robots.isAllowed('https://docs.github.com/en/articles/verifying-your-email-address'),
    ).toBe(true)
  })

  test('disallows indexing of azurecontainer.io domains', async () => {
    const res = await get('/robots.txt', {
      headers: {
        host: 'docs-internal-preview-12345-asdfz.azurecontainer.io',
      },
    })
    expect(res.body).toEqual('User-agent: *\nDisallow: /')
  })

  test('does not have duplicate lines', () => {
    expect(res.body.split('\n').length).toBe(new Set(res.body.split('\n')).size)
  })

  test('is cached by headers', () => {
    expect(res.headers['cache-control']).toMatch(/public, max-age=/)

    const surrogateKeySplit = (res.headers['surrogate-key'] as string).split(/\s/g)
    expect(surrogateKeySplit.includes(SURROGATE_ENUMS.DEFAULT)).toBeTruthy()
    expect(surrogateKeySplit.includes(makeLanguageSurrogateKey('en'))).toBeTruthy()
  })
})
