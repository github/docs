const readJsonFile = require('../../lib/read-json-file')
const externalSites = readJsonFile('./lib/redirects/external-sites.json')

// blanket redirects to external websites
module.exports = function externalRedirects (req, res, next) {
  if (req.path in externalSites) {
    return res.redirect(301, externalSites[req.path])
  } else {
    return next()
  }
}
