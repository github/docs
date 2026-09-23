import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import nock from 'nock'

import FailBot from '../lib/failbot'

describe('FailBot', () => {
  const requestBodiesSent: unknown[] = []

  beforeEach(() => {
    delete process.env.HAYSTACK_URL

    requestBodiesSent.length = 0

    nock('https://haystack.example.com')
      .post('/')
      .reply(200, (uri, requestBody) => {
        requestBodiesSent.push(requestBody)
        return requestBody
      })
  })

  afterEach(() => {
    delete process.env.HAYSTACK_URL
  })

  describe('.report', () => {
    test('returns early if `HAYSTACK_URL` is not set', async () => {
      const result = await FailBot.report(new Error('test'))
      expect(result).toBeUndefined()
      expect(requestBodiesSent.length).toBe(0)
    })

    test('sends the expected report', async () => {
      process.env.HAYSTACK_URL = 'https://haystack.example.com'
      const err = new Error('Kaboom')
      const backendPromises = FailBot.report(err, { foo: 'bar' })
      // Production code doesn't need to await what `FailBot.report()` returns.
      // In vitest we await now,
      // so we can assert the POST requests happened.
      if (backendPromises) {
        await Promise.all(await backendPromises)
      }

      // What `.report()` returns doesn't matter, only that it POSTed.
      expect(requestBodiesSent.length).toBe(1)

      expect(requestBodiesSent[0]).toMatchObject({
        app: 'docs',
        backtrace: expect.stringContaining('Error: Kaboom'),
        class: 'Error',
        created_at: expect.any(String),
        js_environment: expect.stringMatching(/^Node\.js\sv[\d.]+/),
        message: 'Kaboom',
        rollup: expect.any(String),
      })
    })
  })
})
