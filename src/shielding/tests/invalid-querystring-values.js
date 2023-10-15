import { get } from '../../../tests/helpers/e2etest.js'

describe('invalid query string values', () => {
  test.each(['platform', 'tool'])('%a key', async (key) => {
    let value = ''
    if (key === 'platform') value = 'mac'
    else if (key === 'tool') value = 'curl'
    else throw new Error('unknown key')

    // Valid value
    {
      const url = `/en/pages?${key}=${value}`
      const res = await get(url)
      expect(res.statusCode).toBe(200)
    }
    // Invalid value
    {
      const url = `/en/pages?${key}=JUNK&other=thing`
      const res = await get(url)
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en/pages?other=thing')
    }
  })
})
