const path = require('path')
const walk = require('walk-sync').entries
const Page = require('./page')
const languages = require('./languages')
const fs = require('fs')

module.exports = async function () {
  const pages = []

  // load english pages
  const englishPath = path.join(__dirname, '..', languages.en.dir, 'content')
  const englishPages = walk(englishPath)
    .filter(({ relativePath }) => {
      return relativePath.endsWith('.md') &&
      !relativePath.includes('README')
    })
    .map(fileData => new Page({ ...fileData, languageCode: languages.en.code }))
  pages.push(...englishPages)

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
      pages.push(new Page({
        relativePath: page.relativePath,
        basePath,
        languageCode: language.code
      }))
    }
  }

  // add named keys to the array for fast object-like reference
  for (const page of pages) {
    page.permalinks.forEach(permalink => {
      pages[permalink.href] = page
    })
  }

  return Promise.resolve(pages)
}
