const FASTLY_TTL = process.env.FASTLY_TTL || String(60 * 60 * 24) // 24 hours
const STALE_TTL = String(60 * 10) // 10 minutes

const BYPASS_FASTLY = process.env.TEST_BYPASS_FASTLY === 'true'
const BYPASS_PRODUCTS = /^\/([a-z]{2})\/([a-z0-9._-]+@[a-z0-9._-]+\/)?(discussions|packages|actions)(\/.*|$)/i

module.exports = (req, res, next) => {
  // Test bypassing Fastly for all pages inside of the Discussions product
  if (BYPASS_FASTLY && BYPASS_PRODUCTS.test(req.originalUrl)) {
    res.set({
      'surrogate-control': 'private, no-store',
      'cache-control': 'private, no-store'
    })
    return next()
  }

  res.set({

    // Say you want Fastly to cache your content but you don't want it cached by browsers.
    // The best way to do this would be to send Fastly both the Cache-Control header as you want
    // it to go to the browsers, and use Surrogate-Control to tell us how long to cache for.

    // Fastly does not currently respect no-store or no-cache directives.
    // Including either or both of these in a Cache-Control header has no effect on
    // Fastly's caching decision, unless you alter this behavior using custom VCL.

    // https://docs.fastly.com/en/guides/configuring-caching
    'cache-control': 'no-store, must-revalidate',

    // This header gets stripped and is only visible to Fastly caches.
    // https://docs.fastly.com/en/guides/serving-stale-content#manually-enabling-serve-stale
    'surrogate-control': `max-age=${FASTLY_TTL}, stale-if-error=${STALE_TTL}, stale-while-revalidate=${STALE_TTL}`,

    // Fastly provides a Soft Purge feature that allows you to mark content as outdated (stale) instead of permanently
    // purging and thereby deleting it from Fastly's caches. Objects invalidated with Soft Purge will be treated as
    // outdated (stale) while Fastly fetches a new version from origin.
    //
    // Use of a surrogate key is required for soft purging
    // https://docs.fastly.com/en/guides/soft-purges
    // https://docs.fastly.com/en/guides/getting-started-with-surrogate-keys
    'surrogate-key': 'all-the-things'
  })

  next()
}
