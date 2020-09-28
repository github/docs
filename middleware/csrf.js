module.exports = require('csurf')({
  cookie: require('../lib/cookie-settings'),
  ignoreMethods: ['GET', 'HEAD', 'OPTIONS']
})
