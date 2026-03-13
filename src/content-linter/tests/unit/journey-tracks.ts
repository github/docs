import { describe, expect, test, beforeAll, afterAll } from 'vitest'

import { runRule } from '../../lib/init-test'
import { journeyTracksLiquid } from '../../lib/linting-rules/journey-tracks-liquid'
import { journeyTracksGuidePathExists } from '../../lib/linting-rules/journey-tracks-guide-path-exists'
import { journeyTracksUniqueIds } from '../../lib/linting-rules/journey-tracks-unique-ids'

const VALID_JOURNEY = 'src/content-linter/tests/fixtures/journey-tracks/valid-journey.md'
const INVALID_PATHS = 'src/content-linter/tests/fixtures/journey-tracks/invalid-paths.md'
const NON_JOURNEY_LAYOUT = 'src/content-linter/tests/fixtures/journey-tracks/non-journey-layout.md'
const DUPLICATE_IDS = 'src/content-linter/tests/fixtures/journey-tracks/duplicate-ids.md'
const NO_JOURNEY_TRACKS = 'src/content-linter/tests/fixtures/journey-tracks/no-journey-tracks.md'

const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe('journey-tracks-liquid', () => {
  test('valid liquid syntax passes', async () => {
    const result = await runRule(journeyTracksLiquid, {
      files: [VALID_JOURNEY],
      ...fmOptions,
    })
    expect(result[VALID_JOURNEY]).toEqual([])
  })

  test('invalid liquid syntax fails', async () => {
    // Using inline content instead of a fixture file to avoid CI conflicts.
    // Malformed Liquid syntax in fixture files causes other rules (like liquid-versioning)
    // to crash when they try to parse the same file during content linting.
    const invalidLiquidContent = `---
title: Journey with Liquid Syntax
layout: journey-landing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Testing
journeyTracks:
  - id: track-1
    title: "Track with {% invalid liquid"
    description: "Description with {{ unclosed liquid"
    guides:
      - href: /article-one
---

# Journey with Liquid Issues

This journey landing page has invalid liquid syntax in journeyTracks.
`
    const result = await runRule(journeyTracksLiquid, {
      strings: { 'test-invalid-liquid.md': invalidLiquidContent },
      ...fmOptions,
    })
    expect(result['test-invalid-liquid.md']).toHaveLength(2) // title and description both have invalid liquid
    expect(result['test-invalid-liquid.md'][0].ruleDescription).toMatch(/liquid syntax/i)
    expect(result['test-invalid-liquid.md'][1].ruleDescription).toMatch(/liquid syntax/i)
  })

  test('invalid liquid syntax in alternativeNextStep fails', async () => {
    const invalidAlternativeNextStepContent = `---
title: Journey with Invalid Alternative Next Step
layout: journey-landing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
journeyTracks:
  - id: track-1
    title: "Test Track"
    guides:
      - href: /article-one
        alternativeNextStep: "Want to skip? See {% invalid liquid syntax"
---

# Journey with Invalid Alternative Next Step
`
    const result = await runRule(journeyTracksLiquid, {
      strings: { 'test-invalid-alternative-next-step.md': invalidAlternativeNextStepContent },
      ...fmOptions,
    })

    expect(result['test-invalid-alternative-next-step.md']).toHaveLength(1)
    expect(result['test-invalid-alternative-next-step.md'][0].errorDetail).toMatch(
      /alternativeNextStep/,
    )
    expect(result['test-invalid-alternative-next-step.md'][0].errorDetail).toMatch(/liquid syntax/i)
  })
})

describe('journey-tracks-guide-path-exists', () => {
  const envVarValueBefore = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = 'src/fixtures/fixtures'
  })

  afterAll(() => {
    process.env.ROOT = envVarValueBefore
  })

  test('ignores non-journey-landing layouts', async () => {
    const result = await runRule(journeyTracksGuidePathExists, {
      files: [NON_JOURNEY_LAYOUT],
      ...fmOptions,
    })
    expect(result[NON_JOURNEY_LAYOUT]).toEqual([])
  })

  test('valid guide paths pass', async () => {
    const result = await runRule(journeyTracksGuidePathExists, {
      files: [VALID_JOURNEY],
      ...fmOptions,
    })
    expect(result[VALID_JOURNEY]).toEqual([])
  })

  test('invalid guide paths fail', async () => {
    const result = await runRule(journeyTracksGuidePathExists, {
      files: [INVALID_PATHS],
      ...fmOptions,
    })
    expect(result[INVALID_PATHS].length).toBeGreaterThan(0)
    expect(result[INVALID_PATHS][0].errorDetail).toContain('does not exist')
  })

  test('pages without journey tracks pass', async () => {
    const result = await runRule(journeyTracksGuidePathExists, {
      files: [NO_JOURNEY_TRACKS],
      ...fmOptions,
    })
    expect(result[NO_JOURNEY_TRACKS]).toEqual([])
  })
})

describe('journey-tracks-unique-ids', () => {
  test('unique IDs pass', async () => {
    const result = await runRule(journeyTracksUniqueIds, {
      files: [VALID_JOURNEY],
      ...fmOptions,
    })
    expect(result[VALID_JOURNEY]).toEqual([])
  })

  test('duplicate IDs fail', async () => {
    const result = await runRule(journeyTracksUniqueIds, {
      files: [DUPLICATE_IDS],
      ...fmOptions,
    })
    expect(result[DUPLICATE_IDS]).toHaveLength(1)
    expect(result[DUPLICATE_IDS][0].errorDetail).toContain('duplicate-id')
  })

  test('ignores non-journey-landing layouts', async () => {
    const result = await runRule(journeyTracksUniqueIds, {
      files: [NON_JOURNEY_LAYOUT],
      ...fmOptions,
    })
    expect(result[NON_JOURNEY_LAYOUT]).toEqual([])
  })
})
