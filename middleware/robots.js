const defaultResponse = 'User-agent: *'

const disallowAll = `User-agent: *
Disallow: /`

export default function robots(req, res, next) {
  if (req.path !== '/robots.txt') return next()

  res.type('text/plain')

  // remove subdomain from host
  // docs-internal-12345--branch-name.herokuapp.com -> herokuapp.com
  const rootDomain = req.hostname.split('.').slice(1).join('.')

  // prevent crawlers from indexing staging apps
  if (rootDomain === 'herokuapp.com') {
    return res.send(disallowAll)
  }

  return res.send(defaultResponse)
}
