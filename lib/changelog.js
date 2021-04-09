const Parser = require('rss-parser')

async function getRssFeed (url) {
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

async function getChangelogItems (prefix, feed) {
  if (!feed || !feed.items) {
    console.log(feed)
    console.error('feed is not valid or has no items')
    return
  }

  // only show the first 3 posts
  const changelog = feed.items
    .slice(0, 3)
    .map(item => {
      // remove the prefix if it exists (Ex: 'GitHub Actions: '), where the colon and expected whitespace should be hardcoded.
      const title = prefix ? item.title.replace(new RegExp(`^${prefix}`), '') : item.title
      return {
        // capitalize the first letter of the title
        title: title.trim().charAt(0).toUpperCase() + title.slice(1),
        date: item.isoDate,
        href: item.guid
      }
    })

  return changelog
}

module.exports = { getRssFeed, getChangelogItems }
