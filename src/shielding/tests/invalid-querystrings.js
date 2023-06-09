import { get } from '../../../tests/helpers/e2etest.js'

import {
  MAX_UNFAMILIAR_KEYS_BAD_REQUEST,
  MAX_UNFAMILIAR_KEYS_REDIRECT,
} from '#src/shielding/middleware/handle-invalid-query-strings.js'

const alpha = Array.from(Array(26)).map((e, i) => i + 65)
const alphabet = alpha.map((x) => String.fromCharCode(x))

describe('invalid query strings', () => {
  test('400 for too many unrecognized query strings', async () => {
    // This test depends on knowing exactly the number
    // of unrecognized query strings that will trigger a 400.
    const sp = new URLSearchParams()
    alphabet.slice(0, MAX_UNFAMILIAR_KEYS_BAD_REQUEST).forEach((letter) => sp.set(letter, '1'))
    const url = `/?${sp}`
    const res = await get(url)
    expect(res.statusCode).toBe(400)
    expect(res.headers['cache-control']).toMatch('no-store')
    expect(res.headers['cache-control']).toMatch('private')
  })

  test('302 redirect for many unrecognized query strings', async () => {
    // This test depends on knowing exactly the number
    // of unrecognized query strings that will trigger a 400.
    const sp = new URLSearchParams()
    alphabet.slice(0, MAX_UNFAMILIAR_KEYS_REDIRECT).forEach((letter) => sp.set(letter, '1'))
    const url = `/?${sp}`
    const res = await get(url)
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['cache-control']).toMatch('public')
  })

  test('302 redirect but keeping recognized query strings', async () => {
    const sp = new URLSearchParams()
    alphabet.slice(0, MAX_UNFAMILIAR_KEYS_REDIRECT).forEach((letter) => sp.set(letter, '1'))
    sp.set('platform', 'concrete')
    const url = `/en/pages?${sp}`
    const res = await get(url)
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en/pages?platform=concrete')
  })
})
