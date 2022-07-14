import { fileURLToPath } from 'url'
import path from 'path'
import languages from './languages.js'
import { allVersions } from './all-versions.js'
import createTree, { getBasePath } from './create-tree.js'
import renderContent from './render-content/index.js'
import loadSiteData from './site-data.js'
import nonEnterpriseDefaultVersion from './non-enterprise-default-version.js'
import Page from './page.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const versions = Object.keys(allVersions)
const enterpriseServerVersions = versions.filter((v) => v.startsWith('enterprise-server@'))
const renderOpts = { textOnly: true, encodeEntities: true }

// These are the exceptions to the rule.
// These URI prefixes should match what you'll find in crowdin.yml.
// If a URI starts with one of these prefixes, it basically means we don't
// bother to "backfill" a translation in its spot.
// For example, `/en/github/site-policy-deprecated/foo` works
// only in English and we don't bother making `/ja/github/site-policy-deprecated/foo`
// work too.
const TRANSLATION_DRIFT_EXCEPTIONS = [
  'github/site-policy-deprecated',
  // Early access stuff never has translations.
  'early-access',
]

/**
 * We only need to initialize pages _once per language_ since pages don't change per version. So we do that
 * first since it's the most expensive work. This gets us a nested object with pages attached that we can use
 * as the basis for the siteTree after we do some versioning. We can also use it to derive the pageList.
 */
export async function loadUnversionedTree(languagesOnly = null) {
  if (languagesOnly && !Array.isArray(languagesOnly)) {
    throw new Error("'languagesOnly' has to be an array")
  }
  const unversionedTree = {}

  const languagesValues = Object.entries(languages)
    .filter(([language]) => {
      return !languagesOnly || languagesOnly.includes(language)
    })
    .map(([, data]) => {
      return data
    })
  await Promise.all(
    languagesValues.map(async (langObj) => {
      const localizedContentPath = path.posix.join(__dirname, '..', langObj.dir, 'content')
      unversionedTree[langObj.code] = await createTree(localizedContentPath, langObj)
    })
  )

  return unversionedTree
}

/**
 * The siteTree is a nested object with pages for every language and version, useful for nav because it
 * contains parent, child, and sibling relationships:
 *
 * siteTree[languageCode][version].childPages[<array of pages>].childPages[<array of pages>] (etc...)

* Given an unversioned tree of all pages per language, we can walk it for each version and do a couple operations:
 * 1. Add a versioned href to every item, where the href is the relevant permalink for the current version.
 * 2. Drop any child pages that are not available in the current version.
 *
 * Order of languages and versions doesn't matter, but order of child page arrays DOES matter (for navigation).
*/
export async function loadSiteTree(unversionedTree, siteData) {
  const site = siteData || loadSiteData()
  const rawTree = Object.assign({}, unversionedTree || (await loadUnversionedTree()))
  const siteTree = {}

  // For every language...
  await Promise.all(
    Object.keys(languages).map(async (langCode) => {
      const treePerVersion = {}
      // in every version...
      await Promise.all(
        versions.map(async (version) => {
          // "version" the pages.
          treePerVersion[version] = await versionPages(
            Object.assign({}, rawTree[langCode]),
            version,
            langCode,
            site
          )
        })
      )

      siteTree[langCode] = treePerVersion
    })
  )

  return siteTree
}

export async function versionPages(obj, version, langCode, site) {
  // Add a versioned href as a convenience for use in layouts.
  obj.href = obj.page.permalinks.find(
    (pl) =>
      pl.pageVersion === version ||
      (pl.pageVersion === 'homepage' && version === nonEnterpriseDefaultVersion)
  ).href

  const context = {
    currentLanguage: langCode,
    currentVersion: version,
    enterpriseServerVersions,
    site: site[langCode].site,
  }

  // The Liquid parseAndRender method is MUCH faster than renderContent or renderProp.
  // This only works for titles and short titles, which have no other Markdown that needs
  // to be converted to HTML, so we can get away with _only_ parsing Liquid.
  obj.renderedFullTitle = obj.page.title.includes('{')
    ? await renderContent.liquid.parseAndRender(obj.page.title, context, renderOpts)
    : obj.page.title

  if (obj.page.shortTitle) {
    obj.renderedShortTitle = obj.page.shortTitle.includes('{')
      ? await renderContent.liquid.parseAndRender(obj.page.shortTitle, context, renderOpts)
      : obj.page.shortTitle
  }

  if (!obj.childPages) return obj

  const versionedChildPages = await Promise.all(
    obj.childPages
      // Drop child pages that do not apply to the current version
      .filter((childPage) => childPage.page.applicableVersions.includes(version))
      // Version the child pages recursively.
      .map((childPage) => versionPages(Object.assign({}, childPage), version, langCode, site))
  )

  obj.childPages = [...versionedChildPages]

  return obj
}

// Derive a flat array of Page objects in all languages.
export async function loadPageList(unversionedTree, languagesOnly = null) {
  if (languagesOnly && !Array.isArray(languagesOnly)) {
    throw new Error("'languagesOnly' has to be an array")
  }
  const rawTree = unversionedTree || (await loadUnversionedTree(languagesOnly))
  const pageList = []

  await Promise.all(
    (languagesOnly || Object.keys(languages)).map(async (langCode) => {
      await addToCollection(rawTree[langCode], pageList)
    })
  )

  async function addToCollection(item, collection) {
    if (!item.page) return
    collection.push(item.page)

    if (!item.childPages) return
    await Promise.all(
      item.childPages.map(async (childPage) => await addToCollection(childPage, collection))
    )
  }

  return pageList
}

export const loadPages = loadPageList

// Create an object from the list of all pages with permalinks as keys for fast lookup.
export function createMapFromArray(pageList) {
  const pageMap = pageList.reduce((pageMap, page) => {
    for (const permalink of page.permalinks) {
      pageMap[permalink.href] = page
    }
    return pageMap
  }, {})

  return pageMap
}

export async function loadPageMap(pageList) {
  const pages = await correctTranslationOrphans(pageList || (await loadPageList()))
  const pageMap = createMapFromArray(pages)
  return pageMap
}

// If a translation page exists, that doesn't have an English equivalent,
// remove it.
// If an English page exists, that doesn't have an translation equivalent,
// add it.
// Note, this function is exported purely for the benefit of the unit tests.
export async function correctTranslationOrphans(pageList, basePath = null) {
  const englishRelativePaths = new Set()
  for (const page of pageList) {
    if (page.languageCode === 'en') {
      englishRelativePaths.add(page.relativePath)
    }
  }

  // Prime the Map with an empty set for each language prefix.
  // It's important that we do this for *every* language rather than
  // just populating `nonEnglish` based on those pages that *are* present.
  // Otherwise, we won't have an index of all the languages
  // that *might* be missing.
  const nonEnglish = new Map()
  Object.keys(languages)
    .filter((lang) => lang !== 'en')
    .forEach((languageCode) => {
      nonEnglish.set(languageCode, new Set())
    })

  // By default, when backfilling, we set the `basePath` to be that of
  // English. But for the benefit of being able to do unit tests,
  // we make this an optional argument. Then, unit tests can use
  // its "tests/fixtures" directory.
  const englishBasePath = basePath || getBasePath(languages.en.dir)

  // Filter out all non-English pages that appear to be excess.
  // E.g. if an English doc was renamed from `content/foo.md` to
  // `content/bar.md` what will happen is that `translations/*/content/foo.md`
  // will still linger around and we want to remove that even if it was
  // scooped up from disk.
  const newPageList = []
  for (const page of pageList) {
    if (page.languageCode === 'en') {
      // English pages are never considered "excess"
      newPageList.push(page)
      continue
    }

    // If this translation page exists in English, keep it but also
    // add it to the set of relative paths that is known.
    if (englishRelativePaths.has(page.relativePath)) {
      nonEnglish.get(page.languageCode).add(page.relativePath)
      newPageList.push(page)
      continue
    }
  }

  const pageLoadPromises = []
  for (const relativePath of englishRelativePaths) {
    for (const [languageCode, relativePaths] of nonEnglish) {
      if (!relativePaths.has(relativePath)) {
        // At this point, we've found an English `relativePath` that is
        // not used by this language.
        // But before we decide to "backfill" it from the English equivalent
        // we first need to figure out if it should be excluded.
        // The reason for doing this check this late is for the benefit
        // of optimization. In general, when the translation pipeline has
        // done its magic, this should be very rare, so it's unnecessary
        // to do this exception check on every single English relativePath.
        if (TRANSLATION_DRIFT_EXCEPTIONS.find((exception) => relativePath.startsWith(exception))) {
          continue
        }

        // The magic right here!
        // The trick is that we can't clone instances of class Page. We need
        // to create them for this language. But the trick is that we
        // use the English relative path so it can have something to read.
        // For example, if we have figured out that
        // `translations/ja-JP/content/foo.md` doesn't exist, we pretend
        // that we can use `foo.md` and the base path of `content/`.
        pageLoadPromises.push(
          Page.init({
            basePath: englishBasePath,
            relativePath,
            languageCode,
          })
        )
      }
    }
  }
  const additionalPages = await Promise.all(pageLoadPromises)
  newPageList.push(...additionalPages)

  return newPageList
}

export default {
  loadUnversionedTree,
  loadSiteTree,
  loadPages: loadPageList,
  loadPageMap,
}
