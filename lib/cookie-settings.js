module.exports = {
  httpOnly: true, // can't access these cookies through browser JavaScript
  secure: !['test', 'development'].includes(process.env.NODE_ENV),
  // requires https protocol
  // `secure` doesn't work with supertest at all
  // http://localhost fails on chrome with secure
  sameSite: 'lax'
  // most browsers are "lax" these days,
  // but older browsers used to default to "none"
}
