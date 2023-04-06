import { expect, jest } from '@jest/globals'
import { post } from '../../../tests/helpers/e2etest.js'

describe('POST /events', () => {
  jest.setTimeout(60 * 1000)

  async function checkEvent(data) {
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
      viewport_width: 1418,
      viewport_height: 501,

      // Location information
      timezone: -7,
      user_language: 'en-US',
    },
  }

  it('should record a page event', async () => {
    const { statusCode } = await checkEvent(pageExample)
    expect(statusCode).toBe(200)
  })

  it('should require a type', async () => {
    const { statusCode, body } = await checkEvent({ ...pageExample, type: undefined })
    expect(statusCode).toBe(400)
    expect(body).toEqual('{"message":"Invalid type"}')
  })

  it('should require an event_id in uuid', async () => {
    const { statusCode } = await checkEvent({
      ...pageExample,
      context: {
        ...pageExample.context,
        event_id: 'asdfghjkl',
      },
    })
    expect(statusCode).toBe(400)
  })

  it('should require a user in uuid', async () => {
    const { statusCode } = await checkEvent({
      ...pageExample,
      context: {
        ...pageExample.context,
        user: 'asdfghjkl',
      },
    })
    expect(statusCode).toBe(400)
  })

  it('should require a version', async () => {
    const { statusCode } = await checkEvent({
      ...pageExample,
      context: {
        ...pageExample.context,
        version: undefined,
      },
    })
    expect(statusCode).toBe(400)
  })

  it('should require created timestamp', async () => {
    const { statusCode } = await checkEvent({
      ...pageExample,
      context: {
        ...pageExample.context,
        timestamp: 1234,
      },
    })
    expect(statusCode).toBe(400)
  })

  it('should not allow a honeypot token', async () => {
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
