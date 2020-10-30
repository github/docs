module.exports = {
  httpOnly: true, // can't access these cookies through browser JavaScript
  secure: process.env.NODE_ENV !== 'test', // requires https protocol
  // `secure` doesn't work with supertest at all
  sameSite: 'lax'
  // most browsers are "lax" these days,
  // but older browsers used to default to "none"
}
