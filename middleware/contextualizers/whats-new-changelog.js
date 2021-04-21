const { getRssFeed, getChangelogItems } = require('../../lib/changelog')

module.exports = async function whatsNewChangelog (req, res, next) {
  if (!req.context.page) return next()
  if (!req.context.page.changelog) return next()
  req.context.changelogUrl = req.context.page.changelog.label === 'education'
    ? 'https://github.blog/category/community/education'
    : `https://github.blog/changelog/label/${req.context.page.changelog.label}`

  const feed = await getRssFeed(req.context.changelogUrl)
  req.context.whatsNewChangelog = await getChangelogItems(req.context.page.changelog.prefix, feed)
  return next()
}
