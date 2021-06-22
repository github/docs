const cookieSettings = require('../lib/cookie-settings')

module.exports = require('csurf')({
  cookie: cookieSettings,
  ignoreMethods: ['GET', 'HEAD', 'OPTIONS']
})
