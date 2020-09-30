// This module defines the Referrer-Policy HEADER behaviour
// https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns

const { referrerPolicy } = require('helmet')

module.exports = referrerPolicy({
  policy: "strict-origin-when-cross-origin",
})
