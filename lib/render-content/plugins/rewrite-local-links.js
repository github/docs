import path from 'path'
import { visit } from 'unist-util-visit'
import { getPathWithoutLanguage, getVersionStringFromPath } from '../../path-utils.js'
import { getNewVersionedPath } from '../../old-versions-utils.js'
import patterns from '../../patterns.js'
import { deprecated, latest } from '../../enterprise-server-releases.js'
import nonEnterpriseDefaultVersion from '../../non-enterprise-default-version.js'
import { allVersions } from '../../all-versions.js'
import removeFPTFromPath from '../../remove-fpt-from-path.js'
import readJsonFile from '../../read-json-file.js'
const supportedVersions = Object.keys(allVersions)
const supportedPlans = Object.values(allVersions).map((v) => v.plan)
const externalRedirects = Object.keys(readJsonFile('./lib/redirects/external-sites.json'))

// Matches any <a> tags with an href that starts with `/`
const matcher = (node) =>
  node.type === 'element' &&
  node.tagName === 'a' &&
  node.properties &&
  node.properties.href &&
  node.properties.href.startsWith('/')

// Content authors write links like `/some/article/path`, but they need to be
// rewritten on the fly to match the current language and page version
export default function rewriteLocalLinks({ languageCode, version }) {
  // There's no languageCode or version passed, so nothing to do
  if (!languageCode || !version) return

  return (tree) => {
    visit(tree, matcher, (node) => {
      const newHref = getNewHref(node, languageCode, version)
      if (newHref) {
        node.properties.href = newHref
      }
    })
  }
}

function getNewHref(node, languageCode, version) {
  const { href } = node.properties
  // Exceptions to link rewriting
  if (href.startsWith('/assets')) return
  if (href.startsWith('/public')) return
  if (externalRedirects.includes(href)) return

  let newHref = href
  // If the link has a hardcoded plan or version in it, do not update other than adding a language code
  // Examples:
  // /enterprise-server@2.20/rest/reference/oauth-authorizations
  // /enterprise-server/rest/reference/oauth-authorizations (this redirects to the latest version)
  // /enterprise-server@latest/rest/reference/oauth-authorizations (this redirects to the latest version)
  const firstLinkSegment = href.split('/')[1]
  if (
    [...supportedPlans, ...supportedVersions, 'enterprise-server@latest'].some((v) =>
      firstLinkSegment.startsWith(v)
    )
  ) {
    newHref = path.join('/', languageCode, href)
  }

  // If the link includes a deprecated version, do not update other than adding a language code
  // Example: /enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release
  const oldEnterpriseVersionNumber = href.match(patterns.getEnterpriseVersionNumber)
  if (oldEnterpriseVersionNumber && deprecated.includes(oldEnterpriseVersionNumber[1])) {
    newHref = path.join('/', languageCode, href)
  }

  if (newHref === href) {
    // start clean with no language (TOC pages already include the lang codes via lib/liquid-tags/link.js)
    const hrefWithoutLang = getPathWithoutLanguage(href)

    // normalize any legacy links so they conform to new link structure
    newHref = path.posix.join('/', languageCode, getNewVersionedPath(hrefWithoutLang))

    // get the current version from the link
    const versionFromHref = getVersionStringFromPath(newHref)

    // ------ BEGIN ONE-OFF OVERRIDES ------//
    // dotcom-only links always point to dotcom
    if (node.properties.className && node.properties.className.includes('dotcom-only')) {
      version = nonEnterpriseDefaultVersion
    }

    // desktop links always point to dotcom
    if (patterns.desktop.test(hrefWithoutLang)) {
      version = nonEnterpriseDefaultVersion
    }

    // admin links on dotcom always point to Enterprise
    if (patterns.adminProduct.test(hrefWithoutLang) && version === nonEnterpriseDefaultVersion) {
      version = `enterprise-server@${latest}`
    }

    // insights links on dotcom always point to Enterprise
    if (patterns.insightsProduct.test(hrefWithoutLang) && version === nonEnterpriseDefaultVersion) {
      version = `enterprise-server@${latest}`
    }
    // ------ END ONE-OFF OVERRIDES ------//

    // update the version in the link
    newHref = removeFPTFromPath(newHref.replace(versionFromHref, version))
  }

  newHref = newHref.replace(patterns.trailingSlash, '$1')
  return newHref
}
