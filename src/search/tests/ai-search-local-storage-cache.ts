import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { useAISearchLocalStorageCache } from '@/search/components/hooks/useAISearchLocalStorageCache'

type Cache = ReturnType<typeof useAISearchLocalStorageCache<string>>

function getCache(): Cache {
  let cache: Cache | undefined
  function Capture() {
    cache = useAISearchLocalStorageCache<string>('test-cache', 2, 7)
    return null
  }
  renderToString(createElement(Capture))
  if (!cache) throw new Error('hook did not render')
  return cache
}

function domError(name: string): Error {
  const error = new Error(`${name} from fake storage`)
  error.name = name
  return error
}

function mapStorage() {
  const map = new Map<string, string>()
  return {
    getItem: vi.fn((key: string) => map.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => {
      map.set(key, value)
    }),
    removeItem: vi.fn((key: string) => {
      map.delete(key)
    }),
  }
}

describe('useAISearchLocalStorageCache', () => {
  const originalDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage')

  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
    if (originalDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalDescriptor)
    } else {
      delete (globalThis as { localStorage?: unknown }).localStorage
    }
  })

  function installStorage(storage: unknown) {
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      value: storage,
    })
  }

  test('stores and returns a cached value', () => {
    installStorage(mapStorage())
    const { getItem, setItem } = getCache()
    expect(getItem('How do I fork?', 'free-pro-team@latest', 'en')).toBeNull()
    setItem('How do I fork?', 'answer', 'free-pro-team@latest', 'en')
    expect(getItem('  how do i fork?  ', 'free-pro-team@latest', 'en')).toBe('answer')
    expect(getItem('How do I fork?', 'enterprise-cloud@latest', 'en')).toBeNull()
  })

  test('treats blocked storage as a cache miss and skips caching', () => {
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      get() {
        throw domError('SecurityError')
      },
    })
    const { getItem, setItem } = getCache()
    expect(getItem('query', 'free-pro-team@latest', 'en')).toBeNull()
    expect(() => setItem('query', 'answer', 'free-pro-team@latest', 'en')).not.toThrow()
  })

  test('does not throw when writing exceeds the storage quota', () => {
    const storage = mapStorage()
    storage.setItem.mockImplementation(() => {
      throw domError('QuotaExceededError')
    })
    installStorage(storage)
    const { getItem, setItem } = getCache()
    expect(() => setItem('query', 'answer', 'free-pro-team@latest', 'en')).not.toThrow()
    expect(getItem('query', 'free-pro-team@latest', 'en')).toBeNull()
  })

  test('returns null when removing an expired entry fails', () => {
    const storage = mapStorage()
    installStorage(storage)
    const { getItem, setItem } = getCache()
    setItem('query', 'answer', 'free-pro-team@latest', 'en')
    vi.spyOn(Date, 'now').mockReturnValue(Date.now() + 8 * 24 * 60 * 60 * 1000)
    storage.removeItem.mockImplementation(() => {
      throw domError('SecurityError')
    })
    expect(getItem('query', 'free-pro-team@latest', 'en')).toBeNull()
  })
})
