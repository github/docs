const enterpriseServerReleases = require('../../lib/enterprise-server-releases')
const { getDOM } = require('../helpers')

describe('page titles', () => {
  jest.setTimeout(300 * 1000)

  test('English homepage', async () => {
    const $ = await getDOM('/en')
    expect($('title').text()).toBe('GitHub Documentation')
  })

  test('dotcom English article', async () => {
    const $ = await getDOM('/en/articles/authorizing-oauth-apps')
    expect($('title').text()).toBe('Authorizing OAuth Apps - GitHub Docs')
  })

  test('enterprise English article', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/user/github/authenticating-to-github/authorizing-oauth-apps`)
    expect($('title').text()).toBe('Authorizing OAuth Apps - GitHub Docs')
  })

  test('dotcom English map topic page', async () => {
    const $ = await getDOM('/en/articles/managing-user-account-settings')
    expect($('title').text()).toBe('Managing user account settings - GitHub Docs')
  })

  test('dotcom English category page', async () => {
    const $ = await getDOM('/en/categories/managing-large-files')
    expect($('title').text()).toBe('Managing large files - GitHub Docs')
  })

  test('dynamically parses liquid in page titles (even on subsequent requests)', async () => {
    let $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}`)
    expect($('title').text()).toBe('GitHub Enterprise Server Help Documentation - GitHub Docs')

    $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}`)
    expect($('title').text()).toBe('GitHub Enterprise Server Help Documentation - GitHub Docs')

    $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}`)
    expect($('title').text()).toBe('GitHub Enterprise Server Help Documentation - GitHub Docs')
  })

  // TODO enable this once translated content has synced with the versioning changes
  // Note the expected translations may need to be updated, since the English title changed
  // from `GitHub.com Help Documentation` to `GitHub Documentation`
  test.skip('displays only the site name on localized homepages', async () => {
    expect((await getDOM('/cn'))('title').text()).toBe('GitHub 帮助文档')
    expect((await getDOM('/ja'))('title').text()).toBe('GitHub ヘルプドキュメント')
  })
})
