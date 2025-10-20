import { beforeAll, describe, expect, test, vi } from 'vitest'

import { getJsonValidator } from '@/tests/lib/validate-json-schema'
import schema from '@/tests/helpers/schemas/site-tree-schema'
import EnterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import { loadSiteTree } from '@/frame/lib/page-data'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { formatAjvErrors } from '@/tests/helpers/schemas'
import type { SiteTree, Tree } from '@/types'

const latestEnterpriseRelease = EnterpriseServerReleases.latest

const siteTreeValidate = getJsonValidator(schema.childPage)

describe('siteTree', () => {
  vi.setConfig({ testTimeout: 3 * 60 * 1000 })

  let siteTree: SiteTree
  beforeAll(async () => {
    siteTree = (await loadSiteTree()) as SiteTree
  })

  test('has language codes as top-level keys', () => {
    expect('en' in siteTree).toBe(true)
  })

  test('object order and structure', () => {
    expect(siteTree.en[nonEnterpriseDefaultVersion].childPages[1].href).toBe('/en/get-started')
    expect(siteTree.en[nonEnterpriseDefaultVersion].childPages[1].childPages[0].href).toBe(
      '/en/get-started/start-your-journey',
    )
  })

  describe('localized titles', () => {
    test('articles that include site data in liquid templating', async () => {
      const ghesLatest = `enterprise-server@${latestEnterpriseRelease}`
      const ghesSiteTree = siteTree.en[ghesLatest]

      // Find a page in the tree that we know contains Liquid
      // TODO: use new findPageInSiteTree helper when it's available
      const pageWithDynamicTitle = ghesSiteTree.childPages
        .find((child) => child.href === `/en/${ghesLatest}/admin`)
        ?.childPages.find(
          (child) => child.href === `/en/${ghesLatest}/admin/installing-your-enterprise-server`,
        )

      // Confirm the raw title contains Liquid
      expect(pageWithDynamicTitle?.page.title).toEqual(
        'Installing {% data variables.product.prodname_enterprise %}',
      )
    })
  })

  test('object validation', () => {
    const childPages = siteTree.en[nonEnterpriseDefaultVersion].childPages
    expect(childPages.length).toBeGreaterThan(0)

    validate(siteTree.en[nonEnterpriseDefaultVersion])
  })
})

function validate(currentPage: Tree): void {
  const childPages: Tree[] = currentPage.childPages || []
  childPages.forEach((childPage) => {
    // Store page reference before validation to avoid type narrowing
    const pageRef: Tree = childPage
    const isValid = siteTreeValidate(childPage)
    let errors: string | undefined

    if (!isValid) {
      const fullPath = pageRef.page.fullPath
      errors = `file ${fullPath}: ${formatAjvErrors(siteTreeValidate.errors || [])}`
    }

    expect(isValid, errors).toBe(true)

    // Run recursively until we run out of child pages
    validate(pageRef)
  })
}
