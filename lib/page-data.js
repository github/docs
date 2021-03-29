const path = require('path')
const languages = require('./languages')
const versions = Object.keys(require('./all-versions'))
const createTree = require('./create-tree')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const englishPath = path.join(__dirname, '..', 'content')

// This function creates three structures that we need for various purposes:
// 1. siteTree: A nested object with pages for every language and version:
//     siteTree[languageCode][version].childPages[<array of pages>].childPages[<array of pages>] (etc...)
//
// 2. pageMap: A map of all pages with permalinks as keys for fast lookup.
//
// 3. pageList: A simple array of all page objects for fast iterating.
module.exports = async function loadPageData () {
  // We only need to initialize pages *once per language* since pages don't change per version. So we do that
  // first since it's the most expensive work. This gets us a nested object with pages attached that we can use
  // as the basis for the siteTree after we do some versioning.
  const rawTree = {}
  await Promise.all(Object.values(languages)
    .map(async (langObj) => {
      rawTree[langObj.code] = await createTree(englishPath, langObj)
    }))

  // Now that we have the object of all pages per language, we can walk it for each version and do a couple operations:
  // 1. Add a versioned href to every item, where the href is the relevant permalink for the current version.
  //    A) Add an entry for the permalink in the pageMap.
  // 2. Drop any child pages that are not available in the current version.
  // Note that order of languages and versions doesn't matter, but order of child page arrays DOES matter (for navigation).
  const siteTree = {}
  const pageMap = {}

  await Promise.all(Object.keys(languages).map(async (langCode) => {
    const treePerVersion = {}

    await Promise.all(versions.map(async (version) => {
      // Yes, we are mutating the rawTree object here.
      versionPages(rawTree[langCode])

      // This step can't be asynchronous because the order of child pages matters.
      function versionPages (item) {
        // Add a versioned href as a convenience for use in layouts.
        item.href = item.page.permalinks
          .find(pl => pl.pageVersion === version || (pl.pageVersion === 'homepage' && version === nonEnterpriseDefaultVersion))
          .href

        // Add permalinks to the pageMap.
        pageMap[item.href] = item.page

        if (!item.childPages) return item

        // Drop child pages that do not apply to the current version
        item.childPages = item.childPages.filter(childPage => childPage.page.applicableVersions.includes(version))
        item.childPages.forEach(childPage => versionPages(childPage))
      }

      treePerVersion[version] = rawTree[langCode]
    }))

    siteTree[langCode] = treePerVersion
  }))

  // Get a simple array of pages.
  const pageList = [...new Set(Object.values(pageMap))]

  return { siteTree, pageList, pageMap }
}
