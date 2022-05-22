const fetch = require('node-fetch')
const FailBot = require('../../lib/failbot')

jest.mock('node-fetch')

describe('FailBot', () => {
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
      await FailBot.report(err)

      // Check that we made a request
      expect(fetch).toHaveBeenCalled()

      // Verify the basic fetch params
      const params = fetch.mock.calls[0]
      expect(params[0]).toBe('https://haystack.com')
      expect(params[1]).toMatchObject({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })

      // Check that we send the expected body
      const body = JSON.parse(params[1].body)
      expect(body).toMatchObject({
        app: 'docs',
        backtrace: expect.stringContaining('Error: Kaboom'),
        class: 'Error',
        created_at: expect.any(String),
        js_environment: expect.stringMatching(/^Node\.js\sv[\d.]+/),
        message: 'Kaboom',
        rollup: expect.any(String)
      })
    })
  })
})
