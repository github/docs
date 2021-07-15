import FailBot from '../../lib/failbot.js'
import nock from 'nock'

describe('FailBot', () => {
  beforeEach(() => {
    nock('https://haystack.com')
      .post('/')
      .reply(200, (uri, requestBody) => {
        return requestBody
      })
  })

  afterEach(() => {
    delete process.env.HAYSTACK_URL
  })

  describe('.report', () => {
    it('returns early if `HAYSTACK_URL` is not set', async () => {
      const result = await FailBot.report()
      expect(result).toBeUndefined()
    })

    it('sends the expected report', async () => {
      process.env.HAYSTACK_URL = 'https://haystack.com'
      const err = new Error('Kaboom')
      const result = await FailBot.report(err)

      // Check that we made a request
      expect(result.status).toBe(200)

      // Verify the basic fetch params
      expect(result.headers.get('content-type')).toBe('application/json')

      // Check that we send the expected body
      const body = await result.json()
      expect(body).toMatchObject({
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
