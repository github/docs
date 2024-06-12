import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest.js'

import {
  MAX_UNFAMILIAR_KEYS_BAD_REQUEST,
  MAX_UNFAMILIAR_KEYS_REDIRECT,
} from '@/shielding/middleware/handle-invalid-query-strings.js'

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

  test('root homepage with value-less 8 character query string', async () => {
    const url = `/en?${randomCharacters(8)}`
    const res = await get(url)
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en')
    // But note that it only applies to the home page!
    {
      const url = `/en/get-started?${randomCharacters(8)}`
      const res = await get(url)
      expect(res.statusCode).toBe(200)
    }
  })

  test('query string keys with single square brackets', async () => {
    const url = `/en?query[foo]=bar`
    const res = await get(url)
    expect(res.statusCode).toBe(400)
    expect(res.body).toMatch('Invalid query string key (query)')
  })

  test('query string keys with square brackets', async () => {
    const url = `/?constructor[foo][bar]=buz`
    const res = await get(url)
    expect(res.statusCode).toBe(400)
    expect(res.body).toMatch('Invalid query string key (constructor)')
  })

  test('bad tool query string with Chinese URL-encoded characters', async () => {
    const url =
      '/?tool%25252525253Dvisualstudio%252525253D%2525252526tool%252525253Dvscode%2525253D%25252526tool%2525253Dvscode%25253D%252526tool%25253Dvimneovim%253D%2526tool%253Djetbrains%3D%26tool%3Djetbrains=&tool=azure_data_studio'
    const res = await get(url)
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/?tool=azure_data_studio')
  })
})

function randomCharacters(length: number) {
  let s = ''
  const pool = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`
  while (s.length < length) {
    s += pool[Math.floor(Math.random() * pool.length)]
  }
  return s
}
