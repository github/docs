import fs from 'fs'
import os from 'os'
import path from 'path'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'

import { runRule } from '@/content-linter/lib/init-test'
import { docsTeamMetricsJourney } from '@/content-linter/lib/linting-rules/docs-team-metrics-journey'

const fmOptions = { markdownlintOptions: { frontMatter: null } }

const LANDING = `---
title: Journey
layout: journey-landing
versions:
  fpt: '*'
docsTeamMetrics:
  - my-initiative
journeyTracks:
  - id: track
    title: Track
    guides:
      - href: '/product/tagged-guide'
      - href: '/product/untagged-guide'
---
`
const TAGGED = `---
title: Tagged guide
versions:
  fpt: '*'
docsTeamMetrics:
  - my-initiative
---
`
const UNTAGGED = `---
title: Untagged guide
versions:
  fpt: '*'
---
`
const STRAY = `---
title: Stray article
versions:
  fpt: '*'
docsTeamMetrics:
  - my-initiative
---
`
const OTHER_TAG = `---
title: Path-enforced article
versions:
  fpt: '*'
docsTeamMetrics:
  - copilot-cli
---
`

describe(docsTeamMetricsJourney.names.join(' - '), () => {
  const rootBefore = process.env.ROOT
  let root: string

  // Each test gets a fresh ROOT, which also gives it a fresh cached index.
  beforeEach(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'ghd068-'))
    fs.mkdirSync(path.join(root, 'content/product'), { recursive: true })
    process.env.ROOT = root
  })

  afterEach(() => {
    // Assigning undefined would store the string 'undefined' and break later tests.
    if (rootBefore === undefined) delete process.env.ROOT
    else process.env.ROOT = rootBefore
    fs.rmSync(root, { recursive: true, force: true })
  })

  function write(files: Record<string, string>): string[] {
    return Object.entries(files).map(([rel, body]) => {
      const full = path.join(root, 'content', rel)
      fs.writeFileSync(full, body)
      return full
    })
  }

  async function lint(file: string) {
    const result = await runRule(docsTeamMetricsJourney, { files: [file], ...fmOptions })
    return result[file]
  }

  test('landing page reports each linked guide that lacks its tag', async () => {
    const [landing] = write({
      'product/journey.md': LANDING,
      'product/tagged-guide.md': TAGGED,
      'product/untagged-guide.md': UNTAGGED,
    })
    const errors = await lint(landing)
    expect(errors.length).toBe(1)
    expect(errors[0].ruleNames).toContain('GHD068')
    expect(errors[0].errorDetail).toContain('/product/untagged-guide')
  })

  test('linked guide without the tag fails', async () => {
    const [, , untagged] = write({
      'product/journey.md': LANDING,
      'product/tagged-guide.md': TAGGED,
      'product/untagged-guide.md': UNTAGGED,
    })
    const errors = await lint(untagged)
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('missing that value')
  })

  test('linked guide with the tag passes, and so does a fully tagged landing page', async () => {
    const [landing, tagged] = write({
      'product/journey.md': LANDING,
      'product/tagged-guide.md': TAGGED,
      'product/untagged-guide.md': TAGGED,
    })
    expect((await lint(landing)).length).toBe(0)
    expect((await lint(tagged)).length).toBe(0)
  })

  test('tagged article not linked from the landing page fails', async () => {
    const [, stray] = write({ 'product/journey.md': LANDING, 'product/stray.md': STRAY })
    const errors = await lint(stray)
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain("isn't linked there")
  })

  test('landing page reports a tagged article that is no longer in the journey', async () => {
    // Mirrors CI, which lints only the landing page when a guide is removed.
    const [landing] = write({
      'product/journey.md': LANDING,
      'product/tagged-guide.md': TAGGED,
      'product/untagged-guide.md': TAGGED,
      'product/stray.md': STRAY,
    })
    const errors = await lint(landing)
    expect(errors.length).toBe(1)
    expect(errors[0].errorDetail).toContain('stray.md has docsTeamMetrics')
  })

  test('repo-relative paths are resolved against ROOT, not the working directory', async () => {
    write({
      'product/journey.md': LANDING,
      'product/tagged-guide.md': TAGGED,
      'product/untagged-guide.md': UNTAGGED,
    })
    const name = 'content/product/untagged-guide.md'
    const result = await runRule(docsTeamMetricsJourney, {
      strings: { [name]: UNTAGGED },
      ...fmOptions,
    })
    expect(result[name].length).toBe(1)
  })

  test('guide hrefs relative to the landing page are resolved, like GHD059', async () => {
    const relativeLanding = LANDING.replace("'/product/untagged-guide'", "'untagged-guide'")
    const [landing, , untagged] = write({
      'product/journey.md': relativeLanding,
      'product/tagged-guide.md': TAGGED,
      'product/untagged-guide.md': UNTAGGED,
    })
    expect((await lint(landing)).length).toBe(1)
    expect((await lint(untagged)).length).toBe(1)
  })

  test('tags no landing page declares are ignored', async () => {
    const [, other] = write({ 'product/journey.md': LANDING, 'product/cli.md': OTHER_TAG })
    expect((await lint(other)).length).toBe(0)
  })

  test('Early Access articles are ignored', async () => {
    fs.mkdirSync(path.join(root, 'content/early-access/product'), { recursive: true })
    const [landing, earlyAccess] = write({
      'product/journey.md': LANDING,
      'early-access/product/preview.md': STRAY,
      'product/tagged-guide.md': TAGGED,
      'product/untagged-guide.md': TAGGED,
    })
    expect((await lint(landing)).length).toBe(0)
    expect((await lint(earlyAccess)).length).toBe(0)
  })

  test('guide index.md is resolved for directory hrefs', async () => {
    fs.mkdirSync(path.join(root, 'content/product/untagged-guide'))
    const [landing] = write({
      'product/journey.md': LANDING,
      'product/tagged-guide.md': TAGGED,
      'product/untagged-guide/index.md': TAGGED,
    })
    expect((await lint(landing)).length).toBe(0)
  })
})
