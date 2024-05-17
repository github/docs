import { describe, expect, test } from 'vitest'

import { blockIndex } from '#src/frame/middleware/block-robots.js'
import { productMap } from '#src/products/lib/all-products.js'
import enterpriseServerReleases from '#src/versions/lib/enterprise-server-releases.js'

function allowIndex(path) {
  return !blockIndex(path)
}

describe('block robots', () => {
  test('allows crawling of the homepage and English content', async () => {
    expect(allowIndex('/')).toBe(true)
    expect(allowIndex('/en')).toBe(true)
    expect(allowIndex('/en/articles/verifying-your-email-address')).toBe(true)
  })

  test('disallows crawling of WIP products', async () => {
    const wipProductIds = Object.values(productMap)
      .filter((product) => product.wip)
      .map((product) => product.id)

    wipProductIds.forEach((id) => {
      const { href } = productMap[id]
      const blockedPaths = [
        `/en${href}`,
        `/en${href}/overview`,
        `/en${href}/overview/intro`,
        `/en/enterprise/${enterpriseServerReleases.latest}/user${href}`,
        `/en/enterprise/${enterpriseServerReleases.oldestSupported}/user${href}`,
      ]

      blockedPaths.forEach((path) => {
        expect(allowIndex(path)).toBe(false)
      })
    })
  })

  test('disallows crawling of early access "hidden" products', async () => {
    const hiddenProductIds = Object.values(productMap)
      .filter((product) => product.hidden)
      .map((product) => product.id)

    hiddenProductIds.forEach((id) => {
      const { versions } = productMap[id]
      const blockedPaths = versions
        .map((version) => {
          return [`/en/${version}/${id}`, `/en/${version}/${id}/some-early-access-article`]
        })
        .flat()

      blockedPaths.forEach((path) => {
        expect(allowIndex(path)).toBe(false)
      })
    })
  })

  test('allows crawling of non-WIP products', async () => {
    expect('actions' in productMap).toBe(true)
    expect(allowIndex('/en/actions')).toBe(true)
    expect(allowIndex('/en/actions/overview')).toBe(true)
    expect(allowIndex('/en/actions/overview/intro')).toBe(true)
    expect(allowIndex(`/en/enterprise/${enterpriseServerReleases.latest}/user/actions`)).toBe(true)
    expect(
      allowIndex(`/en/enterprise/${enterpriseServerReleases.oldestSupported}/user/actions`),
    ).toBe(true)
  })

  test('disallows crawling of deprecated enterprise releases', async () => {
    enterpriseServerReleases.deprecated.forEach((version) => {
      const blockedPaths = [
        `/en/enterprise-server@${version}/actions`,
        `/en/enterprise/${version}/actions`,
        `/en/enterprise-server@${version}/actions/overview`,
        `/en/enterprise/${version}/actions/overview`,
      ]

      blockedPaths.forEach((path) => {
        expect(allowIndex(path)).toBe(false)
      })
    })
  })
})
