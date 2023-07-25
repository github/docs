import fs from 'fs'
import path from 'path'

import { languageKeys } from '../../lib/languages.js'
import { allVersionKeys } from '../../lib/all-versions.js'

import frontmatter from '../../lib/read-frontmatter.js'
import { ROOT } from '../../lib/constants.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'
import removeFPTFromPath from '../../lib/remove-fpt-from-path.js'
import { renderContentWithFallback } from '../../lib/render-with-fallback.js'
import { getPathWithoutVersion } from '../../lib/path-utils.js'

const isHomepage = (path) => {
  const split = path.split('/')
  // E.g. `/foo` but not `foo/bar` or `foo/`
  if (split.length === 2 && split[1] && !split[0]) {
    return languageKeys.includes(split[1])
  }
  // E.g. `/foo/possiblyproductname` but not `foo/possiblyproductname` or
  // `/foo/something/`
  if (split.length === 3 && !split[0] && split[2]) {
    return allVersionKeys.includes(split[2])
  }
  return false
}

const isSearchpage = (path) => getPathWithoutVersion(path).split('/')[2] === 'search'

export default async function productGroups(req, res, next) {
  // It's important to use `req.pathPage` instead of `req.path` because
  // the request could be the client-side routing from Next where the URL
  // might be something like `/_next/data/foo/bar.json` which is translated,
  // in another middleware, to what it would equate to if it wasn't
  // client-side routing.
  const { pagePath } = req

  if ((isHomepage(pagePath) || isSearchpage(pagePath)) && req.context.currentVersionObj) {
    req.context.homepageLinks = await getHomepageLinks(req)
  }

  return next()
}

/**
 * Indepedent of languages, the home page Page instance has a list of
 * "children" (e.g. the 'children' frontmatter value in content/index.md)
 * This is actually always the same for every language because translations
 * don't have their own frontmatter keys that we keep.
 *
 * This function is memoized because we need this list for many different
 * URLs such as `/en` and `/en/enterprise-cloud@latest` and `/ja` and
 * `/fr/search` and so on.
 */
let cachedChildrenApplicableVersions = null
function getChildrenApplicableVersions(pages) {
  if (!cachedChildrenApplicableVersions) {
    const children = pages['/en'].children
    const applicableVersions = []
    for (const child of children) {
      const toc = path.join(ROOT, 'content', child, 'index.md')
      const { data } = frontmatter(fs.readFileSync(toc, 'utf8'))
      applicableVersions.push([child, getApplicableVersions(data.versions, toc)])
    }
    cachedChildrenApplicableVersions = applicableVersions
  }
  return cachedChildrenApplicableVersions
}

async function getHomepageLinks(req) {
  const { currentVersion, pages } = req.context
  const homePage = pages[`/${req.language}`]
  if (!homePage) {
    throw new Error(`no home page for '${req.language}'`)
  }

  const links = []
  for (const [child, applicableVersions] of getChildrenApplicableVersions(pages)) {
    // Only use the `currentVersion` if that page exists for that version.
    // Otherwise default to the first applicable version.
    // For example, if the current version is `enterprise-cloud@latest`
    // and the page is `site-policy` we can't use `enterprise-cloud@latest`
    // so we default to `applicableVersions[0]`.
    const uri = applicableVersions.includes(currentVersion)
      ? `/${currentVersion}/${child}`
      : `/${applicableVersions[0]}/${child}`
    const childHref = removeFPTFromPath(`/${req.language}${uri}`)
    const childPage = pages[childHref]
    if (!childPage) {
      if (req.language === 'en') {
        // If this throws, we have a bug in the code that figures out the URL
        // from the `child` name.
        throw new Error(`Based on the supposed URI '${uri}' there is no such page.`)
      }
      // Some pages are deliberately not available in non-English,
      // like early-access.
      continue
    }
    if (childPage.hidden || childPage.wip) {
      continue
    }

    let name = await renderContentWithFallback(childPage, 'rawShortTitle', req.context, {
      textOnly: true,
    })
    if (!name) {
      name = await renderContentWithFallback(childPage, 'rawTitle', req.context, {
        textOnly: true,
      })
    }
    links.push({
      name,
      href: childHref,
      external: false,
    })
  }

  for (const { name, href, external } of Object.values(homePage.externalProducts)) {
    links.push({
      name,
      href,
      external,
    })
  }

  return links
}
