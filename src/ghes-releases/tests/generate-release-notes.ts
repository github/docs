import { describe, expect, test } from 'vitest'

import {
  extractYaml,
  extractSkipReason,
  parseNoteEntries,
  loadExistingEntriesFromString,
  buildReleaseNotesYaml,
} from '@/ghes-releases/lib/parse-release-notes'

// ─── extractYaml ─────────────────────────────────────────────────────────────

describe('extractYaml', () => {
  test('extracts YAML from a fenced code block', () => {
    const input = `Here is the release note:

\`\`\`yaml
- heading: GitHub Actions
  notes:
    - Added support for reusable workflows.
\`\`\`

Done!`
    const result = extractYaml(input)
    expect(result).toBe(
      '- heading: GitHub Actions\n  notes:\n    - Added support for reusable workflows.',
    )
  })

  test('falls back to unfenced lines starting with "- heading:"', () => {
    const input = `Some preamble text

- heading: Repositories
  notes:
    - You can now archive repos in bulk.

Some trailing text that is not YAML`
    const result = extractYaml(input)
    expect(result).toContain('- heading: Repositories')
    expect(result).toContain('You can now archive repos in bulk.')
  })

  test('returns null when there is no YAML content', () => {
    expect(extractYaml('No YAML here at all.')).toBeNull()
    expect(extractYaml('')).toBeNull()
  })
})

// ─── extractSkipReason ───────────────────────────────────────────────────────

describe('extractSkipReason', () => {
  test('extracts reason from "# SKIP: <reason>"', () => {
    expect(extractSkipReason('# SKIP: Not applicable to GHES')).toBe('Not applicable to GHES')
  })

  test('returns null when there is no SKIP comment', () => {
    expect(extractSkipReason('- heading: Foo\n  notes:\n    - bar')).toBeNull()
  })
})

// ─── parseNoteEntries ────────────────────────────────────────────────────────

describe('parseNoteEntries', () => {
  const sourceUrl = 'https://github.com/github/releases/issues/1234'

  test('parses a single entry with one note', () => {
    const yamlStr = `- heading: GitHub Actions
  notes:
    - Added reusable workflows support.`
    const entries = parseNoteEntries(yamlStr, sourceUrl)
    expect(entries).toHaveLength(1)
    expect(entries[0].heading).toBe('GitHub Actions')
    expect(entries[0].notes).toEqual(['Added reusable workflows support.'])
    expect(entries[0].sourceUrl).toBe(sourceUrl)
  })

  test('parses multiple entries with multiple notes', () => {
    const yamlStr = `- heading: APIs
  notes:
    - New endpoint.
- heading: Repositories
  notes:
    - Archive in bulk.
    - Transfer repos across orgs.`
    const entries = parseNoteEntries(yamlStr, sourceUrl)
    expect(entries).toHaveLength(2)
    expect(entries[1].notes).toEqual(['Archive in bulk.', 'Transfer repos across orgs.'])
  })

  test('returns empty array for invalid or non-array YAML', () => {
    expect(parseNoteEntries('key: value', sourceUrl)).toEqual([])
    expect(parseNoteEntries('{{{{', sourceUrl)).toEqual([])
  })

  test('skips entries with missing or non-string heading', () => {
    expect(parseNoteEntries('- notes:\n    - Orphan note.', sourceUrl)).toEqual([])
    expect(parseNoteEntries('- heading: 123\n  notes:\n    - Note.', sourceUrl)).toEqual([])
  })

  test('filters non-string items from notes array', () => {
    const yamlStr = `- heading: Mixed
  notes:
    - Valid note.
    - 42
    - true`
    const entries = parseNoteEntries(yamlStr, sourceUrl)
    expect(entries[0].notes).toEqual(['Valid note.'])
  })
})

// ─── loadExistingEntriesFromString ───────────────────────────────────────────

describe('loadExistingEntriesFromString', () => {
  test('parses feature entries with source URL comments', () => {
    const content = `date: '2025-01-15'
release_candidate: false
deprecated: false
intro: |

sections:

  features:

    - heading: GitHub Actions
      notes:
        # https://github.com/github/releases/issues/100
        - |
          Added reusable workflows.

  changes:
    # TODO: Add change notes

  known_issues:
    - |
      ...

  closing_down:
    # TODO

  retired:
    # TODO
`
    const result = loadExistingEntriesFromString(content)
    expect(result.entries).toHaveLength(1)
    expect(result.entries[0]).toEqual({
      heading: 'GitHub Actions',
      notes: ['Added reusable workflows.'],
      sourceUrl: 'https://github.com/github/releases/issues/100',
    })
    expect(result.coveredUrls.has('https://github.com/github/releases/issues/100')).toBe(true)
  })

  test('parses entries across features, changes, closing_down, and retired sections', () => {
    const content = `date: '2025-01-15'
release_candidate: false
deprecated: false
intro: |

sections:

  features:

    - heading: APIs
      notes:
        # https://github.com/github/releases/issues/100
        - |
          New endpoint added.

  changes:
    # https://github.com/github/releases/issues/102
    - |
      Config format changed.

  known_issues:
    - |
      ...

  closing_down:
    # https://github.com/github/releases/issues/300
    - |
      Legacy API deprecated.

  retired:
    # https://github.com/github/releases/issues/103
    - |
      Old auth method removed.
`
    const result = loadExistingEntriesFromString(content)
    expect(result.entries).toHaveLength(4)
    expect(result.coveredUrls.size).toBe(4)

    const headings = result.entries.map((e) => e.heading)
    expect(headings).toEqual(['APIs', 'Changes', 'Closing down', 'Retired'])
  })

  test('skips placeholder "..." notes', () => {
    const content = `date: '2025-01-15'
release_candidate: false
deprecated: false
intro: |

sections:

  features:

    - heading: GitHub Actions
      notes:
        # https://github.com/github/releases/issues/100
        - |
          ...

  changes:
    # TODO

  known_issues:
    - |
      ...

  closing_down:
    # TODO

  retired:
    # TODO
`
    const result = loadExistingEntriesFromString(content)
    expect(result.entries).toHaveLength(0)
  })

  test('merges notes from the same heading and source URL', () => {
    const content = `date: '2025-01-15'
release_candidate: false
deprecated: false
intro: |

sections:

  features:

    - heading: GitHub Actions
      notes:
        # https://github.com/github/releases/issues/100
        - |
          First note.
        # https://github.com/github/releases/issues/100
        - |
          Second note from same issue.

  changes:
    # TODO

  known_issues:
    - |
      ...

  closing_down:
    # TODO

  retired:
    # TODO
`
    const result = loadExistingEntriesFromString(content)
    expect(result.entries).toHaveLength(1)
    expect(result.entries[0].notes).toEqual(['First note.', 'Second note from same issue.'])
  })
})

// ─── buildReleaseNotesYaml ───────────────────────────────────────────────────

describe('buildReleaseNotesYaml', () => {
  const featureHeadings = ['GitHub Actions', 'Repositories', 'APIs']

  test('groups feature entries by heading in template order', () => {
    const entries = [
      { heading: 'Repositories', notes: ['Repo note.'], sourceUrl: 'https://example.com/2' },
      { heading: 'GitHub Actions', notes: ['Actions note.'], sourceUrl: 'https://example.com/1' },
    ]
    const yaml = buildReleaseNotesYaml(entries, false, featureHeadings)

    const actionsIdx = yaml.indexOf('- heading: GitHub Actions')
    const reposIdx = yaml.indexOf('- heading: Repositories')
    expect(actionsIdx).toBeGreaterThan(-1)
    expect(reposIdx).toBeGreaterThan(-1)
    // GitHub Actions comes before Repositories in featureHeadings
    expect(actionsIdx).toBeLessThan(reposIdx)

    expect(yaml).toContain('Actions note.')
    expect(yaml).toContain('Repo note.')
  })

  test('places non-feature entries in changes section', () => {
    const entries = [
      { heading: 'Some Other Heading', notes: ['A change.'], sourceUrl: 'https://example.com/1' },
    ]
    const yaml = buildReleaseNotesYaml(entries, false, featureHeadings)

    // Should appear under changes, not features
    expect(yaml).toContain('  features:\n    # TODO: Add feature notes')
    expect(yaml).toContain('  changes:')
    expect(yaml).toContain('# https://example.com/1')
    expect(yaml).toContain('A change.')
  })

  test('places Closing down and Retired entries in their own sections', () => {
    const entries = [
      {
        heading: 'Closing down',
        notes: ['Deprecating X.'],
        sourceUrl: 'https://example.com/1',
      },
      { heading: 'Retired', notes: ['Removed Y.'], sourceUrl: 'https://example.com/2' },
    ]
    const yaml = buildReleaseNotesYaml(entries, false, featureHeadings)

    expect(yaml).toContain('  closing_down:\n    # https://example.com/1')
    expect(yaml).toContain('Deprecating X.')
    expect(yaml).toContain('  retired:\n    # https://example.com/2')
    expect(yaml).toContain('Removed Y.')
    // Changes should be omitted since Closing down/Retired are excluded and no other entries exist
    expect(yaml).not.toContain('  changes:')
  })

  test('omits empty sections (except features which gets a TODO)', () => {
    const yaml = buildReleaseNotesYaml([], false, featureHeadings)

    expect(yaml).toContain('# TODO: Add feature notes')
    expect(yaml).toContain('# TODO: Add known issues')
    // Empty changes, closing_down, and retired are omitted entirely
    // to avoid YAML parsing as null (which fails schema validation)
    expect(yaml).not.toContain('  changes:')
    expect(yaml).not.toContain('  closing_down:')
    expect(yaml).not.toContain('  retired:')
  })

  test('sets release_candidate: true and includes RC intro text', () => {
    const yaml = buildReleaseNotesYaml([], true, featureHeadings)

    expect(yaml).toContain('release_candidate: true')
    expect(yaml).toContain('> [!NOTE] Release candidate (RC)')
    expect(yaml).toContain('Do not install an RC in a production environment.')
  })

  test('sets release_candidate: false for GA releases', () => {
    const yaml = buildReleaseNotesYaml([], false, featureHeadings)

    expect(yaml).toContain('release_candidate: false')
    expect(yaml).not.toContain('Release candidate (RC)')
  })

  test('includes source URL comments and pipe-style notes', () => {
    const entries = [
      {
        heading: 'GitHub Actions',
        notes: ['Line one of the note.'],
        sourceUrl: 'https://github.com/github/releases/issues/999',
      },
    ]
    const yaml = buildReleaseNotesYaml(entries, false, featureHeadings)

    expect(yaml).toContain('# https://github.com/github/releases/issues/999')
    expect(yaml).toContain('- |')
    expect(yaml).toContain('Line one of the note.')
  })
})
