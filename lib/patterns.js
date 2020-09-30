// This module is intended to keep our use of regular expressions DRY,
// and to reduce the overhead of instantiating new RegExp objects

// if we're looking for part of a path, like /github,
// we allow for four characters after the string: (\/|$|\?|#)
// slash (/), end of line ($), query param (?), fragment (#)
// this will ensure we capture: /github/foo, /github, /github?query=foo, /github#foo
// and not capture: /github-foo
module.exports = {
  githubDotcom: /\/github(\/|$|\?|#)/,
  // we want to capture `/enterprise` and `/enterprise/foo` but NOT `/enterprise-admin`
  enterprise: /\/enterprise(?:\/|$|\?)(\d+\.\d+)?/,
  admin: /enterprise\/(\d+\.\d+\/)?admin\/?/,
  gheUser: /enterprise\/(\d+\.\d+\/)?user(\/|$|\?)/,
  enterpriseHomepage: /\/enterprise\/?(\d+\.\d+)?$/,
  desktop: /desktop\//,
  oldGuidesPath: /(\/admin|(^|\/)desktop)\/guides/,
  // need to capture 11.10.340 and 2.0+
  getEnterpriseVersionNumber: /^.*?enterprise\/(\d+\.\d+(?:\.340)?).*?$/,
  removeEnterpriseVersion: /(enterprise\/)\d+\.\d+\//,
  guides: /guides\//,
  hasLanguageCode: /^\/[a-z]{2}(\/|$|\?)/,
  getLanguageCode: /^\/([a-z]{2})/,
  trailingSlash: /^(.+?)\/+?$/,
  searchPath: /\/search(?:\/)?(\?)/,
  ymd: /^\d{4}-\d{2}-\d{2}$/,
  hasLiquid: /[{{][{%]/,
  dataReference: /{% ?data\s(?:reusables|variables|ui)\..*?%}/gm,
  imagePath: /\/?assets\/images\/.*?\.(png|svg|gif|pdf|ico|jpg|jpeg)/gi,
  homepagePath: /^\/\w{2}$/, // /en, /ja, /cn
  multipleSlashes: /^\/{2,}/,
  assetPaths: /\/(?:javascripts|stylesheets|assets|node_modules|dist)\//,
  oldApiPath: /\/v[34]\/(?!guides|overview).+?\/.+/,
  staticRedirect: /<link rel="canonical" href="(.+?)">/,
  enterpriseNoVersion: /\/enterprise\/([^\d].*$)/,
  // currentVersion in Liquid statements may inject 'enterprise-server@release' into old paths
  oldEnterprisePath: /\/([a-z]{2}\/)?(enterprise\/)?(enterprise-server@)?(\d.\d+\/)?(user[/$])?/,
  // new versioning format patterns
  adminProduct: /\/admin(\/|$|\?|#)/,
  enterpriseServer: /\/enterprise-server@/,
  getEnterpriseServerNumber: /enterprise-server@(\d+\.\d+)/
}
