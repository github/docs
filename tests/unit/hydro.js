import { afterEach } from '@jest/globals'
import nock from 'nock'
import Hydro from '../../lib/hydro.js'

describe('hydro', () => {
  let hydro, params

  beforeEach(() => {
    hydro = new Hydro({
      secret: '123',
      endpoint: 'https://real-hydro.com',
      // When jest tests run, `NODE_ENV==='test'` so the actualy `got()`
      // calls inside the Hydro class would be prevented.
      // Setting this to true will prevent that second-layer protection.
      forceDisableMock: true,
    })

    nock(hydro.endpoint, {
      reqheaders: {
        Authorization: /^Hydro [\d\w]{64}$/,
        'Content-Type': 'application/json',
        'X-Hydro-App': 'docs-production',
      },
    })
      // Respond with a 200 and store the body we sent
      .post('/')
      .reply(200, (_, body) => {
        params = body
      })
  })

  afterEach(() => {
    // Gotta always clean up after activating `nock`.
    nock.cleanAll()
  })

  describe('#publish', () => {
    it('publishes a single event to Hydro', async () => {
      await hydro.publish('event-name', { pizza: true })
      expect(params).toEqual({
        events: [
          {
            schema: 'event-name',
            value: JSON.stringify({ pizza: true }),
            cluster: 'potomac',
          },
        ],
      })
    })
  })

  describe('#generatePayloadHmac', () => {
    it('returns a SHA256 HMAC string', () => {
      const body = JSON.stringify({ pizza: true })
      const hash = hydro.generatePayloadHmac(body)
      expect(hash).toEqual(expect.any(String))
      expect(hash).toHaveLength(64)
    })

    it('generates the same string for the same payload', () => {
      const body = JSON.stringify({ pizza: true })
      const one = hydro.generatePayloadHmac(body)
      const two = hydro.generatePayloadHmac(body)
      expect(one).toBe(two)
    })
  })
})
