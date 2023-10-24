import { jest } from '@jest/globals'
import path from 'path'
import { loadPages } from '../../lib/page-data.js'
import libLanguages from '#src/languages/lib/languages.js'
import { liquid } from '#src/content-render/index.js'
import patterns from '../../lib/patterns.js'
import GithubSlugger from 'github-slugger'
import { decode } from 'html-entities'
import { chain, pick } from 'lodash-es'
import removeFPTFromPath from '#src/versions/lib/remove-fpt-from-path.js'
const languageCodes = Object.keys(libLanguages)
const slugger = new GithubSlugger()

describe('pages module', () => {
  jest.setTimeout(60 * 1000)

  let pages

  beforeAll(async () => {
    pages = await loadPages()
  })

  describe('loadPages', () => {
    test('yields a non-empty array of Page objects', async () => {
      expect(Array.isArray(pages)).toBe(true)
      expect(pages.length).toBeGreaterThan(100)
    })

    test('every page has a `languageCode`', async () => {
      expect(pages.every((page) => languageCodes.includes(page.languageCode))).toBe(true)
    })

    test('every page has a non-empty `permalinks` array', async () => {
      const brokenPages = pages.filter(
        (page) => !Array.isArray(page.permalinks) || page.permalinks.length === 0,
      )

      const expectation = JSON.stringify(
        brokenPages.map((page) => page.fullPath),
        null,
        2,
      )
      expect(brokenPages.length, expectation).toBe(0)
    })

    test('redirect_from routes are unique across English pages', () => {
      const englishPages = chain(pages)
        .filter(['languageCode', 'en'])
        .filter('redirect_from')
        .map((pages) => pick(pages, ['redirect_from', 'applicableVersions']))
        .value()

      const versionedRedirects = []

      englishPages.forEach((page) => {
        page.redirect_from.forEach((redirect) => {
          page.applicableVersions.forEach((version) => {
            versionedRedirects.push(removeFPTFromPath(path.posix.join('/', version, redirect)))
          })
        })
      })

      const duplicates = versionedRedirects.reduce((acc, el, i, arr) => {
        if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el)
        return acc
      }, [])

      const message = `Found ${duplicates.length} duplicate redirect_from ${
        duplicates.length === 1 ? 'path' : 'paths'
      }.
      Ensure that you don't define the same path more than once in the redirect_from property in a single file and across all English files.
      You may also receive this error if you have defined the same children property more than once.\n
  ${duplicates.join('\n')}`
      expect(duplicates.length, message).toBe(0)
    })

    test('every English page has a filename that matches its slugified title', async () => {
      const nonMatches = pages
        .filter((page) => {
          slugger.reset()
          return (
            page.languageCode === 'en' && // only check English
            !page.relativePath.includes('index.md') && // ignore TOCs
            !page.allowTitleToDifferFromFilename && // ignore docs with override
            slugger.slug(decode(page.title)) !== path.basename(page.relativePath, '.md')
          )
        })
        // make the output easier to read
        .map((page) => {
          return JSON.stringify(
            {
              file: path.basename(page.relativePath),
              title: page.title,
              path: page.fullPath,
            },
            null,
            2,
          )
        })

      const message = `
  Found ${nonMatches.length} ${
    nonMatches.length === 1 ? 'file' : 'files'
  } that do not match their slugified titles.\n
  ${nonMatches.join('\n')}\n
  To fix, run script/reconcile-filenames-with-ids.js\n\n`

      expect(nonMatches.length, message).toBe(0)
    })

    test('every page has valid frontmatter', async () => {
      const frontmatterErrors = chain(pages)
        // .filter(page => page.languageCode === 'en')
        .map((page) => page.frontmatterErrors)
        .filter(Boolean)
        .flatten()
        .value()

      const failureMessage =
        JSON.stringify(frontmatterErrors, null, 2) +
        '\n\n' +
        chain(frontmatterErrors).map('filepath').join('\n').value()

      expect(frontmatterErrors.length, failureMessage).toBe(0)
    })

    test('every page has valid Liquid templating', async () => {
      const liquidErrors = []

      for (const page of pages) {
        const markdown = page.raw
        if (!patterns.hasLiquid.test(markdown)) continue
        try {
          await liquid.parse(markdown)
        } catch (error) {
          liquidErrors.push({
            filename: page.fullPath,
            error: error.message,
          })
        }
      }

      const failureMessage = JSON.stringify(liquidErrors, null, 2)
      expect(liquidErrors.length, failureMessage).toBe(0)
    })
  })
})
