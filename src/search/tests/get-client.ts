import { afterAll, beforeAll, describe, expect, test, vi } from 'vitest'
import type { Client } from '@elastic/elasticsearch'
import { getElasticsearchClient } from '@/search/lib/helpers/get-client'

describe('getElasticsearchClient', () => {
  const created = new Set<Client>()

  function getClient(...args: Parameters<typeof getElasticsearchClient>) {
    const client = getElasticsearchClient(...args)
    created.add(client)
    return client
  }

  beforeAll(() => {
    vi.stubEnv('ELASTICSEARCH_URL', 'http://localhost:9200')
  })

  afterAll(async () => {
    vi.unstubAllEnvs()
    await Promise.all([...created].map((client) => client.close()))
  })

  test('returns the same client for repeated calls', () => {
    expect(getClient()).toBe(getClient())
  })

  test('returns a different client for a different request timeout', () => {
    const custom = getClient('', false, { requestTimeout: 60_000 })
    expect(custom).not.toBe(getClient())
    expect(custom).toBe(getClient('', false, { requestTimeout: 60_000 }))
  })

  test('returns a different client for a different URL', () => {
    const other = getClient('http://localhost:9201')
    expect(other).not.toBe(getClient())
    expect(other).toBe(getClient('http://localhost:9201'))
  })
})
