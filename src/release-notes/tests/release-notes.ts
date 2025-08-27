import { afterAll, beforeAll, describe, expect, test, vi } from 'vitest'
import nock from 'nock'

import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import { get, getDOM } from '@/tests/helpers/e2etest'
import Page from '@/frame/lib/page'

// The English content page's `versions:` frontmatter is the source
// of (convenient) truth about which versions of this page is available.
const page = await Page.init({
  basePath: 'content',
  relativePath: 'admin/release-notes.md',
  languageCode: 'en',
})
if (!page) throw new Error('Page not found')

describe('server', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('basic redirecting', async () => {
    const res = await get('/admin/release-notes')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(
      // Note that English is the default fallback for redirects
      `/en/enterprise-server@${enterpriseServerReleases.latest}/admin/release-notes`,
    )
  })
  test('basic rendering', async () => {
    const res = await get('/admin/release-notes', { followAllRedirects: true })
    expect(res.statusCode).toBe(200)
  })

  const applicableVersions = page.applicableVersions

  test.each(applicableVersions)('version %s that has release-notes', async (version) => {
    const url = `/en/${version}/admin/release-notes`
    const res = await get(url)
    expect(res.statusCode).toBe(200)
  })
})

describe('archived release notes', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  beforeAll(async () => {
    // The first page load takes a long time so let's get it out of the way in
    // advance to call out that problem specifically rather than misleadingly
    // attributing it to the first test
    await get('/')

    nock('https://github.github.com')
      .get('/docs-ghes-2.19/en/enterprise-server@2.19/admin/release-notes')
      .reply(404)
    nock('https://github.github.com').get('/docs-ghes-2.19/redirects.json').reply(200, {
      emp: 'ty',
    })
  })

  afterAll(() => nock.cleanAll())

  test('redirects to the release notes on enterprise.github.com if none are present for this version here', async () => {
    const res = await get('/en/enterprise-server@2.19/admin/release-notes')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('https://enterprise.github.com/releases/2.19.0/notes')
  })

  test("renders the release-notes layout if this version's release notes are in this repo", async () => {
    const oldestSupportedGhes = enterpriseServerReleases.oldestSupported
    const res = await get(`/en/enterprise-server@${oldestSupportedGhes}/admin/release-notes`)
    expect(res.statusCode).toBe(200)
    const $ = await getDOM(`/en/enterprise-server@${oldestSupportedGhes}/admin/release-notes`)
    expect($('h1').first().text()).toBe(`Enterprise Server ${oldestSupportedGhes} release notes`)
    expect(
      $('main h2').first().text().trim().startsWith(`Enterprise Server ${oldestSupportedGhes}`),
    ).toBe(true)
  })

  test('404 if a bogus version is requested', async () => {
    const res = await get('/en/enterprise-server@12345/admin/release-notes')
    expect(res.statusCode).toBe(404)
  })

  test('404 if the pathname only ends with /release-notes', async () => {
    const res = await get(`/en/enterprise-server@latest/ANY/release-notes`, {
      followAllRedirects: true,
    })
    expect(res.statusCode).toBe(404)
  })

  test('404 if the pathname only ends with /admin', async () => {
    const res = await get(`/en/enterprise-server@latest/ANY/admin`, {
      followAllRedirects: true,
    })
    expect(res.statusCode).toBe(404)
  })
})
