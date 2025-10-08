import fs from 'fs/promises'

import { afterEach, describe, expect, test } from 'vitest'
import yaml from 'js-yaml'
import MockDate from 'mockdate'

import {
  createChangelogEntry,
  cleanPreviewTitle,
  previewAnchor,
  prependDatedEntry,
  getLastIgnoredChanges,
  getIgnoredChangesSummary,
} from '../scripts/build-changelog'
import readJsonFile from '@/frame/lib/read-json-file'

const expectedChangelogEntry = readJsonFile('src/graphql/tests/fixtures/changelog-entry.json')
const expectedUpdatedChangelogFile = readJsonFile(
  'src/graphql/tests/fixtures/updated-changelog-file.json',
)

describe('creating a changelog from old schema and new schema', () => {
  afterEach(() => {
    MockDate.reset()
  })

  test('ignores unknown change types without throwing errors', async () => {
    // Create a minimal test that would generate an unknown change type
    // This test ensures the system gracefully handles new change types
    const oldSchemaString = `
    type Query {
      field: String
    }
    `

    const newSchemaString = `
    """
    Updated description for Query type
    """
    type Query {
      field: String
    }
    `

    // This should generate TypeDescriptionAdded change type
    // which should be silently ignored if not in CHANGES_TO_REPORT
    const entry = await createChangelogEntry(oldSchemaString, newSchemaString, [], [], [])

    // Should return null since TypeDescriptionAdded is not in CHANGES_TO_REPORT
    // and will be silently ignored without throwing an error
    expect(entry).toBeNull()
  })

  test('handles new directive usage change types gracefully', async () => {
    // Test that verifies the system can handle new directive-related change types
    // that were previously causing errors in the pipeline
    const oldSchemaString = `
    directive @example on FIELD_DEFINITION

    type Query {
      field: String
    }
    `

    const newSchemaString = `
    directive @example on FIELD_DEFINITION

    type Query {
      field: String @example
    }
    `

    // This should generate DirectiveUsage* change types that are not in CHANGES_TO_REPORT
    // The system should silently ignore these and not throw errors
    const entry = await createChangelogEntry(oldSchemaString, newSchemaString, [], [], [])

    // Should return null since directive usage changes are typically ignored
    expect(entry).toBeNull()
  })

  test('finds a diff of schema changes, upcoming changes, and preview changes', async () => {
    const oldSchemaString = `
    type PreviewType {
      field1(changeTypeArgument: Int): Int
    }

    type Query {
      stableField: String
      removedField: Boolean
      argumentsField(
        removedRequiredArgument: Int!
        removedOptionalArgument: Int!
        argumentMadeRequired: Int
        argumentMadeOptional: Int!
      ): String
      previewField: PreviewType
    }
    `

    const newSchemaString = `
    type PreviewType {
      field1(changeTypeArgument: Float): Int
    }

    type Query {
      stableField: String
      argumentsField(
        argumentMadeRequired: Int!
        argumentMadeOptional: Int
      ): String
      previewField: PreviewType!
    }
    `

    const previews = yaml.load(`
- title: Test preview
  description: This preview is just for test
  toggled_by: ':test_preview'
  announcement: null
  updates: null
  toggled_on:
    - PreviewType
    - Query.previewField
  owning_teams:
    - '@github/engineering'
`)

    const oldUpcomingChanges = yaml.load(`
upcoming_changes:
  - location: EnterprisePendingCollaboratorEdge.isUnlicensed
    description: '\`isUnlicensed\` will be removed.'
    date: '2021-01-01T00:00:00+00:00'
`).upcoming_changes

    const newUpcomingChanges = yaml.load(`
upcoming_changes:
  - location: Query.stableField
    description: '\`stableField\` will be removed.'
    date: '2021-06-01T00:00:00+00:00'
  - location: EnterprisePendingCollaboratorEdge.isUnlicensed
    description: '\`isUnlicensed\` will be removed.'
    date: '2021-01-01T00:00:00+00:00'
`).upcoming_changes

    const entry = await createChangelogEntry(
      oldSchemaString,
      newSchemaString,
      previews,
      oldUpcomingChanges,
      newUpcomingChanges,
    )
    expect(entry).toEqual(expectedChangelogEntry)
  })

  test('returns null when there isnt any difference', async () => {
    const schemaString = `
    type Query {
      i: Int!
    }`

    const nullEntry = await createChangelogEntry(schemaString, schemaString, [], [], [])
    expect(nullEntry).toBeNull()
  })
})

describe('Preparing preview links', () => {
  test('fixes preview names', () => {
    // These two are special cases
    expect(cleanPreviewTitle('UpdateRefsPreview')).toEqual('Update refs preview')
    expect(cleanPreviewTitle('MergeInfoPreview')).toEqual('Merge info preview')
    // Previews that don't end in " preview" have it added
    expect(cleanPreviewTitle('something interesting')).toEqual('something interesting preview')
    // Other things are left as-is
    expect(cleanPreviewTitle('nice preview')).toEqual('nice preview')
  })

  test('creates anchors from preview titles', () => {
    expect(previewAnchor('Merge info preview')).toEqual('merge-info-preview')
    expect(previewAnchor('some.punct123 preview')).toEqual('somepunct123-preview')
  })
})

describe('updating the changelog file', () => {
  afterEach(() => {
    MockDate.reset()
  })

  test('modifies the entry object and the file on disk', async () => {
    const testTargetPath = 'src/graphql/tests/fixtures/example-changelog.json'
    const previousContents = await fs.readFile(testTargetPath)

    const exampleEntry = { someStuff: true }
    const expectedDate = '2020-11-20'
    MockDate.set(expectedDate)

    prependDatedEntry(exampleEntry, testTargetPath)
    const newContents = await fs.readFile(testTargetPath, 'utf8')
    // reset the file:
    await fs.writeFile(testTargetPath, previousContents)

    expect(exampleEntry).toEqual({ someStuff: true, date: expectedDate })
    expect(JSON.parse(newContents)).toEqual(expectedUpdatedChangelogFile)
  })
})

describe('ignored changes tracking', () => {
  test('tracks ignored change types', async () => {
    const oldSchemaString = `
    type Query {
      field: String
    }
    `

    const newSchemaString = `
    """
    Updated description for Query type
    """
    type Query {
      field: String
    }
    `

    // This should generate a TypeDescriptionAdded change type that gets ignored
    await createChangelogEntry(oldSchemaString, newSchemaString, [], [], [])

    const ignoredChanges = getLastIgnoredChanges()
    expect(ignoredChanges.length).toBe(1)
    expect(ignoredChanges[0].type).toBe('TYPE_DESCRIPTION_ADDED')
  })

  test('provides ignored changes summary', async () => {
    const oldSchemaString = `
    directive @example on FIELD_DEFINITION
    type Query {
      field1: String
      field2: Int
    }
    `

    const newSchemaString = `
    directive @example on FIELD_DEFINITION
    type Query {
      field1: String @example
      field2: Int @example
    }
    `

    // This should generate multiple DirectiveUsage changes that get ignored
    await createChangelogEntry(oldSchemaString, newSchemaString, [], [], [])

    const summary = getIgnoredChangesSummary()
    expect(summary).toBeTruthy()
    expect(summary.totalCount).toBe(2)
    expect(summary.typeCount).toBe(1)
    expect(summary.types[0].type).toBe('DIRECTIVE_USAGE_FIELD_DEFINITION_ADDED')
    expect(summary.types[0].count).toBe(2)
  })

  test('returns null summary when no changes ignored', async () => {
    const schemaString = `
    type Query {
      field: String
    }
    `

    // No changes should be generated
    await createChangelogEntry(schemaString, schemaString, [], [], [])

    const summary = getIgnoredChangesSummary()
    expect(summary).toBeNull()
  })
})
