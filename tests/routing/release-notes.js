import { jest } from '@jest/globals'
import nock from 'nock'

import { get, getDOM } from '../helpers/e2etest.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'

jest.useFakeTimers({ legacyFakeTimers: true })

describe('release notes', () => {
  jest.setTimeout(60 * 1000)

  beforeAll(async () => {
    // The first page load takes a long time so let's get it out of the way in
    // advance to call out that problem specifically rather than misleadingly
    // attributing it to the first test
    await get('/')

    nock('https://github.github.com')
      .get(
        '/help-docs-archived-enterprise-versions/2.19/en/enterprise-server@2.19/admin/release-notes'
      )
      .reply(404)
    nock('https://github.github.com')
      .get('/help-docs-archived-enterprise-versions/2.19/redirects.json')
      .reply(200, {
        emp: 'ty',
      })
  })

  afterAll(() => nock.cleanAll())

  it('redirects to the release notes on enterprise.github.com if none are present for this version here', async () => {
    const res = await get('/en/enterprise-server@2.19/admin/release-notes')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('https://enterprise.github.com/releases/2.19.0/notes')
  })

  it("renders the release-notes layout if this version's release notes are in this repo", async () => {
    const oldestSupportedGhes = enterpriseServerReleases.oldestSupported
    const res = await get(`/en/enterprise-server@${oldestSupportedGhes}/admin/release-notes`)
    expect(res.statusCode).toBe(200)
    const $ = await getDOM(`/en/enterprise-server@${oldestSupportedGhes}/admin/release-notes`)
    expect($('h1').text()).toBe(`Enterprise Server ${oldestSupportedGhes} release notes`)
    expect(
      $('h2').first().text().trim().startsWith(`Enterprise Server ${oldestSupportedGhes}`)
    ).toBe(true)
  })

  it('renders the release-notes layout for GitHub AE', async () => {
    const res = await get('/en/github-ae@latest/admin/release-notes')
    expect(res.statusCode).toBe(200)
    const $ = await getDOM('/en/github-ae@latest/admin/release-notes')
    expect($('h1').text()).toBe('GitHub AE release notes')

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const releaseNotesH2 = $('h2').first().text().trim()
    const monthMatch = monthNames.some((month) => {
      return releaseNotesH2.startsWith(month)
    })

    expect(monthMatch).toBe(true)
  })

  it('sends a 404 if a bogus version is requested', async () => {
    const res = await get('/en/enterprise-server@12345/admin/release-notes')
    expect(res.statusCode).toBe(404)
  })
})
