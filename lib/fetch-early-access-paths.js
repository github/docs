// This module loads an array of Early Access page paths from EARLY_ACCESS_HOSTNAME
//
// See also middleware/early-acces-proxy.js which fetches Early Access docs from the obscured remote host

require('dotenv').config()

const got = require('got')
const isURL = require('is-url')

module.exports = async function fetchEarlyAccessPaths () {
  let url
  if (process.env.NODE_ENV === 'test') return []

  if (!isURL(process.env.EARLY_ACCESS_HOSTNAME)) {
    console.log('EARLY_ACCESS_HOSTNAME is not defined; skipping fetching early access paths')
    return []
  }

  try {
    url = `${process.env.EARLY_ACCESS_HOSTNAME}/early-access-paths.json`
    const { body } = await got(url, {
      json: true,
      timeout: 3000,
      headers: {
        'early-access-shared-secret': process.env.EARLY_ACCESS_SHARED_SECRET
      }
    })
    return body
  } catch (err) {
    console.error('Unable to fetch early-access-paths.json from', url, err)
    return []
  }
}
