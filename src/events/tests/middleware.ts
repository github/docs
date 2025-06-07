import { describe, expect, test, vi } from 'vitest'

import { post } from '@/tests/helpers/e2etest.js'

describe('POST /events', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  async function checkEvent(data: any) {
    if (!Array.isArray(data)) {
      data = [data]
    }
    const body = JSON.stringify(data)
    const res = await post('/api/events', {
      body,
      headers: {
        'content-type': 'application/json',
      },
    })
    return res
  }

  const pageExample = {
    type: 'page',
    context: {
      // Primitives
      event_id: 'a35d7f88-3f48-4f36-ad89-5e3c8ebc3df7',
      user: '703d32a8-ed0f-45f9-8d78-a913d4dc6f19',
      version: '1.0.0',
      created: '2020-10-02T17:12:18.620Z',

      // Content information
      path: '/github/docs/issues',
      hostname: 'github.com',
      referrer: 'https://github.com/github/docs',
      search: '?q=is%3Aissue+is%3Aopen+example+',
      href: 'https://github.com/github/docs/issues?q=is%3Aissue+is%3Aopen+example+',
      path_language: 'en',

      // Device information
      os: 'linux',
      os_version: '18.04',
      browser: 'chrome',
      browser_version: '85.0.4183.121',
      is_headless: false,
      viewport_width: 1418,
      viewport_height: 501,

      // Location information
      timezone: -7,
      user_language: 'en-US',
    },
  }

  const exitExample = {
    type: 'exit',
    context: {
      // Primitives
      event_id: 'a35d7f88-3f48-4f36-ad89-5e3c8ebc3df7',
      user: '703d32a8-ed0f-45f9-8d78-a913d4dc6f19',
      version: '1.0.0',
      created: '2020-10-02T17:12:18.620Z',

      // Content information
      path: '/github/docs/issues',
      hostname: 'github.com',
      referrer: 'https://github.com/github/docs',
      search: '?q=is%3Aissue+is%3Aopen+example+',
      href: 'https://github.com/github/docs/issues?q=is%3Aissue+is%3Aopen+example+',
      path_language: 'en',

      // Device information
      os: 'linux',
      os_version: '18.04',
      browser: 'chrome',
      browser_version: '85.0.4183.121',
      is_headless: false,
      viewport_width: 1418,
      viewport_height: 501,

      // Location information
      timezone: -7,
      user_language: 'en-US',
    },
  }

  test('should record a page and exit event', async () => {
    const eventQueue = [pageExample, exitExample]
    const { statusCode } = await checkEvent(eventQueue)
    expect(statusCode).toBe(200)
  })

  test('should require a type', async () => {
    const { statusCode } = await checkEvent({ ...pageExample, type: undefined })
    // should skip events with no type
    expect(statusCode).toBe(200)
  })

  test('should require an event_id in uuid', async () => {
    const { statusCode } = await checkEvent({
      ...pageExample,
      context: {
        ...pageExample.context,
        event_id: 'asdfghjkl',
      },
    })
    expect(statusCode).toBe(400)
  })

  test('should require a user in uuid', async () => {
    const { statusCode } = await checkEvent({
      ...pageExample,
      context: {
        ...pageExample.context,
        user: 'asdfghjkl',
      },
    })
    expect(statusCode).toBe(400)
  })

  test('should require a version', async () => {
    const { statusCode } = await checkEvent({
      ...pageExample,
      context: {
        ...pageExample.context,
        version: undefined,
      },
    })
    expect(statusCode).toBe(400)
  })

  test('should require created timestamp', async () => {
    const { statusCode } = await checkEvent({
      ...pageExample,
      context: {
        ...pageExample.context,
        timestamp: 1234,
      },
    })
    expect(statusCode).toBe(400)
  })

  test('should not allow a honeypot token', async () => {
    const { statusCode } = await checkEvent({
      ...pageExample,
      context: {
        ...pageExample.context,
        token: 'zxcv',
      },
    })
    expect(statusCode).toBe(400)
  })
})
