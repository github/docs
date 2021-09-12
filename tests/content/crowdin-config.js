import CrowdinConfig from '../helpers/crowdin-config.js'
import { loadPages } from '../../lib/page-data.js'
import { isExperimental } from '../helpers/is-experimental.js'
import { jest } from '@jest/globals'

const config = CrowdinConfig.read()
const ignoredPagePaths = config.files[0].ignore
const ignoredDataPaths = config.files[2].ignore

describe('crowdin.yml config file', () => {
  jest.setTimeout(60 * 1000)

  let pages
  beforeAll(async () => {
    pages = await loadPages()
  })

  test('has expected file structure', async () => {
    expect(config.files.length).toBe(3)
    expect(config.files[0].source).toBe('/content/**/*.md')
    expect(config.files[0].ignore).toContain('/content/README.md')
  })

  test('ignores all Early Access paths', async () => {
    expect(ignoredPagePaths).toContain('/content/early-access')
    expect(ignoredDataPaths).toContain('/data/early-access')
  })

  test('ignores all hidden pages', async () => {
    const hiddenPages = pages
      .filter(
        (page) => page.hidden && page.languageCode === 'en' && !isExperimental(page.relativePath)
      )
      .map((page) => `/content/${page.relativePath}`)
    const overlooked = hiddenPages.filter((page) => !isIgnored(page, ignoredPagePaths))
    const message = `Found some hidden pages that are not yet excluded from localization.
      Please copy and paste the lines below into the \`ignore\` section of /crowdin.yml: \n\n"${overlooked.join(
        '",\n"'
      )}"`

    // This may not be true anymore given the separation of Early Access docs
    // expect(hiddenPages.length).toBeGreaterThan(0)
    expect(ignoredPagePaths.length).toBeGreaterThan(0)
    expect(overlooked, message).toHaveLength(0)
  })
})

// file is ignored if its exact filename in the list,
// or if it's within an ignored directory
function isIgnored(filename, ignoredPagePaths) {
  return ignoredPagePaths.some((ignoredPath) => {
    const isDirectory = !ignoredPath.endsWith('.md')
    return ignoredPath === filename || (isDirectory && filename.startsWith(ignoredPath))
  })
}
