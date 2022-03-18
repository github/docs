import fs from 'fs'
import os from 'os'
import path from 'path'
import flat from 'flat'
import { get, set } from 'lodash-es'
import languages from './languages.js'
import dataDirectory from './data-directory.js'
import encodeBracketedParentheses from './encode-bracketed-parentheses.js'

const TEMP_DIRECTORY = process.env.RUNNER_TEMP || os.tmpdir()

function diskMemoize(prefix, fn) {
  const useCache = process.env.NODE_ENV !== 'development'
  return (dir) => {
    const cacheFileName = `${prefix}.${dir.replace(/[^\w]+/g, '-').toLowerCase() || 'en'}.json`
    if (useCache) {
      try {
        return JSON.parse(fs.readFileSync(cacheFileName, 'utf-8'))
      } catch (err) {
        if (!(err.code === 'ENOENT' || err instanceof SyntaxError)) throw err
      }
    }

    const result = fn(dir)
    if (useCache) {
      fs.writeFileSync(cacheFileName, JSON.stringify(result), 'utf-8')
      console.log(`Disk-cache miss on ${cacheFileName}`, new Date())
    }
    return result
  }
}

const loadSiteDataFromDir = diskMemoize(path.join(TEMP_DIRECTORY, 'docs-site-data'), (dir) => {
  return {
    site: {
      data: dataDirectory(path.join(dir, 'data'), {
        preprocess: (dataString) => encodeBracketedParentheses(dataString.trimEnd()),
        ignorePatterns: [/README\.md$/],
      }),
    },
  }
})

export default function loadSiteData() {
  // load English site data
  const siteData = {
    en: loadSiteDataFromDir(languages.en.dir),
  }

  // load and add other language data to siteData where keys match english keys,
  // filling holes with english site data
  const englishKeys = Object.keys(flat(siteData.en))
  for (const language of Object.values(languages)) {
    if (language.code === 'en') continue
    const data = loadSiteDataFromDir(language.dir)
    for (const key of englishKeys) {
      set(siteData, `${language.code}.${key}`, get(data, key) || get(siteData.en, key))
    }
  }

  for (const language of Object.values(languages)) {
    // Add the English `slug` to each item, to link a consistent anchor
    siteData[language.code].site.data.glossaries.external.forEach((item, i) => {
      item.slug = siteData.en.site.data.glossaries.external[i].term
    })

    // Sort glossary by language-specific function
    if (language.code !== 'en') {
      siteData[language.code].site.data.glossaries.external.sort((a, b) =>
        a.term.localeCompare(b.term, language.code)
      )
    }
  }

  return siteData
}
