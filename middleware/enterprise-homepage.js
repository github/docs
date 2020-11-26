// This is a hack to prevent 'too many redirects' error in production
// TODO: figure out what's causing it and remove this hack.

const enterpriseServerReleases = require('../lib/enterprise-server-releases')

module.exports = (req, res, next) => {
  return (req.path === '/enterprise')
    ? res.redirect(301, `/en/enterprise/${enterpriseServerReleases.latest}`)
    : next()
}
