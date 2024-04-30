import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import nock from 'nock'

import FailBot from '../lib/failbot.js'

describe('FailBot', () => {
  const requestBodiesSent = []

  beforeEach(() => {
    delete process.env.HAYSTACK_URL

    // Always reset the array to an empty one between tests
    // so it doesn't interfere across tests.
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
      const result = await FailBot.report()
      expect(result).toBeUndefined()
      expect(requestBodiesSent.length).toBe(0)
    })

    test('sends the expected report', async () => {
      process.env.HAYSTACK_URL = 'https://haystack.example.com'
      const err = new Error('Kaboom')
      const backendPromises = FailBot.report(err, { foo: 'bar' })
      // Note! You don't need to await the promises it returns to be
      // able to use `FailBot.report()`. It will send.
      // But here in the context of vitest, we need to await *now*
      // so we can assert that it did make the relevant post requests.
      // Once we've done this, we can immediate check what it did.
      await Promise.all(await backendPromises)

      // It's not interesting or relevant what the `.report()` static
      // method returns. All that matters is that it did a POST
      // request.
      expect(requestBodiesSent.length).toBe(1)

      // Verify what was sent in that POST request.
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
