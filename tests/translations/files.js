import languages from '../../lib/languages.js'
import { execSync } from 'child_process'
import { jest } from '@jest/globals'

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
    const command = 'find content data -type f -empty'
    const emptyFiles = execSync(command).toString().split('\n')
    const disallowedEmptyFiles = emptyFiles.filter((file) => file.match(/\.(yml|md)$/))

    expect(disallowedEmptyFiles).toEqual([])
  })
})
