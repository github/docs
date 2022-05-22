module.exports = require('cookie-parser')(
  process.env.COOKIE_SECRET,
  require('../lib/cookie-settings')
)
