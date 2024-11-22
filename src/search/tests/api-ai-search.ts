// IMPORTANT: If you add more tests to this that make requests to
// http://localhost:4000/api/ai-search/v1 make sure you increment the rate limit
// value when NODE_ENV === 'test' in src/search/middleware/ai-search.ts
import { expect, test, describe, beforeAll, afterAll } from 'vitest'

import { post } from 'src/tests/helpers/e2etest.js'
import { startMockServer, stopMockServer } from '@/tests/mocks/start-mock-server'

describe('AI Search Routes', () => {
  beforeAll(() => {
    startMockServer()
  })
  afterAll(() => stopMockServer())

  test('/api/ai-search/v1 should handle a successful response', async () => {
    let apiBody = { query: 'How do I create a Repository?', language: 'en', version: 'dotcom' }

    const response = await fetch('http://localhost:4000/api/ai-search/v1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(apiBody),
    })

    expect(response.ok).toBe(true)
    expect(response.headers.get('content-type')).toBe('application/x-ndjson')
    expect(response.headers.get('transfer-encoding')).toBe('chunked')

    if (!response.body) {
      throw new Error('ReadableStream not supported in this environment.')
    }

    const decoder = new TextDecoder('utf-8')
    const reader = response.body.getReader()
    let done = false
    const chunks = []

    while (!done) {
      const { value, done: readerDone } = await reader.read()
      done = readerDone

      if (value) {
        // Decode the Uint8Array chunk into a string
        const chunkStr = decoder.decode(value, { stream: true })
        chunks.push(chunkStr)
      }
    }

    // Combine all chunks into a single string
    const fullResponse = chunks.join('')
    // Split the response into individual chunk lines
    const chunkLines = fullResponse.split('\n').filter((line) => line.trim() !== '')

    // Assertions:

    // 1. First chunk should be the SOURCES chunk
    expect(chunkLines.length).toBeGreaterThan(0)
    const firstChunkMatch = chunkLines[0].match(/^Chunk: (.+)$/)
    expect(firstChunkMatch).not.toBeNull()

    const sourcesChunk = JSON.parse(firstChunkMatch?.[1] || '')
    expect(sourcesChunk).toHaveProperty('chunkType', 'SOURCES')
    expect(sourcesChunk).toHaveProperty('sources')
    expect(Array.isArray(sourcesChunk.sources)).toBe(true)
    expect(sourcesChunk.sources.length).toBe(3)

    // 2. Subsequent chunks should be MESSAGE_CHUNKs
    for (let i = 1; i < chunkLines.length; i++) {
      const line = chunkLines[i]
      const messageChunk = JSON.parse(line)
      expect(messageChunk).toHaveProperty('chunkType', 'MESSAGE_CHUNK')
      expect(messageChunk).toHaveProperty('text')
      expect(typeof messageChunk.text).toBe('string')
    }

    // 3. Verify the complete message is expected
    const expectedMessage =
      'Creating a repository on GitHub is something you should already know how to do :shrug:'
    const receivedMessage = chunkLines
      .slice(1)
      .map((line) => JSON.parse(line).text)
      .join('')
    expect(receivedMessage).toBe(expectedMessage)
  })

  // We can't actually trigger a full rate limit because
  // then all other tests will all fail. And we can't rely on this
  // test always being run last.
  test('should respect rate limiting', async () => {
    let apiBody = { query: 'How do I create a Repository?', language: 'en', version: 'dotcom' }

    const response = await fetch('http://localhost:4000/api/ai-search/v1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(apiBody),
    })

    expect(response.ok).toBe(true)
    expect(response.status).toBe(200)
    const limit = parseInt(response.headers.get('ratelimit-limit') || '0')
    const remaining = parseInt(response.headers.get('ratelimit-remaining') || '0')
    expect(limit).toBeGreaterThan(0)
    expect(remaining).toBeLessThan(limit)

    const response2 = await fetch('http://localhost:4000/api/ai-search/v1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(apiBody),
    })

    expect(response2.ok).toBe(true)
    expect(response2.status).toBe(200)
    const newLimit = parseInt(response2.headers.get('ratelimit-limit') || '0')
    const newRemaining = parseInt(response2.headers.get('ratelimit-remaining') || '0')
    expect(newLimit).toBe(limit)
    // Can't rely on `newRemaining == remaining - 1` because of
    // concurrency of test-running.
    expect(newRemaining).toBeLessThan(remaining)
  })

  test('should handle validation errors: query missing', async () => {
    let body = { language: 'en', version: 'dotcom' }
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

    const responseBody = JSON.parse(response.body)

    expect(response.ok).toBe(false)
    expect(responseBody['errors']).toEqual([
      { message: `Missing required key 'query' in request body` },
    ])
  })

  test('should handle validation errors: language missing', async () => {
    let body = { query: 'example query', version: 'dotcom' }
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

    const responseBody = JSON.parse(response.body)

    expect(response.ok).toBe(false)
    expect(responseBody['errors']).toEqual([
      { message: `Missing required key 'language' in request body` },
      { message: `Invalid 'language' in request body 'undefined'. Must be one of: en` },
    ])
  })

  test('should handle validation errors: version missing', async () => {
    let body = { query: 'example query', language: 'en' }
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

    const responseBody = JSON.parse(response.body)

    expect(response.ok).toBe(false)
    expect(responseBody['errors']).toEqual([
      { message: `Missing required key 'version' in request body` },
      {
        message: `Invalid 'version' in request body: 'undefined'. Must be one of: dotcom, ghec, ghes`,
      },
    ])
  })

  test('should handle multiple validation errors: query missing, invalid language and version', async () => {
    let body = { language: 'fr', version: 'fpt' }
    const response = await post('/api/ai-search/v1', {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

    const responseBody = JSON.parse(response.body)

    expect(response.ok).toBe(false)
    expect(responseBody['errors']).toEqual([
      { message: `Missing required key 'query' in request body` },
      {
        message: `Invalid 'language' in request body 'fr'. Must be one of: en`,
      },
    ])
  })

  test('should rate limit when total number of requests exceeds max amount', async () => {
    let apiBody = { query: 'How do I create a Repository?', language: 'en', version: 'dotcom' }

    const response = await fetch('http://localhost:4000/api/ai-search/v1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(apiBody),
    })

    expect(response.ok).toBe(false)
    expect(response.status).toBe(429)
  })
})
