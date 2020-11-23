const yaml = require("js-yaml")
const { createChangelogEntry, cleanPreviewTitle, previewAnchor } = require('../../script/graphql/build-changelog')

describe('creating a changelog from old schema and new schema', () => {
  it('finds a diff of schema changes, upcoming changes, and preview changes', async () => {
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

    previews = yaml.safeLoad(`
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

    const entry = await createChangelogEntry(oldSchemaString, newSchemaString, previews)
    expect(entry).toMatchSnapshot()
  })

  it('returns null when there isnt any difference', async () => {
    const schemaString = `
    type Query {
      i: Int!
    }`

    const nullEntry = await createChangelogEntry(schemaString, schemaString, [])
    expect(nullEntry).toBeNull()
  })
})

describe("Preparing preview links", () => {
  it("fixes preview names", () => {
    // These two are special cases
    expect(cleanPreviewTitle("UpdateRefsPreview")).toEqual("Update refs preview")
    expect(cleanPreviewTitle("MergeInfoPreview")).toEqual("Merge info preview")
    // Previews that don't end in " preview" have it added
    expect(cleanPreviewTitle("something interesting")).toEqual("something interesting preview")
    // Other things are left as-is
    expect(cleanPreviewTitle("nice preview")).toEqual("nice preview")
  })

  it("creates anchors from preview titles", () => {
    expect(previewAnchor("Merge info preview")).toEqual("merge-info-preview")
    expect(previewAnchor("some.punct123 preview")).toEqual("somepunct123-preview")
  })
})
