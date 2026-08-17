import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

import { load } from 'js-yaml'
import { describe, expect, test } from 'vitest'

// Cross-file invariants for the Copilot IDE feature matrix.
//
// The JSON schemas validate each file in isolation. These tests cover the
// relationships *between* matrix-meta.yml and the per-IDE files, which is where
// a hand edit — or, later, an automated changelog-driven update — is most
// likely to introduce a silent error.
//
// "Silent" is the operative word: a missing or mistyped key does not raise an
// error, it renders as ✗ (not supported) to customers.

const MATRIX_DIR = join(process.cwd(), 'data/tables/copilot/matrix')
const META_PATH = join(process.cwd(), 'data/tables/copilot/matrix-meta.yml')

// Stands for "supported since before we tracked versions". Some IDEs list it in
// `versions` without putting it in a `versionGroup`, so it is the one version
// allowed to have no detail table. Removing it is a customer-visible content
// decision; until then it is excluded from the grouping invariant below.
const SENTINEL_VERSION = '0.0.0'

type Ide = {
  name: string
  versionType: string
  versions: string[]
  versionGroups: Record<string, string[]>
  notApplicable?: string[]
  features: Record<string, Record<string, string>>
}

type Meta = {
  title: string
  supportLevels: { id: string; symbol: string; label: string }[]
  ideOrder: string[]
  featureOrder: string[]
}

const meta = load(readFileSync(META_PATH, 'utf8')) as Meta

const ideFilenames = readdirSync(MATRIX_DIR)
  .filter((file) => file.endsWith('.yml'))
  .map((file) => file.replace(/\.yml$/, ''))

const ides: Record<string, Ide> = Object.fromEntries(
  ideFilenames.map((slug) => [
    slug,
    load(readFileSync(join(MATRIX_DIR, `${slug}.yml`), 'utf8')) as Ide,
  ]),
)

describe('copilot matrix meta', () => {
  test('ideOrder lists every file in the matrix directory', () => {
    expect(
      [...meta.ideOrder].sort(),
      'ideOrder in matrix-meta.yml must list every file in data/tables/copilot/matrix/. ' +
        'An IDE missing from ideOrder does not render at all; an extra entry renders an empty column.',
    ).toEqual([...ideFilenames].sort())
  })

  test('supportLevel ids are unique', () => {
    const ids = meta.supportLevels.map((level) => level.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  test('featureOrder has no duplicates', () => {
    expect(new Set(meta.featureOrder).size).toBe(meta.featureOrder.length)
  })

  // A stale featureOrder entry that no IDE uses renders as a row of ✗ across
  // every column of the summary table.
  test('every featureOrder entry is used by at least one IDE', () => {
    const used = new Set<string>()
    for (const ide of Object.values(ides)) {
      for (const feature of Object.keys(ide.features)) used.add(feature)
      for (const feature of ide.notApplicable || []) used.add(feature)
    }
    const unused = meta.featureOrder.filter((feature) => !used.has(feature))
    expect(
      unused,
      'These features are in featureOrder in matrix-meta.yml but no IDE file uses them. ' +
        'They render as a row of ✗ across every column. Remove them from featureOrder, ' +
        'or add support data for them in at least one file in data/tables/copilot/matrix/.',
    ).toEqual([])
  })
})

describe.each(ideFilenames)('copilot matrix: %s', (slug) => {
  const ide = ides[slug]
  const knownVersions = new Set(ide.versions)
  const knownLevels = new Set(meta.supportLevels.map((level) => level.id))

  test('versions has no duplicates', () => {
    expect(
      new Set(ide.versions).size,
      `${slug}.yml lists the same version more than once in 'versions'.`,
    ).toBe(ide.versions.length)
  })

  test('every version in versionGroups also appears in versions', () => {
    const missing: string[] = []
    for (const [groupName, groupVersions] of Object.entries(ide.versionGroups)) {
      for (const version of groupVersions) {
        if (!knownVersions.has(version)) missing.push(`${groupName} → ${version}`)
      }
    }
    expect(
      missing,
      `${slug}.yml groups versions that are not in its 'versions' list. ` +
        `Add each version to 'versions' as well, newest first.`,
    ).toEqual([])
  })

  // Only versions listed in a versionGroup are rendered as a detail table. A
  // version in `versions` that is in no group is data customers cannot see —
  // and the summary table reads `versions | first`, so if it is the newest one
  // the page shows support data for a version with no detail table at all.
  // This is the most likely mistake for an automated updater that appends to
  // `versions` and forgets `versionGroups`, and checking only the newest
  // version would miss a backfilled older one.
  test('every version appears in at least one versionGroup', () => {
    const grouped = new Set(Object.values(ide.versionGroups).flat())
    const ungrouped = ide.versions.filter(
      (version) => version !== SENTINEL_VERSION && !grouped.has(version),
    )
    expect(
      ungrouped,
      `${slug}.yml lists these versions in 'versions' but no versionGroup includes them, ` +
        `so they have no detail table. Add each to the appropriate group in 'versionGroups'. ` +
        `('${SENTINEL_VERSION}' is exempt — it is the "since before version tracking" sentinel.)`,
    ).toEqual([])
  })

  test('every version used in features also appears in versions', () => {
    const unknown: string[] = []
    for (const [feature, cells] of Object.entries(ide.features)) {
      for (const version of Object.keys(cells)) {
        if (!knownVersions.has(version)) unknown.push(`${feature} → ${version}`)
      }
    }
    expect(
      unknown,
      `${slug}.yml has support data for versions that are not in its 'versions' list. ` +
        `Add the version to 'versions' and to a 'versionGroups' entry, or correct the typo.`,
    ).toEqual([])
  })

  test('every support level used is defined in matrix-meta', () => {
    const invalid: string[] = []
    for (const [feature, cells] of Object.entries(ide.features)) {
      for (const [version, level] of Object.entries(cells)) {
        if (!knownLevels.has(level)) invalid.push(`${feature} @ ${version} → ${level}`)
      }
    }
    expect(
      invalid,
      `${slug}.yml uses support levels that are not defined in matrix-meta.yml. ` +
        `Valid levels are: ${[...knownLevels].join(', ')}. ` +
        `Adding a new level also requires a new {% case %} branch in the template.`,
    ).toEqual([])
  })

  // Without this, a renamed or mistyped feature silently disappears from the
  // "Features by IDE" summary table, which iterates featureOrder.
  test('every feature is listed in matrix-meta featureOrder', () => {
    const unlisted = Object.keys(ide.features).filter(
      (feature) => !meta.featureOrder.includes(feature),
    )
    expect(
      unlisted,
      `${slug}.yml has features that are missing from featureOrder in matrix-meta.yml. ` +
        `They render in this IDE's own tables but are invisible in the summary table. ` +
        `Add each one to featureOrder, positioned where the row should appear.`,
    ).toEqual([])
  })

  test('notApplicable features are not also given support data', () => {
    const contradictory = (ide.notApplicable || []).filter((feature) => feature in ide.features)
    expect(
      contradictory,
      `${slug}.yml lists these features in both 'notApplicable' and 'features'. ` +
        `A feature is either not applicable to this IDE or it has support data, not both.`,
    ).toEqual([])
  })

  test('notApplicable features are listed in matrix-meta featureOrder', () => {
    const unlisted = (ide.notApplicable || []).filter(
      (feature) => !meta.featureOrder.includes(feature),
    )
    expect(
      unlisted,
      `${slug}.yml marks these features 'notApplicable' but they are missing from ` +
        `featureOrder in matrix-meta.yml, so the — cell will not render in the summary table.`,
    ).toEqual([])
  })
})
