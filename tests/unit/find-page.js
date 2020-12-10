const path = require('path')
const Page = require('../../lib/page')
const loadRedirects = require('../../lib/redirects/precompile')
const findPage = require('../../lib/find-page')
const nonEnterpriseDefaultVersion = require('../../lib/non-enterprise-default-version')

describe('find page', () => {
  jest.setTimeout(1000 * 1000)

  test('falls back to the English page if it can\'t find a localized page', async () => {
    const page = await Page.init({
      relativePath: 'page-that-does-not-exist-in-translations-dir.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'en'
    })

    // add named keys
    const pageMap = {
      [`/en/${nonEnterpriseDefaultVersion}/${page.relativePath}`]: page
    }

    const localizedPage = findPage(page.relativePath, pageMap, {}, 'ja')
    expect(typeof localizedPage.title).toBe('string')
  })

  test('follows redirects', async () => {
    const page = await Page.init({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'en'
    })

    const pageList = [page]

    // add named keys
    const pageMap = {}
    for (const page of pageList) {
      pageMap[`/en/${nonEnterpriseDefaultVersion}/${page.relativePath.replace('.md', '')}`] = page
    }

    const redirects = await loadRedirects(pageList, pageMap)
    const redirectedPage = findPage('some-old-path', pageMap, redirects, 'en')
    expect(typeof redirectedPage.title).toBe('string')
  })
})
