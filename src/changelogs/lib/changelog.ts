import os from 'os'
import fs from 'fs'
import path from 'path'

import Parser from 'rss-parser'

import type { ChangelogItem } from '@/types'

const CHANGELOG_CACHE_FILE_PATH = process.env.CHANGELOG_CACHE_FILE_PATH
// This is useful to set when doing things like sync search.
const CHANGELOG_DISABLED = Boolean(JSON.parse(process.env.CHANGELOG_DISABLED || 'false'))

async function getRssFeed(url: string) {
  const parser = new Parser({ timeout: 5000 })
  const feedUrl = `${url}/feed`
  let feed

  try {
    feed = await parser.parseURL(feedUrl)
  } catch (err) {
    console.error(`cannot get ${feedUrl}: ${err instanceof Error ? err.message : err}`)
    return
  }

  return feed
}

export async function getChangelogItems(
  prefix: string | undefined,
  feedUrl: string,
  ignoreCache = false,
): Promise<ChangelogItem[] | undefined> {
  if (CHANGELOG_DISABLED) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Downloading changelog (${feedUrl}) items is disabled.`)
    }
    return
  }
  if (!ignoreCache) {
    const fromCache = getChangelogItemsFromCache(prefix, feedUrl)
    if (fromCache) return fromCache
  }

  const feed = await getRssFeed(feedUrl)

  if (!feed || !feed.items) {
    console.log(feed)
    console.error('feed is not valid or has no items')
    return
  }

  // only show the first 3 posts
  const changelog: ChangelogItem[] = feed.items.slice(0, 3).map((item) => {
    const rawTitle = item.title as string
    // remove the prefix if it exists (Ex: 'GitHub Actions: '), where the colon and expected whitespace should be hardcoded.
    const title = prefix ? rawTitle.replace(new RegExp(`^${prefix}`), '') : rawTitle
    return {
      // capitalize the first letter of the title
      title: title.trim().charAt(0).toUpperCase() + title.slice(1),
      date: item.isoDate as string,
      href: item.link as string,
    }
  })

  // We don't cache the raw payload we'd get from the network request
  // because it would waste memory. Instead we store the "serialized"
  // object that's created from the raw payload.
  setChangelogItemsCache(prefix, feedUrl, changelog)

  return changelog
}

const globalCache = new Map()

function getChangelogCacheKey(prefix: string | undefined, feedUrl: string) {
  // Return a string that is only letters so it's safe to use this
  // for the filename when caching to disk.
  return `${prefix || ''}${feedUrl}`.replace(/[^a-z]+/gi, '')
}

function getDiskCachePath(prefix: string | undefined, feedUrl: string) {
  // When in local development or in tests, use disk caching
  if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
    if (CHANGELOG_CACHE_FILE_PATH) {
      return CHANGELOG_CACHE_FILE_PATH
    }
    const cacheKey = getChangelogCacheKey(prefix, feedUrl)
    const date = new Date().toISOString().split('T')[0]
    const fileName = `changelogcache-${cacheKey}-${date}.json`
    return path.join(os.tmpdir(), fileName)
  }
}

function getChangelogItemsFromCache(prefix: string | undefined, feedUrl: string) {
  const cacheKey = getChangelogCacheKey(prefix, feedUrl)

  if (globalCache.get(cacheKey)) {
    return globalCache.get(cacheKey)
  }

  const diskCachePath = getDiskCachePath(prefix, feedUrl)
  if (diskCachePath) {
    try {
      const payload = JSON.parse(fs.readFileSync(diskCachePath, 'utf-8'))
      if (process.env.NODE_ENV === 'development')
        console.log(`Changelog disk-cache HIT on ${diskCachePath}`)
      // Also, for next time, within this Node process, put it into
      // the global cache so we don't need to read from disk again.
      globalCache.set(cacheKey, payload)
      return payload
    } catch (err) {
      // If it wasn't on disk, that's fine.
      if (err instanceof Error && 'code' in err && err.code === 'ENOENT') return
      // The JSON.parse() most likely failed. Ignore the error
      // but delete the file so it won't be attempted again.
      if (err instanceof SyntaxError) {
        fs.unlinkSync(diskCachePath)
        return
      }
      throw err
    }
  }
}

function setChangelogItemsCache(
  prefix: string | undefined,
  feedUrl: string,
  payload: ChangelogItem[],
) {
  const cacheKey = getChangelogCacheKey(prefix, feedUrl)
  globalCache.set(cacheKey, payload)

  const diskCachePath = getDiskCachePath(prefix, feedUrl)
  // Note that `diskCachePath` is falsy if NODE_ENV==production which
  // means we're not writing to disk in production.
  if (diskCachePath) {
    fs.writeFileSync(diskCachePath, JSON.stringify(payload), 'utf-8')
    if (process.env.NODE_ENV === 'development')
      console.log(`Wrote changelog cache to disk ${diskCachePath}`)
  }
}
