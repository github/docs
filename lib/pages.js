const path = require('path')
const walk = require('walk-sync').entries
const Page = require('./page')
const languages = require('./languages')
const fs = require('fs')

async function loadPageList () {
  const pageList = []

  // load english pages
  const englishPath = path.join(__dirname, '..', languages.en.dir, 'content')
  const englishPages = walk(englishPath)
    .filter(({ relativePath }) => {
      return relativePath.endsWith('.md') &&
      !relativePath.includes('README')
    })
    .map(fileData => new Page({ ...fileData, languageCode: languages.en.code }))

  pageList.push(...englishPages)

  // load matching pages in other languages
  for (const page of englishPages) {
    for (const language of Object.values(languages)) {
      if (language.code === 'en') continue

      const basePath = path.join(__dirname, '..', language.dir, 'content')
      const localizedPath = path.join(basePath, page.relativePath)
      try {
        fs.statSync(localizedPath)
      } catch (_) {
        continue
      }

      pageList.push(new Page({
        relativePath: page.relativePath,
        basePath,
        languageCode: language.code
      }))
    }
  }

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
