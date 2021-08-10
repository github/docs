import readJsonFile from '../../lib/read-json-file.js'
const externalSites = readJsonFile('./lib/redirects/external-sites.json')

// blanket redirects to external websites
export default function externalRedirects(req, res, next) {
  if (req.path in externalSites) {
    return res.redirect(301, externalSites[req.path])
  } else {
    return next()
  }
}
