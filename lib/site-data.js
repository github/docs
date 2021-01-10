const path = require('path')
const flat = require('flat')
const { get, set } = require('lodash')
const languages = require('./languages')
const dataDirectory = require('./data-directory')
const encodeBracketedParentheses = require('./encode-bracketed-parentheses')

const loadSiteDataFromDir = dir => ({
  site: {
    data: dataDirectory(path.join(dir, 'data'), {
      preprocess: dataString =>
        encodeBracketedParentheses(dataString.trimEnd()),
      ignorePatterns: [/README\.md$/]
    })
  }
})

module.exports = function loadSiteData () {
  // load english site data
  const siteData = {
    en: loadSiteDataFromDir(languages.en.dir)
  }

  // load and add other language data to siteData where keys match english keys,
  // filling holes with english site data
  const englishKeys = Object.keys(flat(siteData.en))
  for (const language of Object.values(languages)) {
    if (language.code === 'en') continue
    const data = loadSiteDataFromDir(language.dir)
    for (const key of englishKeys) {
      set(
        siteData,
        `${language.code}.${key}`,
        get(data, key) || get(siteData.en, key)
      )
    }
  }

  // Sort glossary by language-specific function
  for (const language of Object.values(languages)) {
    if (language.code === 'en') continue
    siteData[language.code].site.data.glossaries.external
      .sort(
        (a, b) => a.term.localeCompare(b.term, language.code)
      )
  }

  return siteData
}
