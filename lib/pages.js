const path = require('path')
const languages = require('./languages')
const versions = Object.keys(require('./all-versions'))
const createTree = require('./create-tree')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const englishPath = path.join(__dirname, '..', 'content')
const walk = require('walk-sync').entries
const Page = require('./page')

// This function creates a nested object that can be accessed like this:
// siteTree[languageCode][version].childPages[<array of pages>].childPages[<array of pages>] (etc...)
async function loadTree () {
  // We only need to initialize pages once per language (since pages don't change per version), so we do that
  // first since it's the most expensive work. This gets us a nested object with pages attached that we can use
  // as the basis for the siteTree after we do some versioning.
  const rawTree = {}
  await Promise.all(Object.values(languages)
    .map(async (langObj) => {
      rawTree[langObj.code] = await createTree(englishPath, langObj)
    }))

  // Now that we have the paged tree, we can walk it for every version and do two operations:
  // 1. Add a versioned href to every node (we can get this easily from the permalinks array).
  // 2. Recurisvely drop any child pages that are not available in the current version.
  // Note that order of languages and versions doesn't matter, but order of child page arrays DOES matter (for nav).
  const siteTree = {}
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

        if (!item.childPages) return item

        // Drop child pages that do not apply to the current version
        item.childPages = item.childPages.filter(childPage => childPage.page.applicableVersions.includes(version))
        item.childPages.forEach(childPage => versionPages(childPage))
      }

      treePerVersion[version] = rawTree[langCode]
    }))

    siteTree[langCode] = treePerVersion
  }))

  console.log(siteTree.en[nonEnterpriseDefaultVersion])

  return siteTree
}

async function loadPageListFromTree (tree) {
  const siteTree = tree || await loadTree()

  // Traverse the tree of pages and create a simple array of pages.
  // (We don't care about the language code or version here, so we can start two levels in.)
  const collection = Object.values(siteTree).map(v => Object.values(v)).flat()
  const result = []
  collectPages(collection, result)

  function collectPages (arr, result) {
    arr.forEach(item => {
      if (item.page) {
        result.push(item.page)
      }
      if (item.childPages) {
        collectPages(item.childPages, result)
      }
    })
  }

  return result
}

async function loadPageList () {
  // load english pages
  const englishPath = path.join(__dirname, '..', languages.en.dir, 'content')
  const englishPaths = walk(englishPath, {
    globs: ['**/*.md'],
    ignore: ['**/README.md']
  })
  const englishPages = await Promise.all(englishPaths.map(
    async opts => Page.init({
      ...opts,
      languageCode: languages.en.code
    })
  ))

  // load matching pages in other languages
  const localizedPaths = Object.values(languages)
    .filter(({ code }) => code !== 'en')
    .map(language => {
      const basePath = path.join(__dirname, '..', language.dir, 'content')
      return englishPages.map(page => ({
        basePath,
        relativePath: page.relativePath,
        languageCode: language.code
      }))
    })
    .flat()

  const localizedPages = await Promise.all(localizedPaths.map(
    async ({ basePath, relativePath, languageCode }) => Page.init({
      basePath,
      relativePath,
      languageCode
    })
  ))

  // Build out the list of prepared pages
  return englishPages
    .concat(localizedPages)
    .filter(Boolean)
}

function createMapFromArray (pageList) {
  // add keys to the object for each of the page's permalinks for fast lookup
  const pageMap =
    pageList.reduce(
      (pageMap, page) => {
        for (const permalink of page.permalinks) {
          pageMap[permalink.href] = page
        }
        return pageMap
      },
      {}
    )

  return pageMap
}

async function loadPageMap (pageList) {
  const pages = pageList || await loadPageList()
  return createMapFromArray(pages)
}

module.exports = {
  loadTree,
  // loadPages: loadPageListFromTree,
  loadPages: loadPageList,
  loadPageMap
}
