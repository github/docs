// Order matters because earlier regexes win.
const OS_REGEXPS = [
  /(iphone os|ipad os|cpu os) ([^);]+)/i, // iPad user agents send cpu os instead of ipad os.
  /(mac) os x ([^);]+)/i,
  /(windows) ([^);]+)/i,
  /(android) ([^);]+)/i,
  /(cros) ([^);]+)/i,
  /(linux) ([^);]+)/i,
]

// Order matters because earlier regexes win.
const BROWSER_REGEXPS = [
  /(opr)\/([^\s)]+)/i, // opr identifies Opera.
  /(edge|edgios|edga|edg)\/([^\s)]+)/i, // edgios and edga are Edge on iOS and Android.
  /(firefox|fxios)\/([^\s)]+)/i, // fxios is Firefox on iOS.
  /(chrome|crios)\/([^\s)]+)/i, // crios is Chrome on iOS.
  /(safari)\/([^\s)]+)/i,
]

export function parseUserAgent(ua = navigator.userAgent) {
  ua = ua.toLowerCase()
  const osRe = OS_REGEXPS.find((re) => re.test(ua))
  let [, os = 'other', os_version = '0'] = (osRe && ua.match(osRe)) || []
  if (os === 'iphone os' || os === 'ipad os' || os === 'cpu os') os = 'ios'
  const browserRe = BROWSER_REGEXPS.find((re) => re.test(ua))
  let [, browser = 'other', browser_version = '0'] = (browserRe && ua.match(browserRe)) || []
  if (browser === 'opr') browser = 'opera'
  if (browser === 'edg' || browser === 'edga' || browser === 'edgios') browser = 'edge'
  if (browser === 'fxios') browser = 'firefox'
  if (browser === 'crios') browser = 'chrome'
  return { os, os_version, browser, browser_version }
}
