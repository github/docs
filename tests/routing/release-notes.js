const { get } = require('../helpers/supertest')

describe('release notes', () => {
  jest.setTimeout(60 * 1000)

  beforeAll(async () => {
    // The first page load takes a long time so let's get it out of the way in
    // advance to call out that problem specifically rather than misleadingly
    // attributing it to the first test
    await get('/')
  })

  it('redirects to the release notes on enterprise.github.com if none are present for this version here', async () => {
    const res = await get('/en/enterprise-server@2.19/admin/release-notes')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('https://enterprise.github.com/releases/2.19.0/notes')
  })

  it('renders the release-notes layout if this version\'s release notes are in this repo', async () => {
    const res = await get('/en/enterprise-server@2.22/admin/release-notes')
    expect(res.statusCode).toBe(200)
  })

  it('renders the release-notes layout for GitHub AE', async () => {
    const res = await get('/en/github-ae@latest/admin/release-notes')
    expect(res.statusCode).toBe(200)
  })
})
