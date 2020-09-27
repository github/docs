module.exports = [
  //  GitHub search links fail with "429 Too Many Requests"
  'https://github.com/search?*',
  'https://github.com/github/gitignore/search?',

  // LinkedIn links fail due to bug: https://github.com/stevenvachon/broken-link-checker/issues/91
  'https://www.linkedin.com/*',

  // blc returns "BLC_UNKNOWN"  on this link, even though cURL returns "302 Found"
  'https://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:P029',

  // the codercat link works but blc reports a false 404
  'https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1',

  // this URL started returning 403 to blc and cURL even though it works in a browser; see docs-internal #10124
  'https://haveibeenpwned.com/',
  'https://haveibeenpwned.com/*',

  // this is a private repo customers are given access to when they purchase Insights; see docs-internal #12037
  'https://github.com/github/insights-releases/releases/latest',

  // developer content uses these for examples; they should not be checked
  'http://localhost:1234/*',
  'localhost:3000',

  // this URL works but blc reports a false 404
  'http://www.w3.org/wiki/LinkHeader/'
]
