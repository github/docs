import { describe, expect, test } from 'vitest'

import processSchemas from '../scripts/utils/process-schemas'

// Minimal `@docsCategory` directive declaration so `buildASTSchema` can parse
// the fixtures below. Mirrors the real declaration emitted by github/github.
const DIRECTIVE = `
directive @docsCategory(name: String!) on ENUM | FIELD_DEFINITION | INPUT_OBJECT | INTERFACE | OBJECT | UNION
`

// Run processSchemas over an inline IDL and return a flat name -> category map
// across every kind, so tests can assert where a type landed.
async function categoriesFor(idl: string): Promise<Record<string, string>> {
  const data = await processSchemas(`${DIRECTIVE}\n${idl}`, [])
  const out: Record<string, string> = {}
  for (const kind of Object.keys(data) as (keyof typeof data)[]) {
    for (const item of data[kind] as Array<{ name?: string; category?: string }>) {
      if (item?.name && item.category) out[item.name] = item.category
    }
  }
  return out
}

// Every fixture needs a Query root; a `viewer` field keeps it non-empty.
const QUERY = `
type Query {
  viewer: String
}
`

describe('reference-based category derivation (PASS 1.5 rule c)', () => {
  test('enum inherits from an annotated object field return type', async () => {
    const cats = await categoriesFor(`
      ${QUERY}
      type RepositoryRule @docsCategory(name: "repos") {
        type: RepositoryRuleType
      }
      enum RepositoryRuleType { CREATION DELETION }
    `)
    expect(cats.RepositoryRuleType).toBe('repos')
  })

  test('union inherits from an annotated object field', async () => {
    const cats = await categoriesFor(`
      ${QUERY}
      type RepositoryRule @docsCategory(name: "repos") {
        parameters: RuleParameters
      }
      type UpdateParameters @docsCategory(name: "repos") { value: String }
      union RuleParameters = UpdateParameters
    `)
    expect(cats.RuleParameters).toBe('repos')
  })

  test('enum inherits from an annotated object field argument', async () => {
    // Mirrors Issue.timelineItems(itemTypes: [IssueTimelineItemsItemType!]).
    const cats = await categoriesFor(`
      ${QUERY}
      type Issue @docsCategory(name: "issues") {
        timelineItems(itemTypes: [IssueTimelineItemsItemType!]): String
      }
      enum IssueTimelineItemsItemType { ASSIGNED_EVENT CLOSED_EVENT }
    `)
    expect(cats.IssueTimelineItemsItemType).toBe('issues')
  })

  test('input object inherits transitively through nested input fields', async () => {
    const cats = await categoriesFor(`
      ${QUERY}
      input RepositoryRuleInput @docsCategory(name: "repos") {
        parameters: RuleParametersInput
      }
      input RuleParametersInput { nested: NestedParametersInput }
      input NestedParametersInput { value: String }
    `)
    expect(cats.RuleParametersInput).toBe('repos')
    // Propagates another hop through the still-uncategorized input chain.
    expect(cats.NestedParametersInput).toBe('repos')
  })

  test('ambiguous referrers keep the type on `other`', async () => {
    const cats = await categoriesFor(`
      ${QUERY}
      type Issue @docsCategory(name: "issues") {
        state: SharedEnum
      }
      type PullRequest @docsCategory(name: "pulls") {
        state: SharedEnum
      }
      enum SharedEnum { OPEN CLOSED }
    `)
    expect(cats.SharedEnum).toBe('other')
  })

  test('an explicit annotation wins over conflicting referrers', async () => {
    const cats = await categoriesFor(`
      ${QUERY}
      type Issue @docsCategory(name: "issues") {
        state: AnnotatedEnum
      }
      type PullRequest @docsCategory(name: "pulls") {
        state: AnnotatedEnum
      }
      enum AnnotatedEnum @docsCategory(name: "repos") { OPEN CLOSED }
    `)
    expect(cats.AnnotatedEnum).toBe('repos')
  })

  test('a type referenced only from a Query field stays on `other`', async () => {
    const cats = await categoriesFor(`
      type Query {
        search(kind: QueryOnlyEnum): String
      }
      enum QueryOnlyEnum { REPO USER }
    `)
    expect(cats.QueryOnlyEnum).toBe('other')
  })

  test('interfaces are not a referrer source', async () => {
    // Interface is annotated and references the enum, but no object does, so
    // the enum must not inherit the interface's category.
    const cats = await categoriesFor(`
      ${QUERY}
      interface Rulable @docsCategory(name: "repos") {
        kind: InterfaceOnlyEnum
      }
      enum InterfaceOnlyEnum { A B }
    `)
    expect(cats.InterfaceOnlyEnum).toBe('other')
  })

  test('an unreferenced type stays on `other`', async () => {
    const cats = await categoriesFor(`
      ${QUERY}
      enum OrphanEnum { A B }
    `)
    expect(cats.OrphanEnum).toBe('other')
  })

  test('an enum used only as a mutation field argument inherits the mutation category', async () => {
    const cats = await categoriesFor(`
      ${QUERY}
      type Mutation {
        createRepositoryRule(kind: MutationArgEnum): String @docsCategory(name: "repos")
      }
      enum MutationArgEnum { A B }
    `)
    expect(cats.MutationArgEnum).toBe('repos')
  })
})
