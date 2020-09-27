const rateLimit = require('express-rate-limit')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = rateLimit({
  // 1 minute (or 1ms outside of production)
  windowMs: isProduction ? (60 * 1000) : 1,
  // limit each IP to 1000 requests per windowMs
  max: 1000
})
