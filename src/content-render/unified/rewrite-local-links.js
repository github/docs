import path from 'path'
import { visit } from 'unist-util-visit'
import { distance } from 'fastest-levenshtein'
import { getPathWithoutLanguage, getVersionStringFromPath } from '../../../lib/path-utils.js'
import { getNewVersionedPath } from '#src/archives/lib/old-versions-utils.js'
import patterns from '../../../lib/patterns.js'
import { deprecated, latest } from '#src/versions/lib/enterprise-server-releases.js'
import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import removeFPTFromPath from '#src/versions/lib/remove-fpt-from-path.js'
import readJsonFile from '../../../lib/read-json-file.js'
import findPage from '../../../lib/find-page.js'

const isProd = process.env.NODE_ENV === 'production'

const supportedPlans = new Set(Object.values(allVersions).map((v) => v.plan))
const externalRedirects = readJsonFile('./src/redirects/lib/external-sites.json')

// Meaning it can be 'AUTOTITLE ' or ' AUTOTITLE' or 'AUTOTITLE'
const AUTOTITLE = /^\s*AUTOTITLE\s*$/

// This is exported because in translations, we need to treat this as
// one of those Liquid parsing errors which happens on corrupted translations
// which we use to know that we need to fall back to English.
export class TitleFromAutotitleError extends Error {}

// Matches any <a> tags with an href that starts with `/`
const matcherInternalLinks = (node) =>
  node.type === 'element' &&
  node.tagName === 'a' &&
  node.properties &&
  node.properties.href &&
  node.properties.href.startsWith('/')

const matcherAnchorLinks = (node) =>
  node.type === 'element' &&
  node.tagName === 'a' &&
  node.properties &&
  node.properties.href &&
  node.properties.href.startsWith('#')

// Content authors write links like `/some/article/path`, but they need to be
// rewritten on the fly to match the current language and page version
export default function rewriteLocalLinks(context) {
  const { currentLanguage, autotitleLanguage, currentVersion } = context
  // There's no languageCode or version passed, so nothing to do
  if (!currentLanguage || !currentVersion) return

  return async function (tree) {
    const nodes = []
    visit(tree, matcherInternalLinks, (node) => {
      // The context *might* have a `autotitleLanguage` which can be
      // different from the regular `currentLanguage`.
      // This means that AUTOTITLE links should be different from how,
      // for example, reusables or other `{% data ... %}` Liquid tags work.
      // Our release notes, for example, prefer to force the rendered text
      // in English, but all AUTOTITLE links in the current language.
      const newHref = getNewHref(node, autotitleLanguage || currentLanguage, currentVersion)
      if (newHref) {
        node.properties.href = newHref
      }
      for (const child of node.children) {
        if (child.value) {
          if (AUTOTITLE.test(child.value)) {
            nodes.push({ href: node.properties.href, child })
          } else if (
            // This means CI and local dev
            process.env.NODE_ENV !== 'production' &&
            // But only raise this (in CI or local dev) if it's English
            currentLanguage === 'en'
          ) {
            // Throw if the link text *almost*  is AUTOTITLE
            if (
              child.value.toUpperCase() === 'AUTOTITLE' ||
              distance(child.value.toUpperCase(), 'AUTOTITLE') <= 2
            ) {
              throw new Error(
                `Found link text '${child.value}', expected 'AUTOTITLE'. ` +
                  `Find the mention of the link text '${child.value}' and change it to 'AUTOTITLE'. Case matters.`,
              )
            }
          }
        }
      }
    })

    if (!isProd) {
      // This runs when doing local preview, link checker tests, or
      // running a script like `update-internal-links.js`.
      visit(tree, matcherAnchorLinks, (node) => {
        for (const child of node.children || []) {
          if (child.value && AUTOTITLE.test(child.value)) {
            throw new Error(
              `Found anchor link with text AUTOTITLE ('${node.properties.href}'). ` +
                'Update the anchor link with text that is not AUTOTITLE.',
            )
          }
        }
      })
    }

    await Promise.all(nodes.map(({ href, child }) => getNewTitleSetter(child, href, context)))
  }
}

async function getNewTitleSetter(child, href, context) {
  child.value = await getNewTitle(href, context)
}

async function getNewTitle(href, context) {
  const page = findPage(href, context.pages, context.redirects)
  if (!page) {
    throw new TitleFromAutotitleError(`Unable to find Page by href '${href}'`)
  }
  return await page.renderProp('title', context, { textOnly: true })
}

function getNewHref(node, languageCode, version) {
  const { href } = node.properties
  // Exceptions to link rewriting
  if (href.startsWith('/assets')) return
  if (href.startsWith('/public')) return
  if (href in externalRedirects) return

  let newHref = href
  // If the link has a hardcoded plan or version in it, do not update other than adding a language code
  // Examples:
  // /enterprise-server@2.20/rest/reference/oauth-authorizations
  // /enterprise-server/rest/reference/oauth-authorizations (this redirects to the latest version)
  // /enterprise-server@latest/rest/reference/oauth-authorizations (this redirects to the latest version)
  const firstLinkSegment = href.split('/')[1]
  if (supportedPlans.has(firstLinkSegment.split('@')[0])) {
    newHref = path.posix.join('/', languageCode, href)
  } else if (firstLinkSegment.includes('@')) {
    // This could mean a bad typo!
    // This can happend if you have something
    // like `/enterprise-servr@3.9/foo/bar` which is a typo. I.e.
    // `enterprise-servr` is not a valid plan, but it has a `@` character  in it.
    console.warn(
      `
Warning! The first segment of the internal link has a '@' character in it
but the plan is not recognized. This is likely a typo.
Please inspect the link and fix it if it's a typo.
Look for an internal link that starts with '${href}'.
    `,
    )
  }

  // If the link includes a deprecated version, do not update other than adding a language code
  // Example: /enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release
  const oldEnterpriseVersionNumber = href.match(patterns.getEnterpriseVersionNumber)
  if (oldEnterpriseVersionNumber && deprecated.includes(oldEnterpriseVersionNumber[1])) {
    newHref = path.posix.join('/', languageCode, href)
  }

  // Treat the unicorn where we have version numbers.
  // As of Jan 2022, the only plan that uses version numbers is
  // 'enterprise-server'. But some day there might more and when that day
  // comes this line needs to account for all those where "latest" needs
  // to be replaced by its actual latest version number.
  // The reason for doing this rewrite is that we want to suppress the
  // use of '...@latest' because it's just going to redirect when viewed
  // anyway. And if a page is archived, all "latest" is replaced to the
  // current number anyway.
  newHref = newHref.replace('/enterprise-server@latest/', `/enterprise-server@${latest}/`)

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
      // See internal issue #2672
      console.warn('This is deprecated and will soon be removed')
      version = nonEnterpriseDefaultVersion
    }

    // desktop links always point to dotcom
    if (patterns.desktop.test(hrefWithoutLang)) {
      version = nonEnterpriseDefaultVersion
    }

    // admin links on dotcom always point to Enterprise Cloud
    if (patterns.adminProduct.test(hrefWithoutLang) && version === nonEnterpriseDefaultVersion) {
      version = 'enterprise-cloud@latest'
    }
    // ------ END ONE-OFF OVERRIDES ------//

    // update the version in the link
    newHref = newHref.replace(versionFromHref, version)
  }
  newHref = removeFPTFromPath(newHref)

  newHref = newHref.replace(patterns.trailingSlash, '$1')
  return newHref
}
