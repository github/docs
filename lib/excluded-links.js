// Linkinator treats the following as regex.
module.exports = [
  // Skip GitHub search links.
  'https://github.com/search\\?',
  'https://github.com/github/gitignore/search\\?',

  // These links require auth.
  'https://github.com/settings/profile',
  'https://github.com/github/docs/edit',
  'https://github.com/github/insights-releases/releases/latest',

  // Developer content uses these for examples; they should not be checked.
  'http://localhost:1234',
  'localhost:3000',

  // Oneoff links that link checkers think are broken but are not.
  'https://haveibeenpwned.com/',
  'https://www.ilo.org/dyn/normlex/en/f\\?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:P029',
  'http://www.w3.org/wiki/LinkHeader/'
]
