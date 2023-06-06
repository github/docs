const OS_MAP = {
  'iphone os': 'ios',
  'ipad os': 'ios',
  mac: 'mac',
  windows: 'windows',
  android: 'android',
  cros: 'cros',
  linux: 'linux',
};

const BROWSER_MAP = {
  firefox: 'firefox',
  edge: 'edge',
  chrome: 'chrome',
  safari: 'safari',
  'msie': 'msie',
};

export function parseUserAgent(ua = navigator.userAgent) {
  ua = ua.toLowerCase();
  
  let os = 'other';
  let os_version = '0';
  for (const key in OS_MAP) {
    if (ua.includes(key)) {
      os = OS_MAP[key];
      const match = ua.match(new RegExp(`${key} ([^);]+)`, 'i'));
      if (match) {
        os_version = match[1];
      }
      break;
    }
  }
  
  let browser = 'other';
  let browser_version = '0';
  for (const key in BROWSER_MAP) {
    if (ua.includes(key)) {
      browser = BROWSER_MAP[key];
      const match = ua.match(new RegExp(`${key}/([^\\s)]+)`, 'i'));
      if (match) {
        browser_version = match[1];
      }
      break;
    }
  }
  
  return { os, os_version, browser, browser_version };
}
