import { afterEach } from '@jest/globals'
import nock from 'nock'
import { publish } from '../hydro.js'

describe('Hydro', () => {
  const secret = '3BD22A91'
  const endpoint = 'http://example.com'
  const config = { secret, endpoint }

  afterEach(() => {
    nock.cleanAll()
  })

  it('publishes a single event', async () => {
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

  it('publishes many events in one request', async () => {
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
      config
    )
    expect(scope.isDone()).toBeTruthy()
  })
})
