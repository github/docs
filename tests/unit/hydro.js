const nock = require('nock')
const Hydro = require('../../lib/hydro')

describe('hydro', () => {
  let hydro, params

  beforeEach(() => {
    hydro = new Hydro({ secret: '123', endpoint: 'https://real-hydro.com' })

    nock(hydro.endpoint, {
      reqheaders: {
        Authorization: /^Hydro [\d\w]{64}$/,
        'Content-Type': 'application/json',
        'X-Hydro-App': 'docs-production'
      }
    })
      // Respond with a 200 and store the body we sent
      .post('/').reply(200, (_, body) => { params = body })
  })

  describe('#publish', () => {
    it('publishes a single event to Hydro', async () => {
      await hydro.publish('event-name', { pizza: true })
      expect(params).toEqual({
        events: [{
          schema: 'event-name',
          value: JSON.stringify({ pizza: true }),
          cluster: 'potomac'
        }]
      })
    })
  })

  describe('#publishMany', () => {
    it('publishes multiple events to Hydro', async () => {
      await hydro.publishMany([
        { schema: 'event-name', value: { pizza: true } },
        { schema: 'other-name', value: { salad: false } }
      ])

      expect(params).toEqual({
        events: [{
          schema: 'event-name',
          value: JSON.stringify({ pizza: true }),
          cluster: 'potomac'
        }, {
          schema: 'other-name',
          value: JSON.stringify({ salad: false }),
          cluster: 'potomac'
        }]
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
