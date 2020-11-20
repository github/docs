const { createChangelogEntry } = require('../../script/graphql/build-changelog')

describe('creating a changelog from old schema and new schema', () => {
  it('finds a diff of schema changes, upcoming changes, and preview changes', async () => {
    const oldSchemaString = `
    type Query {
      stableField: String
      removedField: Boolean
      argumentsField(
        removedRequiredArgument: Int!
        removedOptionalArgument: Int!
        argumentMadeRequired: Int
        argumentMadeOptional: Int!
      ): String
    }
    `

    const newSchemaString = `
    type Query {
      stableField: String
      argumentsField(
        argumentMadeRequired: Int!
        argumentMadeOptional: Int
      ): String
    }
    `


    const entry = await createChangelogEntry(oldSchemaString, newSchemaString)
    expect(entry).toMatchSnapshot()
  })

  it('returns null when there isnt any difference', async () => {
    const schemaString = `
    type Query {
      i: Int!
    }`

    const nullEntry = await createChangelogEntry(schemaString, schemaString)
    expect(nullEntry).toBeNull()
  })
})
