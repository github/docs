const path = require('path')
const Page = require('../../lib/page')
const loadRedirects = require('../../lib/redirects/precompile')
const findPage = require('../../lib/find-page')
const nonEnterpriseDefaultVersion = require('../../lib/non-enterprise-default-version')

describe('find page', () => {
  jest.setTimeout(1000 * 1000)

  test('falls back to the English page if it can\'t find a localized page', async () => {
    const page = new Page({
      relativePath: 'page-that-does-not-exist-in-translations-dir.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'en'
    })
    const pages = [page]

    // add named keys
    for (const page of pages) {
      pages[`/en/${nonEnterpriseDefaultVersion}/${page.relativePath}`] = page
    }

    const localizedPage = findPage(page.relativePath, pages, {}, 'ja')
    expect(typeof localizedPage.title).toBe('string')
  })

  test('follows redirects', async () => {
    const page = new Page({
      relativePath: 'page-with-redirects.md',
      basePath: path.join(__dirname, '../fixtures'),
      languageCode: 'en'
    })
    const pages = [page]

    // add named keys
    for (const page of pages) {
      pages[`/en/${nonEnterpriseDefaultVersion}/${page.relativePath.replace('.md', '')}`] = page
    }

    const redirects = await loadRedirects(pages)
    const redirectedPage = findPage('some-old-path', pages, redirects, 'en')
    expect(typeof redirectedPage.title).toBe('string')
  })
})
