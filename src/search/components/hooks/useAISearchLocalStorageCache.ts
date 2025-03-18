import { useCallback } from 'react'

interface CachedItem<T> {
  data: T
  timestamp: number
}

interface CacheIndexEntry {
  key: string
  timestamp: number
}

/**
 * We cache AI Search response as individual entries in localStorage, with a separate index to track the keys.
 * This allows the cache to be updated without having to read a single large entry into memory and parse it each time a key is accessed
 *
 * Cached items are cached under a prefix, for a fixed number of days
 */
export function useAISearchLocalStorageCache<T = any>(
  cacheKeyPrefix: string = 'ai-query-cache',
  maxEntries: number = 1000,
  expirationDays: number = 30,
) {
  const cacheIndexKey = `${cacheKeyPrefix}-index`

  // Generates a unique key based on the query string, version, and language
  const generateCacheKey = (query: string, version: string, language: string): string => {
    query = query.trim().toLowerCase()
    // Simple hash function to generate a unique key from the query
    let hash = 0
    for (let i = 0; i < query.length; i++) {
      const char = query.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash |= 0 // Convert to 32bit integer
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
        // Item expired, remove it
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

      // Remove existing entry for this key if any
      index = index.filter((entry) => entry.key !== key)
      index.push({ key, timestamp: now })

      // If cache exceeds max entries, remove oldest entries
      if (index.length > maxEntries) {
        // Sort entries by timestamp
        index.sort((a, b) => a.timestamp - b.timestamp)
        const excess = index.length - maxEntries
        const entriesToRemove = index.slice(0, excess)
        entriesToRemove.forEach((entry) => {
          localStorage.removeItem(entry.key)
        })
        index = index.slice(excess)
      }

      // Store updated index
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
