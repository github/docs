import { jest } from '@jest/globals'

import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import { getDOM } from '../helpers/e2etest.js'

describe('page titles', () => {
  jest.setTimeout(300 * 1000)

  test('English homepage', async () => {
    const $ = await getDOM('/en')
    expect($('title').text()).toBe('GitHub Docs')
  })

  test('dotcom English article', async () => {
    const $ = await getDOM('/en/articles/authorizing-oauth-apps')
    expect($('title').text()).toBe('Authorizing OAuth Apps - GitHub Docs')
  })

  test('enterprise English article', async () => {
    const $ = await getDOM(
      `/en/enterprise/${enterpriseServerReleases.latest}/user/github/authenticating-to-github/authorizing-oauth-apps`
    )
    expect($('title').text()).toBe(
      `Authorizing OAuth Apps - GitHub Enterprise Server ${enterpriseServerReleases.latest} Docs`
    )
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
    expect($('title').text()).toBe(
      `GitHub Enterprise Server Help Documentation - GitHub Enterprise Server ${enterpriseServerReleases.latest} Docs`
    )

    $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}`)
    expect($('title').text()).toBe(
      `GitHub Enterprise Server Help Documentation - GitHub Enterprise Server ${enterpriseServerReleases.oldestSupported} Docs`
    )

    $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}`)
    expect($('title').text()).toBe(
      `GitHub Enterprise Server Help Documentation - GitHub Enterprise Server ${enterpriseServerReleases.latest} Docs`
    )
  })
})
