/**
 * This file exports a mix of strings and of regexes. Linkinator relies
 * on this in `script/check-english-links.js` when we encounter external
 * links that we *specifically ignore*. That means, that URLs or patterns
 * mentioned in this file might appear within our content but we don't
 * bother checking that they actually work.
 */

/* eslint-disable prefer-regex-literals */

export default [
  // Skip GitHub search links.
  // E.g. https://github.com/search?foo=bar
  new RegExp('https://github\\.com/search\\?'),
  new RegExp('https://github\\.com/github/gitignore/search\\?'),

  // These links require auth.
  new RegExp('https://github\\.com/settings/profile'),
  new RegExp('https://github\\.com/github/docs/edit'),
  new RegExp('https://github\\.com/github/insights-releases/releases/latest'),
  new RegExp('https://classroom\\.github.com/videos'),

  // Oneoff links that link checkers think are broken but are not.
  'https://haveibeenpwned.com/',
  'https://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:P029',
  'https://www.linkedin.com/company/github',
  'https://www.facebook.com/',
  'https://ko-fi.com/',
  'https://en.liberapay.com/',
  'https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb',
  'https://www.vmware.com/products/esxi-and-esx.html',
  'https://www.ecfr.gov/cgi-bin/text-idx?SID=ad384e1f1e017076f8c0136f322f0a4c&mc=true&node=pt15.2.744&rgn=div5',
  'https://wiki.oasis-open.org/security',
  'https://www.ipaddressguide.com/cidr',
  'https://crates.io/',
  'https://opensource.org/about',
]
