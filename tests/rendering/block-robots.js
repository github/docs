import { blockIndex } from '../../middleware/block-robots.js'
import languages from '../../lib/languages.js'
import { productMap } from '../../lib/all-products.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'

function allowIndex(path) {
  return !blockIndex(path)
}

describe('block robots', () => {
  it('allows crawling of the homepage and English content', async () => {
    expect(allowIndex('/')).toBe(true)
    expect(allowIndex('/en')).toBe(true)
    expect(allowIndex('/en/articles/verifying-your-email-address')).toBe(true)
  })

  it('allows crawling of generally available localized content', async () => {
    Object.values(languages)
      .filter((language) => !language.wip)
      .forEach((language) => {
        expect(allowIndex(`/${language.code}`)).toBe(true)
        expect(allowIndex(`/${language.code}/articles/verifying-your-email-address`)).toBe(true)
      })
  })

  it('disallows crawling of WIP localized content', async () => {
    Object.values(languages)
      .filter((language) => language.wip)
      .forEach((language) => {
        expect(allowIndex(`/${language.code}`)).toBe(false)
        expect(allowIndex(`/${language.code}/articles/verifying-your-email-address`)).toBe(false)
      })
  })

  it('disallows crawling of WIP products', async () => {
    const wipProductIds = Object.values(productMap)
      .filter((product) => product.wip)
      .map((product) => product.id)

    wipProductIds.forEach((id) => {
      const { href } = productMap[id]
      const blockedPaths = [
        // English
        `/en${href}`,
        `/en${href}/overview`,
        `/en${href}/overview/intro`,
        `/en/enterprise/${enterpriseServerReleases.latest}/user${href}`,
        `/en/enterprise/${enterpriseServerReleases.oldestSupported}/user${href}`,

        // Japanese
        `/ja${href}`,
        `/ja${href}/overview`,
        `/ja${href}/overview/intro`,
        `/ja/enterprise/${enterpriseServerReleases.latest}/user${href}`,
        `/ja/enterprise/${enterpriseServerReleases.oldestSupported}/user${href}`,
      ]

      blockedPaths.forEach((path) => {
        expect(allowIndex(path)).toBe(false)
      })
    })
  })

  it('disallows crawling of early access "hidden" products', async () => {
    const hiddenProductIds = Object.values(productMap)
      .filter((product) => product.hidden)
      .map((product) => product.id)

    hiddenProductIds.forEach((id) => {
      const { versions } = productMap[id]
      const blockedPaths = versions
        .map((version) => {
          return [
            // English
            `/en/${version}/${id}`,
            `/en/${version}/${id}/some-early-access-article`,
            // Japanese
            `/ja/${version}/${id}`,
            `/ja/${version}/${id}/some-early-access-article`,
          ]
        })
        .flat()

      blockedPaths.forEach((path) => {
        expect(allowIndex(path)).toBe(false)
      })
    })
  })

  it('allows crawling of non-WIP products', async () => {
    expect('actions' in productMap).toBe(true)
    expect(allowIndex('/en/actions')).toBe(true)
    expect(allowIndex('/en/actions/overview')).toBe(true)
    expect(allowIndex('/en/actions/overview/intro')).toBe(true)
    expect(allowIndex(`/en/enterprise/${enterpriseServerReleases.latest}/user/actions`)).toBe(true)
    expect(
      allowIndex(`/en/enterprise/${enterpriseServerReleases.oldestSupported}/user/actions`)
    ).toBe(true)
  })

  it('disallows crawling of deprecated enterprise releases', async () => {
    enterpriseServerReleases.deprecated.forEach((version) => {
      const blockedPaths = [
        // English
        `/en/enterprise-server@${version}/actions`,
        `/en/enterprise/${version}/actions`,
        `/en/enterprise-server@${version}/actions/overview`,
        `/en/enterprise/${version}/actions/overview`,
        // Japanese
        `/ja/enterprise-server@${version}/actions`,
        `/ja/enterprise/${version}/actions`,
        `/ja/enterprise-server@${version}/actions/overview`,
        `/ja/enterprise/${version}/actions/overview`,
      ]

      blockedPaths.forEach((path) => {
        expect(allowIndex(path)).toBe(false)
      })
    })
  })
})
