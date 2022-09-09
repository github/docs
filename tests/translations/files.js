import languages from '../../lib/languages.js'
import { omit } from 'lodash-es'
import walk from 'walk-sync'
import { execSync } from 'child_process'
import { get } from '../helpers/e2etest.js'
import { jest } from '@jest/globals'

function difference (A, B) {
  const A2 = new Set(A)
  B.forEach(b => A2.delete(b))
  return A2
}

const englishPaths = new Set(walk('content', {
  directories: false,
  ignore: ['**/README.md', 'search', 'early-access'],
}))

const nonEnglish = Object.entries(omit(languages, 'en'))

const langWalksTable = nonEnglish.map(([code, lang]) => [
  code,
  lang,
  new Set(walk(`${lang.dir}/content`, {
    directories: false,
    ignore: ['**/README.md', 'search'],
  }))
])

describe('files', () => {
  jest.setTimeout(60 * 1000)

  test.each(Object.entries(languages))('%s matches language schema', async (_, lang) => {
    expect(lang.name).toMatch(/\w+/)
    if (lang.nativeName) expect(lang.nativeName).toMatch(/.+/)
    expect(lang.code).toMatch(/\w{2}/)
    if (lang.code !== 'en') expect(lang.dir).toMatch(/.+/)
    expect(lang.hreflang).toMatch(/\w{2}/)
    if (lang.redirectPatterns) expect(lang.redirectPatterns).toBeInstanceOf(Array)
  })

  // crowdin upload sources command fails if there are empty source files
  // please refer to crowdin-support #117 for more details
  it('should not contain empty files', () => {
    const command = "find content data -type f -empty"
    const emptyFiles = execSync(command).toString().split("\n")
    const disallowedEmptyFiles = emptyFiles.filter(file => file.match(/\.(yml|md)$/))

    expect(disallowedEmptyFiles).toEqual([])
  })

  test.each(langWalksTable)("falls back to the English page if it can't find a %s page", async (code, lang, langPaths) => {
    const paths = [...difference(englishPaths, langPaths)]
      .map(path => path.replace('/index.md', ''))
      .map(path => path.replace('.md', ''))
    for (const path of paths) {
      const res = await get(`/${code}/${path}`)
      expect(res.statusCode, path).toBeGreaterThanOrEqual(200)
      expect(res.statusCode, path).toBeLessThanOrEqual(399)
    }
  })

  test.each(langWalksTable)("only loads a %s page if there's an English page", async (code, lang, langPaths) => {
    const paths = [...difference(langPaths, englishPaths)]
      .map(path => path.replace('/index.md', ''))
      .map(path => path.replace('.md', ''))
    for (const path of paths) {
      const res = await get(`/${code}/${path}`)
      expect(res.statusCode, path).toBeGreaterThanOrEqual(300)
      expect(res.statusCode, path).toBeLessThanOrEqual(499)
    }
  })
})
