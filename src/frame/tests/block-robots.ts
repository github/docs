import { describe, expect, test } from 'vitest'

import { blockIndex } from '@/frame/middleware/block-robots'
import { productMap } from '@/products/lib/all-products'
import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'

function allowIndex(path: string) {
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

    for (const id of wipProductIds) {
      const { href } = productMap[id]
      const blockedPaths = [
        `/en${href}`,
        `/en${href}/overview`,
        `/en${href}/overview/intro`,
        `/en/enterprise/${enterpriseServerReleases.latest}/user${href}`,
        `/en/enterprise/${enterpriseServerReleases.oldestSupported}/user${href}`,
      ]

      for (const path of blockedPaths) {
        expect(allowIndex(path)).toBe(false)
      }
    }
  })

  test('disallows crawling of early access "hidden" products', async () => {
    const hiddenProductIds = Object.values(productMap)
      .filter((product) => product.hidden)
      .map((product) => product.id)

    for (const id of hiddenProductIds) {
      const { versions } = productMap[id]
      if (!versions) continue
      const blockedPaths = versions
        .map((version) => {
          return [`/en/${version}/${id}`, `/en/${version}/${id}/some-early-access-article`]
        })
        .flat()

      for (const path of blockedPaths) {
        expect(allowIndex(path)).toBe(false)
      }
    }
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
    for (const version of enterpriseServerReleases.deprecated) {
      const blockedPaths = [
        `/en/enterprise-server@${version}/actions`,
        `/en/enterprise/${version}/actions`,
        `/en/enterprise-server@${version}/actions/overview`,
        `/en/enterprise/${version}/actions/overview`,
      ]

      for (const path of blockedPaths) {
        expect(allowIndex(path)).toBe(false)
      }
    }
  })
})
