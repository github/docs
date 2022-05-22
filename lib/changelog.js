import Parser from 'rss-parser'

async function getRssFeed(url) {
  const parser = new Parser({ timeout: 5000 })
  const feedUrl = `${url}/feed`
  let feed

  try {
    feed = await parser.parseURL(feedUrl)
  } catch (err) {
    console.error(`cannot get ${feedUrl}: ${err.message}`)
    return
  }

  return feed
}

const globalCache = new Map()

export async function getChangelogItems(prefix, feedUrl) {
  const cacheKey = prefix + feedUrl
  if (globalCache.get(cacheKey)) {
    return globalCache.get(cacheKey)
  }

  const feed = await getRssFeed(feedUrl)

  if (!feed || !feed.items) {
    console.log(feed)
    console.error('feed is not valid or has no items')
    return
  }

  // only show the first 3 posts
  const changelog = feed.items.slice(0, 3).map((item) => {
    // remove the prefix if it exists (Ex: 'GitHub Actions: '), where the colon and expected whitespace should be hardcoded.
    const title = prefix ? item.title.replace(new RegExp(`^${prefix}`), '') : item.title
    return {
      // capitalize the first letter of the title
      title: title.trim().charAt(0).toUpperCase() + title.slice(1),
      date: item.isoDate,
      href: item.link,
    }
  })

  // We don't cache the raw payload we'd get from the network request
  // because it would waste memory. Instead we store the "serialized"
  // object that's created from the raw payload.
  globalCache.set(cacheKey, changelog)

  return changelog
}
