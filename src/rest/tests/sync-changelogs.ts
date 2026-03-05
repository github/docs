import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest'
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import os from 'os'

import {
  parseVersionSections,
  getChangelogPath,
  syncChangelogs,
} from '../scripts/utils/sync-changelogs'

// Suppress console.log output during tests
beforeEach(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {})
})
afterEach(() => {
  vi.restoreAllMocks()
})

// ---------------------------------------------------------------------------
// parseVersionSections
// ---------------------------------------------------------------------------
describe('parseVersionSections', () => {
  test('parses a changelog with multiple version sections', () => {
    const markdown = `# REST API Breaking Changes for GitHub Free, Pro & Team

For more information, see API Versions.

## Version 2026-06-10

- **Removed topics property**
  Use the dedicated endpoint instead.

## Version 2026-03-10

- **Removed permission property**
  Use notification_setting instead.

## Version 2022-11-28

No breaking changes.`

    const sections = parseVersionSections(markdown)
    expect(sections).toHaveLength(3)
    expect(sections[0].version).toBe('2026-06-10')
    expect(sections[0].content).toContain('Removed topics property')
    expect(sections[1].version).toBe('2026-03-10')
    expect(sections[1].content).toContain('Removed permission property')
    expect(sections[2].version).toBe('2022-11-28')
    expect(sections[2].content).toContain('No breaking changes')
  })

  test('parses a changelog with a single version section', () => {
    const markdown = `# REST API Breaking Changes

## Version 2022-11-28

This version has no breaking changes.`

    const sections = parseVersionSections(markdown)
    expect(sections).toHaveLength(1)
    expect(sections[0].version).toBe('2022-11-28')
    expect(sections[0].content).toContain('no breaking changes')
  })

  test('strips the top-level title and intro paragraph', () => {
    const markdown = `# REST API Breaking Changes for GitHub Enterprise Cloud

For more information about versioning, see API Versions.

## Version 2022-11-28

Content here.`

    const sections = parseVersionSections(markdown)
    expect(sections).toHaveLength(1)
    expect(sections[0].content).not.toContain('Breaking Changes for')
    expect(sections[0].content).not.toContain('For more information')
    expect(sections[0].content).toContain('Content here')
  })

  test('preserves the ## Version heading in section content', () => {
    const markdown = `# Title

## Version 2026-03-10

Some changes.`

    const sections = parseVersionSections(markdown)
    expect(sections[0].content).toMatch(/^## Version 2026-03-10/)
  })

  test('returns empty array for markdown with no version sections', () => {
    const markdown = `# REST API Breaking Changes

Just some intro text with no version headings.`

    const sections = parseVersionSections(markdown)
    expect(sections).toHaveLength(0)
  })

  test('returns empty array for empty string', () => {
    expect(parseVersionSections('')).toHaveLength(0)
  })

  test('handles multi-line content within a version section', () => {
    const markdown = `# Title

## Version 2026-03-10

- **Change one**
  Detailed description spanning
  multiple lines.

  With a paragraph break.

- **Change two**
  Another description.`

    const sections = parseVersionSections(markdown)
    expect(sections).toHaveLength(1)
    expect(sections[0].content).toContain('Change one')
    expect(sections[0].content).toContain('multiple lines')
    expect(sections[0].content).toContain('paragraph break')
    expect(sections[0].content).toContain('Change two')
  })
})

// ---------------------------------------------------------------------------
// getChangelogPath
// ---------------------------------------------------------------------------
describe('getChangelogPath', () => {
  test('returns descriptions-next path for rest-api-description source', () => {
    const result = getChangelogPath('rest-api-description', 'api.github.com')
    expect(result).toBe(
      path.join('rest-api-description', 'descriptions-next', 'api.github.com', 'CHANGELOG.md'),
    )
  })

  test('returns descriptions-next path for ghec', () => {
    const result = getChangelogPath('rest-api-description', 'ghec')
    expect(result).toBe(
      path.join('rest-api-description', 'descriptions-next', 'ghec', 'CHANGELOG.md'),
    )
  })

  test('returns descriptions-next path for ghes release dir', () => {
    const result = getChangelogPath('rest-api-description', 'ghes-3.19')
    expect(result).toBe(
      path.join('rest-api-description', 'descriptions-next', 'ghes-3.19', 'CHANGELOG.md'),
    )
  })

  test('returns local github repo path for github source', () => {
    const result = getChangelogPath('../github', 'api.github.com')
    expect(result).toBe(
      path.join(
        '..',
        'github',
        'app',
        'api',
        'description',
        'changelogs',
        'api.github.com',
        'CHANGELOG.md',
      ),
    )
  })
})

// ---------------------------------------------------------------------------
// syncChangelogs (integration tests using temp directories)
// ---------------------------------------------------------------------------
describe('syncChangelogs', () => {
  let tmpDir: string
  let outputPath: string

  const versionNames: Record<string, string> = {
    'api.github.com': 'fpt',
    ghec: 'ghec',
    ghes: 'ghes',
  }

  beforeEach(async () => {
    tmpDir = await mkdtemp(path.join(os.tmpdir(), 'sync-changelogs-test-'))
    outputPath = path.join(tmpDir, 'breaking-changes-changelog.md')
  })

  afterEach(async () => {
    await rm(tmpDir, { recursive: true, force: true })
  })

  // Helper to create a changelog file in the github repo layout:
  //   <githubDir>/app/api/description/changelogs/<releaseDir>/CHANGELOG.md
  async function createChangelog(githubDir: string, releaseDir: string, content: string) {
    const changelogDir = path.join(githubDir, 'app', 'api', 'description', 'changelogs', releaseDir)
    await mkdir(changelogDir, { recursive: true })
    await writeFile(path.join(changelogDir, 'CHANGELOG.md'), content)
  }

  test('generates output with ifversion and apiVersion gating for fpt', async () => {
    const githubDir = path.join(tmpDir, 'github')
    await createChangelog(
      githubDir,
      'api.github.com',
      `# REST API Breaking Changes

## Version 2026-03-10

- **Breaking change A**

## Version 2022-11-28

No breaking changes.`,
    )

    await syncChangelogs(githubDir, versionNames, outputPath)

    const output = await readFile(outputPath, 'utf-8')

    // Should have ifversion fpt wrapping
    expect(output).toContain('{% ifversion fpt %}')
    expect(output).toContain('{% endif %}')

    // Should have apiVersion filtering for each version section
    expect(output).toContain('{% if query.apiVersion == nil or "2026-03-10" <= query.apiVersion %}')
    expect(output).toContain('{% if query.apiVersion == nil or "2022-11-28" <= query.apiVersion %}')

    // Should include the actual content
    expect(output).toContain('Breaking change A')
    expect(output).toContain('No breaking changes')
  })

  test('generates GHES sections with ghes = X.Y ifversion syntax', async () => {
    // Find a real GHES version from allVersions to use
    const { allVersions } = await import('@/versions/lib/all-versions')
    const ghesVersion = Object.values(allVersions).find((v) => v.shortName === 'ghes')
    if (!ghesVersion) return

    const release = ghesVersion.currentRelease
    const ghesSourceDir = `ghes-${release}`

    const githubDir = path.join(tmpDir, 'github')
    await createChangelog(
      githubDir,
      ghesSourceDir,
      `# REST API Breaking Changes for GHES ${release}

## Version 2022-11-28

No breaking changes.`,
    )

    await syncChangelogs(githubDir, versionNames, outputPath)

    const output = await readFile(outputPath, 'utf-8')
    expect(output).toContain(`{% ifversion ghes = ${release} %}`)
  })

  test('skips release directories with no changelog file', async () => {
    const githubDir = path.join(tmpDir, 'github')
    // Only create a changelog for fpt, not ghec or ghes
    await createChangelog(
      githubDir,
      'api.github.com',
      `# Breaking Changes

## Version 2022-11-28

No breaking changes.`,
    )

    await syncChangelogs(githubDir, versionNames, outputPath)

    const output = await readFile(outputPath, 'utf-8')
    expect(output).toContain('{% ifversion fpt %}')
    expect(output).not.toContain('{% ifversion ghec %}')
  })

  test('skips changelog files with no version sections', async () => {
    const githubDir = path.join(tmpDir, 'github')

    // fpt has valid sections
    await createChangelog(
      githubDir,
      'api.github.com',
      `# Breaking Changes

## Version 2022-11-28

Content.`,
    )

    // ghec has a changelog but no version sections
    await createChangelog(
      githubDir,
      'ghec',
      `# Breaking Changes

This file has no version headings yet.`,
    )

    await syncChangelogs(githubDir, versionNames, outputPath)

    const output = await readFile(outputPath, 'utf-8')
    expect(output).toContain('{% ifversion fpt %}')
    expect(output).not.toContain('{% ifversion ghec %}')
  })

  test('does not write output when no changelogs are found', async () => {
    const githubDir = path.join(tmpDir, 'github')
    await mkdir(githubDir, { recursive: true })

    await syncChangelogs(githubDir, versionNames, outputPath)

    expect(existsSync(outputPath)).toBe(false)
  })

  test('combines multiple release changelogs into a single output', async () => {
    const githubDir = path.join(tmpDir, 'github')

    await createChangelog(
      githubDir,
      'api.github.com',
      `# Breaking Changes for FPT

## Version 2026-03-10

- FPT change

## Version 2022-11-28

No breaking changes.`,
    )

    await createChangelog(
      githubDir,
      'ghec',
      `# Breaking Changes for GHEC

## Version 2022-11-28

No breaking changes.`,
    )

    await syncChangelogs(githubDir, versionNames, outputPath)

    const output = await readFile(outputPath, 'utf-8')

    // Both product versions should be present
    expect(output).toContain('{% ifversion fpt %}')
    expect(output).toContain('{% ifversion ghec %}')

    // FPT should have two apiVersion blocks, GHEC should have one.
    // Extract the fpt block: everything between {% ifversion fpt %} and the
    // next {% ifversion (which starts the ghec block).
    const afterFpt = output.split('{% ifversion fpt %}')[1]
    const fptBlock = afterFpt.split('{% ifversion ghec %}')[0]
    expect(fptBlock).toContain('"2026-03-10"')
    expect(fptBlock).toContain('"2022-11-28"')
    expect(fptBlock).toContain('FPT change')
  })

  test('version sections are ordered as they appear in the changelog (newest first)', async () => {
    const githubDir = path.join(tmpDir, 'github')

    await createChangelog(
      githubDir,
      'api.github.com',
      `# Breaking Changes

## Version 2026-06-10

Change C

## Version 2026-03-10

Change B

## Version 2022-11-28

Change A`,
    )

    await syncChangelogs(githubDir, versionNames, outputPath)

    const output = await readFile(outputPath, 'utf-8')

    // Versions should appear in the same order as the changelog (newest first)
    const idx2026_06 = output.indexOf('"2026-06-10"')
    const idx2026_03 = output.indexOf('"2026-03-10"')
    const idx2022 = output.indexOf('"2022-11-28"')
    expect(idx2026_06).toBeLessThan(idx2026_03)
    expect(idx2026_03).toBeLessThan(idx2022)
  })
})
