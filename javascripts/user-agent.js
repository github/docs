// A tiny user agent checking RegExp for analytics purposes

// The order matters with these
const OS_REGEXPS = [
  /(iphone os|ipad os) ([^);]+)/i,
  /(mac) os x ([^);]+)/i,
  /(windows) ([^);]+)/i,
  /(android) ([^);]+)/i,
  /(cros) ([^);]+)/i,
  /(linux) ([^);]+)/i
]

// The order matters with these
const BROWSER_REGEXPS = [
  /(firefox)\/([^\s)]+)/i,
  /(edge)\/([^\s)]+)/i,
  /(chrome)\/([^\s)]+)/i,
  /(safari)\/([^\s)]+)/i,
  /ms(ie)\/([^\s)]+)/i
]

export default function parseUserAgent (ua = navigator.userAgent) {
  ua = ua.toLowerCase()
  let [, os = 'other', os_version = '0'] = ua.match(
    OS_REGEXPS.find(re => re.test(ua))
  )
  if (os === 'iphone os' || os === 'ipad os') os = 'ios'
  const [, browser = 'other', browser_version = '0'] = ua.match(
    BROWSER_REGEXPS.find(re => re.test(ua))
  )
  return { os, os_version, browser, browser_version }
}
