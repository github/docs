import fs from 'fs'
import path from 'path'
import os from 'os'

import { rimraf } from 'rimraf'
import { expect, test, describe, beforeAll, afterAll } from '@jest/globals'
import nock from 'nock'
import getRemoteJSON, { cache } from '../../middleware/get-remote-json.js'

/**
 *
 * These unit tests test that the in-memory cache works and when it's
 * not a cache it, it can benefit from using the disk cache.
 */

describe('getRemoteJSON', () => {
  const envVarValueBefore = process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT
  const tempDir = path.join(os.tmpdir(), 'remotejson-test')

  beforeAll(() => {
    process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT = tempDir
  })

  afterAll(() => {
    process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT = envVarValueBefore
    rimraf.sync(tempDir)
  })

  afterEach(() => {
    nock.cleanAll()
  })

  test('simple in-memory caching', async () => {
    const url = 'http://example.com/redirects.json'
    const { origin, pathname } = new URL(url)
    nock(origin).get(pathname).reply(200, { foo: 'bar' })
    const data = await getRemoteJSON(url, {})
    expect(data.foo).toBe('bar')
    expect(cache.get(url)).toBeTruthy()
    // Second time, despite not setting up a second nock(), will work
    // because it can use memory now.
    const data2 = await getRemoteJSON(url, {})
    expect(data2.foo).toBe('bar')
    expect(cache.get(url)).toBeTruthy()
  })

  test('benefit from disk-based caching', async () => {
    const url = 'http://example.com/cool.json'
    const { origin, pathname } = new URL(url)
    nock(origin).get(pathname).reply(200, { cool: true })
    const data = await getRemoteJSON(url, {})
    expect(data.cool).toBe(true)
    expect(cache.get(url)).toBeTruthy()
    cache.delete(url)

    // This time, the nock won't fail despite not using `.persist()`.
    // That means it didn't need the network because it was able to
    // use the disk cache.
    const data2 = await getRemoteJSON(url, {})
    expect(data2.cool).toBe(true)
  })

  test('recover from disk corruption (empty)', async () => {
    const tempTempDir = path.join(tempDir, 'empty-files')
    process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT = tempTempDir
    const url = 'http://example.com/empty.json'
    const { origin, pathname } = new URL(url)
    nock(origin).get(pathname).reply(200, { cool: true })
    await getRemoteJSON(url, {})

    // Make every file in the cache directory an empty file
    for (const file of fs.readdirSync(tempTempDir)) {
      fs.writeFileSync(path.join(tempTempDir, file), '')
    }

    cache.delete(url)
    // If we don't do this, nock will fail because a second network
    // request became necessary.
    nock(origin).get(pathname).reply(200, { cool: true })

    const data = await getRemoteJSON(url, {})
    expect(data.cool).toBe(true)
  })

  test('recover from disk corruption (bad JSON)', async () => {
    const tempTempDir = path.join(tempDir, 'corrupt-files')
    process.env.GET_REMOTE_JSON_DISK_CACHE_ROOT = tempTempDir
    const url = 'http://example.com/corrupt.json'
    const { origin, pathname } = new URL(url)
    nock(origin).get(pathname).reply(200, { cool: true })
    await getRemoteJSON(url, {})

    // Make every file in the cache directory an empty file
    for (const file of fs.readdirSync(tempTempDir)) {
      fs.writeFileSync(path.join(tempTempDir, file), '{"not:JSON{')
    }

    cache.delete(url)
    // If we don't do this, nock will fail because a second network
    // request became necessary.
    nock(origin).get(pathname).reply(200, { cool: true })

    const data = await getRemoteJSON(url, {})
    expect(data.cool).toBe(true)
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
