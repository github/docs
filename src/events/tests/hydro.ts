import { afterEach, describe, expect, test } from 'vitest'

import nock from 'nock'
import { publish } from '../lib/hydro.js'

describe('Hydro', () => {
  const secret = '3BD22A91'
  const endpoint = 'http://example.com'
  const config = { secret, endpoint }

  afterEach(() => {
    nock.cleanAll()
  })

  test('publishes a single event', async () => {
    const scope = nock(endpoint, {
      reqheaders: {
        Authorization: /^Hydro \w{64}$/,
        'Content-Type': 'application/json',
        'X-Hydro-App': 'docs-production',
      },
    })
      .post('/', {
        events: [
          {
            schema: 'docs.v0.ExampleEvent',
            value: JSON.stringify({ event_id: 'FA36EA6D' }),
            cluster: 'potomac',
          },
        ],
      })
      .reply(200)
    await publish({ schema: 'docs.v0.ExampleEvent', value: { event_id: 'FA36EA6D' } }, config)
    expect(scope.isDone()).toBeTruthy()
  })

  test('publishes many events in one request', async () => {
    const scope = nock(endpoint, {
      reqheaders: {
        Authorization: /^Hydro \w{64}$/,
        'Content-Type': 'application/json',
        'X-Hydro-App': 'docs-production',
      },
    })
      .post('/', {
        events: [
          {
            schema: 'docs.v0.ExampleEvent',
            value: JSON.stringify({ event_id: 'FA36EA6D' }),
            cluster: 'potomac',
          },
          {
            schema: 'docs.v0.ExampleEvent',
            value: JSON.stringify({ event_id: '4F60C35A' }),
            cluster: 'potomac',
          },
        ],
      })
      .reply(200)
    await publish(
      [
        { schema: 'docs.v0.ExampleEvent', value: { event_id: 'FA36EA6D' } },
        { schema: 'docs.v0.ExampleEvent', value: { event_id: '4F60C35A' } },
      ],
      config,
    )
    expect(scope.isDone()).toBeTruthy()
  })

  test('422 with JSON error', async () => {
    // Hydro will return 422 errors with the body being a string of
    // JSON serialized information. Some of the errors are operational
    // and something we don't need to send to Failbot.
    // This is one of those examples from real Failbot submissions we've seen.
    const hydroError = {
      status: 'ERROR',
      count: 1,
      failures: [
        {
          index: 0,
          error: 'The server disconnected before a response was received.',
          retriable: true,
        },
      ],
    }

    const scope = nock(endpoint, {
      reqheaders: {
        Authorization: /^Hydro \w{64}$/,
        'Content-Type': 'application/json',
        'X-Hydro-App': 'docs-production',
      },
    })
      .post('/', {
        events: [
          {
            schema: 'docs.v0.ExampleEvent',
            value: JSON.stringify({ event_id: 'FA36EA6D' }),
            cluster: 'potomac',
          },
        ],
      })
      .reply(422, JSON.stringify(hydroError))
    await publish([{ schema: 'docs.v0.ExampleEvent', value: { event_id: 'FA36EA6D' } }], config)
    expect(scope.isDone()).toBeTruthy()
  })
})
