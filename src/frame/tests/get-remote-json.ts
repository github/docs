import fs from 'fs'
import path from 'path'
import os from 'os'

import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest'
import nock from 'nock'

import getRemoteJSON, { cache } from '@/frame/lib/get-remote-json'

// Covers in-memory caching and disk-cache fallback after a memory miss.

describe('getRemoteJSON', () => {
  const envVarValueBefore = process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT
  const tempDir = path.join(os.tmpdir(), 'remotejson-test')

  beforeAll(() => {
    process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT = tempDir
  })

  afterAll(() => {
    process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT = envVarValueBefore
    fs.rmSync(tempDir, { recursive: true, force: true })
  })

  afterEach(() => {
    nock.cleanAll()
  })

  test('simple in-memory caching', async () => {
    const url = 'http://example.com/redirects.json'
    const { origin, pathname } = new URL(url)
    nock(origin).get(pathname).reply(200, { foo: 'bar' })
    const data = await getRemoteJSON(url, {})
    expect((data as Record<string, unknown>).foo).toBe('bar')
    expect(cache.get(url)).toBeTruthy()
    // A second network request would fail unless getRemoteJSON uses the memory cache.
    const data2 = await getRemoteJSON(url, {})
    expect((data2 as Record<string, unknown>).foo).toBe('bar')
    expect(cache.get(url)).toBeTruthy()
  })

  test('benefit from disk-based caching', async () => {
    const url = 'http://example.com/cool.json'
    const { origin, pathname } = new URL(url)
    nock(origin).get(pathname).reply(200, { cool: true })
    const data = await getRemoteJSON(url, {})
    expect((data as Record<string, unknown>).cool).toBe(true)
    expect(cache.get(url)).toBeTruthy()
    cache.delete(url)

    // A second network request would fail unless getRemoteJSON uses the disk cache.
    const data2 = await getRemoteJSON(url, {})
    expect((data2 as Record<string, unknown>).cool).toBe(true)
  })

  test('recover from disk corruption (empty)', async () => {
    const tempTempDir = path.join(tempDir, 'empty-files')
    process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT = tempTempDir
    const url = 'http://example.com/empty.json'
    const { origin, pathname } = new URL(url)
    nock(origin).get(pathname).reply(200, { cool: true })
    await getRemoteJSON(url, {})

    for (const file of fs.readdirSync(tempTempDir)) {
      fs.writeFileSync(path.join(tempTempDir, file), '')
    }

    cache.delete(url)
    // A second nock response lets getRemoteJSON recover after the corrupted disk cache misses.
    nock(origin).get(pathname).reply(200, { cool: true })

    const data = await getRemoteJSON(url, {})
    expect((data as Record<string, unknown>).cool).toBe(true)
  })

  test('recover from disk corruption (bad JSON)', async () => {
    const tempTempDir = path.join(tempDir, 'corrupt-files')
    process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT = tempTempDir
    const url = 'http://example.com/corrupt.json'
    const { origin, pathname } = new URL(url)
    nock(origin).get(pathname).reply(200, { cool: true })
    await getRemoteJSON(url, {})

    // Corrupt every cached file so the disk cache can't be parsed.
    for (const file of fs.readdirSync(tempTempDir)) {
      fs.writeFileSync(path.join(tempTempDir, file), '{"not:JSON{')
    }

    cache.delete(url)
    // A second nock response lets getRemoteJSON recover after the corrupted disk cache misses.
    nock(origin).get(pathname).reply(200, { cool: true })

    const data = await getRemoteJSON(url, {})
    expect((data as Record<string, unknown>).cool).toBe(true)
  })

  test('not-actually JSON despite URL', async () => {
    const url = 'http://example.com/might-look-like.json'
    const { origin, pathname } = new URL(url)
    nock(origin).get(pathname).reply(200, '<html>here</html>', {
      'Content-Type': 'text/html',
    })
    await expect(getRemoteJSON(url, {})).rejects.toThrowError(/resulted in a non-JSON response/)
  })
})
