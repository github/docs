import { expect, jest } from '@jest/globals'
import { post } from '../../../tests/helpers/e2etest.js'

describe('POST /events', () => {
  jest.setTimeout(60 * 1000)

  async function checkEvent(data, code) {
    const body = JSON.stringify(data)
    const res = await post('/api/events', {
      body,
      headers: {
        'content-type': 'application/json',
      },
    })
    expect(res.statusCode).toBe(code)
  }

  const baseExample = {
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
      viewport_width: 1418,
      viewport_height: 501,

      // Location information
      timezone: -7,
      user_language: 'en-US',
    },
  }

  const pageExample = { ...baseExample, type: 'page' }

  it('should require a type', () => checkEvent(baseExample, 400))

  it('should record a page event', () => checkEvent(pageExample, 200))

  it('should require an event_id in uuid', () =>
    checkEvent(
      {
        ...pageExample,
        context: {
          ...pageExample.context,
          event_id: 'asdfghjkl',
        },
      },
      400
    ))

  it('should require a user in uuid', () =>
    checkEvent(
      {
        ...pageExample,
        context: {
          ...pageExample.context,
          user: 'asdfghjkl',
        },
      },
      400
    ))

  it('should require a version', () =>
    checkEvent(
      {
        ...pageExample,
        context: {
          ...pageExample.context,
          version: undefined,
        },
      },
      400
    ))

  it('should require created timestamp', () =>
    checkEvent(
      {
        ...pageExample,
        context: {
          ...pageExample.context,
          timestamp: 1234,
        },
      },
      400
    ))

  it('should not allow a honeypot token', () =>
    checkEvent(
      {
        ...pageExample,
        context: {
          ...pageExample.context,
          token: 'zxcv',
        },
      },
      400
    ))
})
