import fs from 'fs'
import path from 'path'

import yaml from 'js-yaml'
import matter from 'gray-matter'
import { merge, get } from 'lodash-es'

import languages from '#src/languages/lib/languages.js'
import { correctTranslatedContentStrings } from '#src/languages/lib/correct-translation-content.js'

// If you run `export DEBUG_JIT_DATA_READS=true` in your terminal,
// next time it will mention every file it reads from disk.
const DEBUG_JIT_DATA_READS = Boolean(JSON.parse(process.env.DEBUG_JIT_DATA_READS || 'false'))

// This is a list of files that we should always immediately fall back to
// English for.
// Having this is safer than trying to wrangle the translations to NOT
// have them translated.
const ALWAYS_ENGLISH_YAML_FILES = new Set(['data/variables/product.yml'])
const ALWAYS_ENGLISH_MD_FILES = new Set([
  'data/reusables/ssh/fingerprints.md',
  'data/reusables/ssh/known_hosts.md',
])

// Returns all the things inside a directory
export const getDeepDataByLanguage = memoize((dottedPath, langCode, dir = null) => {
  if (!(langCode in languages))
    throw new Error(`langCode '${langCode}' not a recognized language code`)

  // The `dir` argument is only used for testing purposes.
  // For example, our unit tests that depend on using a fixtures
  // root.
  // If we don't allow those tests to override the `dir` argument,
  // it'll be stuck from the first time `languages.js` was imported.
  if (dir === null) {
    dir = languages[langCode].dir
  }
  return getDeepDataByDir(dottedPath, dir)
})

// Doesn't need to be memoized because it's used by getDataKeysByLanguage
// which is already memoized.
function getDeepDataByDir(dottedPath, dir) {
  const fullPath = ['data']
  const split = dottedPath.split(/\./g)
  fullPath.push(...split)

  const things = {}
  const relPath = fullPath.join(path.sep)
  for (const dirent of getDirents(dir, relPath)) {
    if (dirent.name === 'README.md') continue
    const key = dirent.isDirectory() ? dirent.name : dirent.name.replace(/\.yml$/, '') // e.g. '3-5'  or '0-rc2'
    if (dirent.isDirectory()) {
      things[key] = getDeepDataByDir(`${dottedPath}.${key}`, dir)
    } else if (dirent.name.endsWith('.yml')) {
      things[key] = getYamlContent(dir, path.join(relPath, dirent.name))
    } else if (dirent.name.endsWith('.md')) {
      things[key] = getMarkdownContent(dir, path.join(relPath, dirent.name))
    } else {
      throw new Error(`don't know how to read '${dirent.name}'`)
    }
  }
  return things
}

function getDirents(root, relPath) {
  const filePath = root ? path.join(root, relPath) : relPath
  return fs.readdirSync(filePath, { withFileTypes: true })
}

export const getUIDataMerged = memoize((langCode) => {
  const uiEnglish = getUIData('en')
  if (langCode === 'en') return uiEnglish
  // Got to combine. Start with the English and put the translation on top.
  // E.g.
  //    english = {food: "Food", drink: "Drink"}
  //    swedish = {food: "Mat"}
  //    =>
  //    combind = {food: "Mat", drink: "Drink"}
  const combined = {}
  merge(combined, uiEnglish)
  merge(combined, getUIData(langCode))
  return combined
})

// Doesn't need to be memoized because it's used by another function
// that is memoized.
const getUIData = (langCode) => {
  const fullPath = ['data', 'ui.yml']
  const { dir } = languages[langCode]
  return getYamlContent(dir, fullPath.join(path.sep))
}

export const getDataByLanguage = memoize((dottedPath, langCode) => {
  if (!(langCode in languages))
    throw new Error(`langCode '${langCode}' not a recognized language code`)
  const { dir } = languages[langCode]

  try {
    const value = getDataByDir(dottedPath, dir, languages.en.dir, langCode)

    // What could happens is that a new key has only been added to
    // the English data/ui.yml but hasn't been added to Japanese, but
    // there nevertheless exists a Japanese `data/ui.yml`.
    // Since getDataByDir() uses `get(dataObject, 'dott.ed.path')` it
    // will return `undefined` if it's not present.
    // If this happens, we can't rely on `err.code === 'ENOENT'` to
    // fall back the English one. So we just start over using the English data.
    if (value === undefined && langCode !== 'en') {
      return getDataByDir(dottedPath, languages.en.dir)
    }
    return value
  } catch (error) {
    if (error instanceof Error && error.mark && error.message) {
      // It's a yaml.load() generated error!
      // Remember, the file that we read might have been a .yml or a .md
      // file. If it was a .md file, with corrupt front-matter that too
      // would have caused a YAMLException
      if (langCode !== 'en') {
        if (DEBUG_JIT_DATA_READS) {
          console.warn(`Unable to parse Yaml in (${langCode}) '${dottedPath}': ${error.message}`)
        }
        // Give it one more chance, but use English this time
        return getDataByDir(dottedPath, languages.en.dir)
      }
      // Always throw English Yaml reading errors. Staff writers
      // need to know early and explicitly that they are corrupt.
      throw error
    }

    if (error.code === 'ENOENT') return undefined
    throw error
  }
})

function getDataByDir(dottedPath, dir, englishRoot, langCode) {
  const fullPath = ['data']

  // Using English here because it doesn't matter. We just want to
  // figure out how to turn `foo.version-3.4.deeper.key' into
  // `['foo', 'version-3.4', 'deeper', 'key']` here and we'll need
  // any directory to do that and English is always the most up-to-date.
  // We need the getSmartSplit() as long as there's a chance that a
  // directory or file inside data/ might contain a dot in the name,
  // however the exception is the file names in data/release-notes/**/*.yml
  // because it contains files that are just numbers like 3-7/0.yml and
  // that can cause problems inside getSmartSplit().
  const split = dottedPath.startsWith('release-notes')
    ? dottedPath.split('.')
    : getSmartSplit(dottedPath)

  // For early-access data stuff, they're referred to as...
  //
  //   {% data early-access.reusables.foo.bar %}
  //
  // When we "merge" in the early-access data, we put the whole directory
  // within the root `data/` so it exists, on disk, as
  //
  //   data/early-access/reusables/foo/bar.md
  //
  if (split[0] === 'early-access') {
    fullPath.push(split.shift())
  }
  const first = split[0]

  if (first === 'variables') {
    const key = split.pop()
    const basename = split.pop()
    fullPath.push(...split)
    fullPath.push(`${basename}.yml`)
    const allData = getYamlContent(dir, fullPath.join(path.sep), englishRoot)
    if (allData) {
      const value = allData[key]
      if (value) {
        return matter(value).content
      }
    } else {
      console.warn(`Unable to find variables Yaml file ${fullPath.join(path.sep)}`)
    }
    return
  }

  if (first === 'reusables') {
    const nakedname = split.pop()
    fullPath.push(...split)
    fullPath.push(`${nakedname}.md`)
    const markdown = getMarkdownContent(dir, fullPath.join(path.sep), englishRoot)
    let { content } = matter(markdown)
    if (dir !== englishRoot) {
      // If we're reading a translation, we need to replace the possible
      // corruptions. For example `[AUTOTITLE"을](/foo/bar)`.
      // To do this we'll need the English equivalent
      let englishContent = content
      try {
        englishContent = getMarkdownContent(englishRoot, fullPath.join(path.sep), englishRoot)
      } catch (error) {
        // In some real but rare cases a reusable doesn't exist in English.
        // At all.
        // This can happen when the translation is really out of date.
        // You might have an old `docs-internal.locale/content/**/*.md`
        // file that mentions `{% data reusables.foo.bar %}`. And it's
        // working fine, except none of that exists in English.
        // If this is the case, we still want to executed the
        // correctTranslatedContentStrings() function, but we can't
        // genuinely give it the English equivalent content, which it
        // sometimes uses to correct some Liquid tags. At least other
        // good corrections might happen.
        if (error.code !== 'ENOENT') {
          throw error
        }
      }
      content = correctTranslatedContentStrings(content, englishContent, {
        dottedPath,
        code: langCode,
      })
    }
    return content
  }

  // E.g. {% data ui.pages.foo.bar %}
  if (first === 'ui') {
    const basename = split.shift() // i.e. 'ui'
    fullPath.push(`${basename}.yml`)
    const allData = getYamlContent(dir, fullPath.join(path.sep), englishRoot)
    return get(allData, split.join('.'))
  }

  if (first === 'product-examples' || first === 'glossaries' || first === 'release-notes') {
    const basename = split.pop()
    fullPath.push(...split)
    fullPath.push(`${basename}.yml`)
    return getYamlContent(dir, fullPath.join(path.sep), englishRoot)
  }

  if (first === 'learning-tracks') {
    const key = split.pop()
    const basename = split.pop()
    fullPath.push(...split)
    fullPath.push(`${basename}.yml`)
    const allData = getYamlContent(dir, fullPath.join(path.sep), englishRoot)
    return allData[key]
  }

  throw new Error(`Can't find the key '${dottedPath}' in the scope.`)
}

function getSmartSplit(dottedPath) {
  const split = dottedPath.split('.')
  const bits = []
  for (let i = 0, len = split.length; i < len; i++) {
    const bit = split[i]
    if (i === len - 1) {
      bits.push(bit)
    } else {
      const next = split[i + 1]
      if (/\d$/.test(bit) && /^\d/.test(next)) {
        bits.push([bit, next].join('.'))
        i++ // jump ahead one position in the loop
      } else {
        bits.push(bit)
      }
    }
  }
  return bits
}

// The reason this is memoized, even though the parent caller function
// (`getDataByLanguage`) is also memoized is because we might read
// the same file for two different keys. E.g.
//
//    getDataByLanguage('variables.product.prodname_ghe_server', 'en')
//    getDataByLanguage('variables.product.company_short', 'en')
//
// ...will actually depend on reading `data/variables/product.yml`. Twice.
// Well, actually not twice because we cache the disk reading. So the outcome
// becomes this:
//
//    1. getDataByLanguage('variables.product.prodname_ghe_server', 'en')
//      -> cache MISS
//        1.1. read and parse data/variables/product.yml
//          -> cache MISS
//    2. getDataByLanguage('variables.product.company_short', 'en')
//      -> cache MISS
//        2.1. read and parse data/variables/product.yml
//          -> cache HIT    (Yay!)
//
const getYamlContent = memoize((root, relPath, englishRoot) => {
  // Certain Yaml files we know we always want the English one
  // no matter what the specified language is.
  // For example, we never want `data/variables/product.yml` translated
  // so we know to immediately fall back to the English one.
  if (ALWAYS_ENGLISH_YAML_FILES.has(relPath)) {
    // This forces it to read from English. Later, when it goes
    // into `getFileContent(...)` it will note that `root !== englishRoot`
    // so it won't try to fall back.
    root = englishRoot
  }
  const fileContent = getFileContent(root, relPath, englishRoot)
  return yaml.load(fileContent, { filename: relPath })
})

// The reason why this is memoized, is the same as for getYamlContent() above.
const getMarkdownContent = memoize((root, relPath, englishRoot) => {
  // Certain reusables we never want to be pulled from the translations.
  // For example, certain reusables don't contain any English prose. Just
  // facts like numbers or hardcoded key words.
  // If this is the case, forcibly always draw from the English files.
  if (ALWAYS_ENGLISH_MD_FILES.has(relPath)) {
    root = englishRoot
  }

  const fileContent = getFileContent(root, relPath, englishRoot)
  return matter(fileContent).content.trimEnd()
})

const getFileContent = (root, relPath, englishRoot) => {
  const filePath = root ? path.join(root, relPath) : relPath
  if (DEBUG_JIT_DATA_READS) console.log('READ', filePath)
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch (err) {
    // It might fail because that particular data entry doesn't yet
    // exist in a translation
    if (err.code === 'ENOENT') {
      // If looking it up as a file fails, give it one more chance if the
      // read was for a translation.
      if (root !== englishRoot) {
        // We can try again but this time using the English files
        return getFileContent(englishRoot, relPath, englishRoot)
      }
    }
    throw err
  }
}

function memoize(func) {
  const cache = new Map()
  return (...args) => {
    if (process.env.NODE_ENV === 'development') {
      // It is very possible that certain files, when caching is disabled,
      // are read multiple times in short succession. E.g. `product.yml`.
      // So how expensive is it to read these files excessively?
      // To answer that, we benchmarked it by sampling 10 files from the
      // most common files that are used from `data/`. In fact, we ran 100
      // runs of 10 *different* files. About 80% of them were `.yml` files.
      // As a median, it takes **0.5ms to read 10 files from disk**
      // all in a sync manner.
      // Since most files coming through here is `.yml` files (e.g.
      // product.yml and ui.yml) if you also do the `yaml.load()` of the
      // read content, that number becomes **2.1ms to read and parse 10 files**.
      // So in conclusion, not a lot of time.
      return func(...args)
    }

    const key = args.join(':')
    if (!cache.has(key)) {
      cache.set(key, func(...args))
    }
    const value = cache.get(key)
    // If what was stored in the cache is a mutable, this time, return
    // a shallow copy.
    // Otherwise, what *might* happen is this:
    //
    //   > const getNames = memoize(() => ["peter", "tucker"])
    //   > var names = getNames()
    //   > names.push("ashley")
    //   > var names2 = getNames()
    //   > names2.push("charlotte")
    //   > console.log(names2)
    //
    //   ["peter", "tucker", "ashley", "charlotte"]
    //
    // Note that these are shallow copies only.
    if (Array.isArray(value)) return [...value]
    if (typeof value === 'object') return { ...value }
    return value
  }
}
