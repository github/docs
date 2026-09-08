import { describe, expect, it } from 'vitest'

import { getInitialPageWebhooks, getWebhook, getWebhooks } from '../index'

// Use a version that's guaranteed to exist in the data directory.
const VERSION = 'free-pro-team@latest'

// Pick a webhook category whose data file has body parameters with
// non-empty childParamsGroups so we can verify they survive the
// initial-page stripping.
const CATEGORY = 'projects_v2_item'

describe('getInitialPageWebhooks does not corrupt the getWebhook cache', () => {
  it('strips childParamsGroups from the initial-page data', async () => {
    const initial = await getInitialPageWebhooks(VERSION)
    const initialWebhook = initial.find((w) => w.name === CATEGORY)
    expect(initialWebhook).toBeDefined()

    for (const bp of initialWebhook!.data.bodyParameters ?? []) {
      if (bp.childParamsGroups) {
        expect(bp.childParamsGroups, `initial ${bp.name} should be stripped`).toHaveLength(0)
      }
    }
  })

  it('preserves childParamsGroups in the getWebhook cache after getInitialPageWebhooks runs', async () => {
    // Seed the cache and record original childParamsGroups lengths.
    const before = await getWebhook(VERSION, CATEGORY)
    expect(before).toBeDefined()

    const originalLengths: Record<string, number> = {}
    for (const [action, actionData] of Object.entries(before!)) {
      for (const bp of actionData.bodyParameters ?? []) {
        if (bp.childParamsGroups && bp.childParamsGroups.length > 0) {
          originalLengths[`${action}.${bp.name}`] = bp.childParamsGroups.length
        }
      }
    }
    expect(Object.keys(originalLengths).length).toBeGreaterThan(0)

    // This intentionally empties childParamsGroups for the initial page render.
    await getInitialPageWebhooks(VERSION)

    // getWebhook returns cached data — it must NOT have been mutated.
    const after = await getWebhook(VERSION, CATEGORY)
    expect(after).toBeDefined()

    for (const [key, expectedLen] of Object.entries(originalLengths)) {
      const [action, paramName] = key.split('.')
      const bp = after![action]?.bodyParameters?.find(
        (p: { name?: string }) => p.name === paramName,
      )
      expect(
        bp?.childParamsGroups?.length,
        `${key}.childParamsGroups should still have ${expectedLen} entries`,
      ).toBe(expectedLen)
    }
  })
})

describe('childParamsGroups deferred loading', () => {
  it('getWebhooks() returns data without childParamsGroups (slim)', async () => {
    const allWebhooks = await getWebhooks(VERSION)
    // Check a category known to have child params
    const webhook = allWebhooks[CATEGORY]
    expect(webhook).toBeDefined()

    for (const [action, actionData] of Object.entries(webhook)) {
      for (const bp of actionData.bodyParameters ?? []) {
        expect(
          bp.childParamsGroups ?? [],
          `${action}.${bp.name} should have empty childParamsGroups in slim data`,
        ).toHaveLength(0)
      }
    }
  })

  it('getWebhook() returns data with childParamsGroups merged (full)', async () => {
    const webhook = await getWebhook(VERSION, CATEGORY)
    expect(webhook).toBeDefined()

    // At least one body param across all actions should have non-empty childParamsGroups
    let foundNonEmpty = false
    for (const [, actionData] of Object.entries(webhook!)) {
      for (const bp of actionData.bodyParameters ?? []) {
        if (bp.childParamsGroups && bp.childParamsGroups.length > 0) {
          foundNonEmpty = true
        }
      }
    }
    expect(
      foundNonEmpty,
      'getWebhook() should return at least one non-empty childParamsGroups',
    ).toBe(true)
  })

  it('getWebhook() with includeChildParams=false returns slim data', async () => {
    const webhook = await getWebhook(VERSION, CATEGORY, { includeChildParams: false })
    expect(webhook).toBeDefined()

    for (const [action, actionData] of Object.entries(webhook!)) {
      for (const bp of actionData.bodyParameters ?? []) {
        expect(
          bp.childParamsGroups ?? [],
          `${action}.${bp.name} should be empty with includeChildParams=false`,
        ).toHaveLength(0)
      }
    }
  })

  it('getWebhookCategories excludes child-params files', async () => {
    const { getWebhookCategories } = await import('../index')
    const categories = getWebhookCategories(VERSION)
    for (const cat of categories) {
      expect(cat).not.toContain('child-params')
    }
  })
})
