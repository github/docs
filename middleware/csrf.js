module.exports = require('csurf')({
  cookie: require('../lib/cookie-settings'),
  ignoreMethods: ['GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
  // TODO CSRF edit this to include POST and PUT to require it
})
