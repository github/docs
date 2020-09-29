const path = require('path')
const loadPages = require('../../lib/pages')
const languageCodes = Object.keys(require('../../lib/languages'))
const { liquid } = require('../../lib/render-content')
const patterns = require('../../lib/patterns')
const GithubSlugger = require('github-slugger')
const slugger = new GithubSlugger()
const Entities = require('html-entities').XmlEntities
const entities = new Entities()
const { chain, difference } = require('lodash')

describe('pages module', () => {
  let pages
  beforeAll(async (done) => {
    pages = await loadPages()
    done()
  })

  test('yields a non-empty array of Page objects', async () => {
    expect(Array.isArray(pages)).toBe(true)
    expect(pages.length).toBeGreaterThan(100)
  })

  test('every page has a `languageCode`', async () => {
    expect(pages.every(page => languageCodes.includes(page.languageCode))).toBe(true)
  })

  test('every page has a non-empty `permalinks` array', async () => {
    const brokenPages = pages.filter(page => !Array.isArray(page.permalinks) || page.permalinks.length === 0)
    const expectation = JSON.stringify(brokenPages.map(page => page.fullPath), null, 2)
    expect(brokenPages.length, expectation).toBe(0)
  })

  // we can't put this in tests/redirects because duplicate routes have already been
  // overwritten during context.pages.redirects object assignment and can't be searched for
  test('redirect_from routes are unique across English pages', () => {
    const sourceRedirectFrom = chain(pages)
      .filter(['languageCode', 'en'])
      .filter('redirect_from')
      .map('redirect_from')
      .flatten()
      .value()
    const duplicates = sourceRedirectFrom.reduce((acc, el, i, arr) => {
      if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el)
      return acc
    }, [])

    const message = `Found ${duplicates.length} duplicate redirect_from ${duplicates.length === 1 ? 'path' : 'paths'}.\n
 ${duplicates.join('\n')}`
    expect(duplicates.length, message).toBe(0)
  })

  test('every English page has a filename that matches its slugified title', async () => {
    const nonMatches = pages
      .filter(page => {
        slugger.reset()
        return page.languageCode === 'en' && // only check English
        !page.relativePath.includes('index.md') && // ignore TOCs
        !page.allowTitleToDifferFromFilename && // ignore docs with override
        slugger.slug(entities.decode(page.title)) !== path.basename(page.relativePath, '.md')
      })
      // make the output easier to read
      .map(page => {
        return JSON.stringify({
          file: path.basename(page.relativePath),
          title: page.title,
          path: page.fullPath
        }, null, 2)
      })

    const message = `
Found ${nonMatches.length} ${nonMatches.length === 1 ? 'file' : 'files'} that do not match their slugified titles.\n
${nonMatches.join('\n')}\n
To fix, run script/reconcile-filenames-with-ids.js\n\n`

    expect(nonMatches.length, message).toBe(0)
  })

  test('every page has valid frontmatter', async () => {
    const frontmatterErrors = chain(pages)
      // .filter(page => page.languageCode === 'en')
      .map(page => page.frontmatterErrors)
      .flatten()
      .value()

    const failureMessage = JSON.stringify(frontmatterErrors, null, 2) +
      '\n\n' +
      chain(frontmatterErrors).map('filepath').join('\n').value()

    expect(frontmatterErrors.length, failureMessage).toBe(0)
  })

  test('every page has valid Liquid templating', async () => {
    const liquidErrors = []

    for (const key in pages) {
      const page = pages[key]
      const markdown = page.raw
      if (!patterns.hasLiquid.test(markdown)) continue
      try {
        await liquid.parse(markdown)
      } catch (error) {
        liquidErrors.push({
          filename: page.fullPath,
          error: error.message
        })
      }
    }

    const failureMessage = JSON.stringify(liquidErrors, null, 2)
    expect(liquidErrors.length, failureMessage).toBe(0)
  })

  test('every non-English page has a matching English page', async () => {
    const englishPaths = chain(pages)
      .filter(page => page.languageCode === 'en')
      .map(page => page.relativePath)
      .value()
    const nonEnglishPaths = chain(pages)
      .filter(page => page.languageCode !== 'en')
      .map(page => page.relativePath)
      .uniq()
      .value()

    const diff = difference(nonEnglishPaths, englishPaths)
    const failureMessage = `Unmatched non-English pages:\n - ${diff.join('\n - ')}`
    expect(diff.length, failureMessage).toBe(0)
  })
})
