import { describe, expect, test } from 'vitest'

import { allVersions } from '@/versions/lib/all-versions'
import { getFeaturesByVersion } from '@/versions/middleware/features'
import { engine } from '@/content-render/liquid/engine'
import {
  buildRenderContext,
  resolveRequestedVersions,
} from '@/languages/scripts/count-translation-corruptions'

// Pick a real GHES key at runtime rather than hard-coding one. allVersions
// only contains supported releases, so enterprise-server@3.16 fails after
// it rolls off support.
const someGhesVersion = Object.keys(allVersions).find((v) => v.startsWith('enterprise-server@'))!

describe('resolveRequestedVersions', () => {
  test('defaults to every version when no option is passed', () => {
    expect(resolveRequestedVersions()).toEqual(Object.keys(allVersions))
    expect(resolveRequestedVersions('')).toEqual(Object.keys(allVersions))
  })

  test('parses a comma-separated list and trims whitespace', () => {
    expect(resolveRequestedVersions(`free-pro-team@latest, ${someGhesVersion}`)).toEqual([
      'free-pro-team@latest',
      someGhesVersion,
    ])
  })

  test('dedupes repeated versions, preserving first-seen order', () => {
    expect(
      resolveRequestedVersions(`free-pro-team@latest, ${someGhesVersion}, free-pro-team@latest`),
    ).toEqual(['free-pro-team@latest', someGhesVersion])
  })

  test('rejects versions that are not real allVersions keys', () => {
    // enterprise-server@latest is a common mistake. It is not a real key.
    expect(() => resolveRequestedVersions('enterprise-server@latest')).toThrow(
      /Invalid version\(s\): enterprise-server@latest/,
    )
    expect(() => resolveRequestedVersions('free-pro-team@latest,nope')).toThrow(/nope/)
  })
})

describe('buildRenderContext', () => {
  const fptFeature = Object.entries(getFeaturesByVersion('free-pro-team@latest')).find(
    ([, enabled]) => enabled,
  )![0]

  test('sets feature flags for the version', () => {
    const ctx = buildRenderContext('es', 'free-pro-team@latest')
    expect(ctx[fptFeature]).toBe(true)
    expect(ctx.currentVersion).toBe('free-pro-team@latest')
    expect(ctx.fpt).toBe(true)
  })

  test('renders feature-gated branches so render-time errors surface', async () => {
    const ctx = buildRenderContext('es', 'free-pro-team@latest')
    await expect(
      engine.parseAndRender(`{% ifversion ${fptFeature} %}{% octicon "lapiz" %}{% endif %}`, ctx),
    ).rejects.toThrow(/Octicon lapiz does not exist/)
  })
})
