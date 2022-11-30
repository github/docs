const { getRssFeed, getChangelogItems } = require('../../lib/changelog')

module.exports = async function whatsNewChangelog (req, res, next) {
  if (!req.context.page) return next()
  if (!req.context.page.changelog) return next()
  const label = req.context.page.changelog.label

  const labelUrls = {
    education: 'https://github.blog/category/community/education',
    enterprise: 'https://github.blog/category/enterprise/'
  }

  req.context.changelogUrl = labelUrls[label] || `https://github.blog/changelog/label/${label}`

  const feed = await getRssFeed(req.context.changelogUrl)
  req.context.whatsNewChangelog = await getChangelogItems(req.context.page.changelog.prefix, feed)
  return next()
}
