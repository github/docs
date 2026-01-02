import { describe, expect, test } from 'vitest'

import { runRule } from '@/content-linter/lib/init-test'
import { outdatedReleasePhaseTerminology } from '@/content-linter/lib/linting-rules/outdated-release-phase-terminology'

describe(outdatedReleasePhaseTerminology.names.join(' - '), () => {
  test('Using outdated beta terminology causes error', async () => {
    const markdown = [
      'This feature is in beta.',
      'The public beta is available now.',
      'We are running a limited public beta.',
    ].join('\n')
    const result = await runRule(outdatedReleasePhaseTerminology, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[0].errorDetail).toContain(
      'Replace outdated terminology "beta" with "public preview"',
    )
    expect(errors[1].lineNumber).toBe(2)
    expect(errors[1].errorDetail).toContain(
      'Replace outdated terminology "public beta" with "public preview"',
    )
    expect(errors[2].lineNumber).toBe(3)
    expect(errors[2].errorDetail).toContain(
      'Replace outdated terminology "limited public beta" with "public preview"',
    )
  })

  test('Using outdated private beta and alpha terminology causes error', async () => {
    const markdown = ['The private beta starts next month.', 'This alpha version has bugs.'].join(
      '\n',
    )
    const result = await runRule(outdatedReleasePhaseTerminology, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[0].errorDetail).toContain(
      'Replace outdated terminology "private beta" with "private preview"',
    )
    expect(errors[1].lineNumber).toBe(2)
    expect(errors[1].errorDetail).toContain(
      'Replace outdated terminology "alpha" with "private preview"',
    )
  })

  test('Using outdated deprecated terminology causes error', async () => {
    const markdown = ['This feature is deprecated.', 'The deprecation timeline is available.'].join(
      '\n',
    )
    const result = await runRule(outdatedReleasePhaseTerminology, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[0].errorDetail).toContain(
      'Replace outdated terminology "deprecated" with "closing down"',
    )
    expect(errors[1].lineNumber).toBe(2)
    expect(errors[1].errorDetail).toContain(
      'Replace outdated terminology "deprecation" with "closing down"',
    )
  })

  test('Using outdated sunset terminology causes error', async () => {
    const markdown = ['This API will sunset in 2024.'].join('\n')
    const result = await runRule(outdatedReleasePhaseTerminology, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[0].errorDetail).toContain('Replace outdated terminology "sunset" with "retired"')
  })

  test('Case insensitive matching works', async () => {
    const markdown = [
      'This BETA feature is great.',
      'The Alpha version is ready.',
      'This is DEPRECATED.',
      'We will SUNSET this feature.',
    ].join('\n')
    const result = await runRule(outdatedReleasePhaseTerminology, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(4)
    expect(errors[0].errorDetail).toContain(
      'Replace outdated terminology "BETA" with "public preview"',
    )
    expect(errors[1].errorDetail).toContain(
      'Replace outdated terminology "Alpha" with "private preview"',
    )
    expect(errors[2].errorDetail).toContain(
      'Replace outdated terminology "DEPRECATED" with "closing down"',
    )
    expect(errors[3].errorDetail).toContain('Replace outdated terminology "SUNSET" with "retired"')
  })

  test('Word boundaries prevent false positives in compound words', async () => {
    const markdown = [
      'The alphabet contains letters.',
      'We use betaflight software.',
      'The deprecated-api endpoint is different.',
    ].join('\n')
    const result = await runRule(outdatedReleasePhaseTerminology, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Context-sensitive terms are flagged (human review needed)', async () => {
    const markdown = ['A beautiful sunset view.', 'The API will sunset next year.'].join('\n')
    const result = await runRule(outdatedReleasePhaseTerminology, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].errorDetail).toContain('Replace outdated terminology "sunset" with "retired"')
    expect(errors[1].errorDetail).toContain('Replace outdated terminology "sunset" with "retired"')
  })

  test('Multiple occurrences on same line are all caught', async () => {
    const markdown = ['This beta feature replaces the deprecated alpha version.'].join('\n')
    const result = await runRule(outdatedReleasePhaseTerminology, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)
    expect(errors[0].errorDetail).toContain(
      'Replace outdated terminology "beta" with "public preview"',
    )
    expect(errors[1].errorDetail).toContain(
      'Replace outdated terminology "deprecated" with "closing down"',
    )
    expect(errors[2].errorDetail).toContain(
      'Replace outdated terminology "alpha" with "private preview"',
    )
  })

  test('New terminology does not cause errors', async () => {
    const markdown = [
      'This feature is in public preview.',
      'The private preview is available now.',
      'This feature is closing down.',
      'The API has been retired.',
    ].join('\n')
    const result = await runRule(outdatedReleasePhaseTerminology, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Autogenerated files are skipped', async () => {
    const frontmatter = ['---', 'title: Test', 'autogenerated: rest', '---'].join('\n')
    const markdown = ['This feature is in beta.'].join('\n')
    const result = await runRule(outdatedReleasePhaseTerminology, {
      strings: {
        markdown: frontmatter + '\n' + markdown,
      },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})
