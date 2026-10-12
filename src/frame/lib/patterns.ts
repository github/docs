// Shared regexes avoid repeated RegExp construction.

// Path regexes must stop product IDs at slash, end, query, or fragment boundaries.
// Example: /github/foo matches, but /github-foo does not.

export const githubDotcom = /\/github(\/|$|\?|#)/
// Enterprise paths match /enterprise and /enterprise/foo, not /enterprise-admin.
export const enterprise = /\/enterprise(?:\/|$|\?)(\d+\.\d+)?/
export const admin = /enterprise\/(\d+\.\d+\/)?admin\/?/
export const gheUser = /enterprise\/(\d+\.\d+\/)?user(\/|$|\?)/
export const enterpriseHomepage = /\/enterprise\/?(\d+\.\d+)?$/
export const desktop = /desktop\//
export const oldGuidesPath = /(\/admin|(^|\/)desktop)\/guides/
// Enterprise version extraction needs 11.10.340 and two-part versions.
export const getEnterpriseVersionNumber = /enterprise\/(\d+\.\d+(?:\.340)?)/
export const removeEnterpriseVersion = /(enterprise\/)\d+\.\d+\//
export const guides = /guides\//
export const hasLanguageCode = /^\/[a-z]{2}(\/|$|\?)/
export const getLanguageCode = /^\/([a-z]{2})/
export const trailingSlash = /^(.+?)\/+?$/
export const searchPath = /\/search(?:\/)?(\?)/
export const ymd = /^\d{4}-\d{2}-\d{2}$/
export const hasLiquid = /[{{][{%]/
export const dataReference =
  /{% ?(?:data|indented_data_reference)\s(?:early-access\.)?(?:reusables|variables|ui)\..*?%}/gm
export const imagePath = /\/?assets\/images\/.*?\.(png|svg|gif|pdf|ico|jpg|jpeg)/gi
export const homepagePath = /^\/\w{2}$/ // /en, /ja
export const multipleSlashes = /^(\/|\\){2,}/
export const assetPaths = /\/(?:javascripts|stylesheets|assets|node_modules|dist|_next)\//
export const oldApiPath = /\/v[34]\/(?!guides|overview).+?\/.+/
export const staticRedirect = /<link rel="canonical" href="(.+?)">/
export const enterpriseNoVersion = /\/enterprise\/([^\d].*$)/
// currentVersion can inject plan@release values like private-instances@latest into old paths.
// The regex also matches /enterprise/enterprise-server@2.22/user and /enterprise/user.
export const oldEnterprisePath =
  /\/([a-z]{2}\/)?(enterprise\/)?(\S+?@(\S+?\/))?(\d.\d+\/)?(user[/$])?/
export const adminProduct = /\/admin(\/|$|\?|#)/
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
  enterpriseServer,
  getEnterpriseServerNumber,
}
