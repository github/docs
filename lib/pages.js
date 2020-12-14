const path = require('path')
const walk = require('walk-sync').entries
const Page = require('./page')
const languages = require('./languages')
const { mapLimit } = require('async')

const FILE_READ_LIMIT = 100

async function loadPageList () {
  const pageList = []

  // load english pages
  const englishPath = path.join(__dirname, '..', languages.en.dir, 'content')
  const englishPaths = walk(englishPath, {
    globs: ['**/*.md'],
    ignore: ['**/README.md']
  })
  const englishPages = await mapLimit(
    englishPaths,
    FILE_READ_LIMIT,
    async fileData => await Page.init({ ...fileData, languageCode: languages.en.code })
  )
  pageList.push(...englishPages)

  // load matching pages in other languages
  const localizedPaths = Object.values(languages)
    .filter(({ code }) => code !== 'en')
    .map(language => {
      const basePath = path.join(__dirname, '..', language.dir, 'content')
      return englishPages.map(page => ({
        basePath,
        relativePath: page.relativePath,
        localizedPath: path.join(basePath, page.relativePath),
        languageCode: language.code
      }))
    })
    .flat()
  const localizedPages = await mapLimit(
    localizedPaths,
    FILE_READ_LIMIT,
    async ({ basePath, relativePath, languageCode }) =>
      await Page.init({ basePath, relativePath, languageCode })
  )
  pageList.push(...localizedPages.filter(Boolean))

  return pageList
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
  loadPages: loadPageList,
  loadPageMap
}
