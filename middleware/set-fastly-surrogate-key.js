module.exports = function setFastlySurrogateKey (req, res, next) {
  // Fastly provides a Soft Purge feature that allows you to mark content as outdated (stale) instead of permanently
  // purging and thereby deleting it from Fastly's caches. Objects invalidated with Soft Purge will be treated as
  // outdated (stale) while Fastly fetches a new version from origin.
  //
  // Use of a surrogate key is required for soft purging
  // https://docs.fastly.com/en/guides/soft-purges
  // https://docs.fastly.com/en/guides/getting-started-with-surrogate-keys
  res.set('surrogate-key', 'all-the-things')

  return next()
}
