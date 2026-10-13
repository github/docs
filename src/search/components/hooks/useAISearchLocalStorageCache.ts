import { useCallback } from 'react'

interface CachedItem<T> {
  data: T
  timestamp: number
}

interface CacheIndexEntry {
  key: string
  timestamp: number
}

// AI Search responses are individual localStorage entries with a separate key index.
// Cache updates avoid reading and parsing one large entry on every access.
//
// Entries live under a prefix and expire after a fixed number of days.
export function useAISearchLocalStorageCache<T = unknown>(
  cacheKeyPrefix: string = 'ai-query-cache',
  maxEntries: number = 1000,
  expirationDays: number = 30,
) {
  const cacheIndexKey = `${cacheKeyPrefix}-index`

  const generateCacheKey = (query: string, version: string, language: string): string => {
    query = query.trim().toLowerCase()
    // Hashing keeps cache keys short while version and language separate entries.
    let hash = 0
    for (let i = 0; i < query.length; i++) {
      const char = query.charCodeAt(i)
      hash = (hash << 5) - hash + char
      // Keep the hash in signed 32-bit range.
      hash |= 0
    }
    return `${cacheKeyPrefix}-${Math.abs(hash)}-${version}-${language}`
  }

  const getItem = useCallback(
    (query: string, version: string, language: string): T | null => {
      const key = generateCacheKey(query, version, language)
      const itemStr = localStorage.getItem(key)
      if (!itemStr) return null

      let cachedItem: CachedItem<T>
      try {
        cachedItem = JSON.parse(itemStr)
      } catch (e) {
        console.error('Failed to parse cached item from localStorage', e)
        localStorage.removeItem(key)
        return null
      }

      const now = Date.now()
      const expirationTime = cachedItem.timestamp + expirationDays * 24 * 60 * 60 * 1000
      if (now < expirationTime) {
        return cachedItem.data
      } else {
        localStorage.removeItem(key)
        updateCacheIndex((index) => index.filter((entry) => entry.key !== key))
        return null
      }
    },
    [cacheKeyPrefix, expirationDays],
  )

  const setItem = useCallback(
    (query: string, data: T, version: string, language: string): void => {
      const key = generateCacheKey(query, version, language)
      const now = Date.now()
      const cachedItem: CachedItem<T> = { data, timestamp: now }

      localStorage.setItem(key, JSON.stringify(cachedItem))

      const indexStr = localStorage.getItem(cacheIndexKey)
      let index: CacheIndexEntry[] = []
      if (indexStr) {
        try {
          index = JSON.parse(indexStr)
        } catch (e) {
          console.error('Failed to parse cache index from localStorage', e)
        }
      }

      index = index.filter((entry) => entry.key !== key)
      index.push({ key, timestamp: now })

      // Keep the newest entries when the cache exceeds maxEntries.
      if (index.length > maxEntries) {
        index.sort((a, b) => a.timestamp - b.timestamp)
        const excess = index.length - maxEntries
        const entriesToRemove = index.slice(0, excess)
        for (const entry of entriesToRemove) {
          localStorage.removeItem(entry.key)
        }
        index = index.slice(excess)
      }

      localStorage.setItem(cacheIndexKey, JSON.stringify(index))
    },
    [cacheKeyPrefix, maxEntries],
  )

  const updateCacheIndex = (updateFn: (index: CacheIndexEntry[]) => CacheIndexEntry[]): void => {
    const indexStr = localStorage.getItem(cacheIndexKey)
    let index: CacheIndexEntry[] = []
    if (indexStr) {
      try {
        index = JSON.parse(indexStr)
      } catch (e) {
        console.error('Failed to parse cache index from localStorage', e)
      }
    }

    index = updateFn(index)
    localStorage.setItem(cacheIndexKey, JSON.stringify(index))
  }

  return { getItem, setItem }
}
