// Order matters because earlier regexes win.
const OS_REGEXPS = [
  /(iphone os|ipad os) ([^);]+)/i,
  /(mac) os x ([^);]+)/i,
  /(windows) ([^);]+)/i,
  /(android) ([^);]+)/i,
  /(cros) ([^);]+)/i,
  /(linux) ([^);]+)/i,
]

// Order matters because earlier regexes win.
const BROWSER_REGEXPS = [
  /(opr)\/([^\s)]+)/i, // opr identifies Opera.
  /(edg[e]?)\/([^\s)]+)/i, // edg and edge both identify Microsoft Edge.
  /(firefox)\/([^\s)]+)/i,
  /(chrome)\/([^\s)]+)/i,
  /(safari)\/([^\s)]+)/i,
]

export function parseUserAgent(ua = navigator.userAgent) {
  ua = ua.toLowerCase()
  const osRe = OS_REGEXPS.find((re) => re.test(ua))
  let [, os = 'other', os_version = '0'] = (osRe && ua.match(osRe)) || []
  if (os === 'iphone os' || os === 'ipad os') os = 'ios'
  const browserRe = BROWSER_REGEXPS.find((re) => re.test(ua))
  let [, browser = 'other', browser_version = '0'] = (browserRe && ua.match(browserRe)) || []
  if (browser === 'opr') browser = 'opera'
  if (browser === 'edg') browser = 'edge'
  return { os, os_version, browser, browser_version }
}
