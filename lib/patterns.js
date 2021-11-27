// This module is intended to keep our use of regular expressions DRY,
// and to reduce the overhead of instantiating new RegExp objects

// if we're looking for part of a path, like /github,
// we allow for four characters after the string: (\/|$|\?|#)
// slash (/), end of line ($), query param (?), fragment (#)
// this will ensure we capture: /github/foo, /github, /github?query=foo, /github#foo
// and not capture: /github-foo

export const githubDotcom = /\/github(\/|$|\?|#)/
// we want to capture `/enterprise` and `/enterprise/foo` but NOT `/enterprise-admin`
export const enterprise = /\/enterprise(?:\/|$|\?)(\d+\.\d+)?/
export const admin = /enterprise\/(\d+\.\d+\/)?admin\/?/
export const gheUser = /enterprise\/(\d+\.\d+\/)?user(\/|$|\?)/
export const enterpriseHomepage = /\/enterprise\/?(\d+\.\d+)?$/
export const desktop = /desktop\//
export const oldGuidesPath = /(\/admin|(^|\/)desktop)\/guides/
// need to capture 11.10.340 and 2.0+
export const getEnterpriseVersionNumber = /^.*?enterprise\/(\d+\.\d+(?:\.340)?).*?$/
export const removeEnterpriseVersion = /(enterprise\/)\d+\.\d+\//
export const guides = /guides\//
export const hasLanguageCode = /^\/[a-z]{2}(\/|$|\?)/
export const getLanguageCode = /^\/([a-z]{2})/
export const trailingSlash = /^(.+?)\/+?$/
export const searchPath = /\/search(?:\/)?(\?)/
export const ymd = /^\d{4}-\d{2}-\d{2}$/
export const hasLiquid = /[{{][{%]/
export const dataReference = /{% ?data\s(?:early-access\.)?(?:reusables|variables|ui)\..*?%}/gm
export const imagePath = /\/?assets\/images\/.*?\.(png|svg|gif|pdf|ico|jpg|jpeg)/gi
export const homepagePath = /^\/\w{2}$/ // /en, /ja /cn
export const multipleSlashes = /^\/{2,}/
export const assetPaths = /\/(?:javascripts|stylesheets|assets|node_modules|dist|_next)\//
export const oldApiPath = /\/v[34]\/(?!guides|overview).+?\/.+/
export const staticRedirect = /<link rel="canonical" href="(.+?)">/
export const enterpriseNoVersion = /\/enterprise\/([^\d].*$)/
// a {{ currentVersion }} in internal links may inject '<new-version@release>' into old paths,
// so the oldEnterprisePath regex must match: /enterprise/private-instances@latest/user,
// /enterprise/enterprise-server@2.22/user, /enterprise/2.22/user, and /enterprise/user
export const oldEnterprisePath =
  /\/([a-z]{2}\/)?(enterprise\/)?(\S+?@(\S+?\/))?(\d.\d+\/)?(user[/$])?/
// new versioning format patterns
export const adminProduct = /\/admin(\/|$|\?|#)/
export const insightsProduct = /\/insights(\/|$|\?|#)/
export const enterpriseServer = /\/enterprise-server@/
export const getEnterpriseServerNumber = /enterprise-server@(\d+\.\d+)/

export default {
  githubDotcom,
  enterprise,
  admin,
  gheUser,
  enterpriseHomepage,
  desktop,
  oldGuidesPath,
  getEnterpriseVersionNumber,
  removeEnterpriseVersion,
  guides,
  hasLanguageCode,
  getLanguageCode,
  trailingSlash,
  searchPath,
  ymd,
  hasLiquid,
  dataReference,
  imagePath,
  homepagePath,
  multipleSlashes,
  assetPaths,
  oldApiPath,
  staticRedirect,
  enterpriseNoVersion,
  oldEnterprisePath,
  adminProduct,
  insightsProduct,
  enterpriseServer,
  getEnterpriseServerNumber,
}
