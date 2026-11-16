import { describe, expect, test } from 'vitest'

import { validateJson } from '@/tests/lib/validate-json-schema'
import { schemaValidator } from '../lib/validator'
import processSchemas from '../scripts/utils/process-schemas'

const IDL = `
directive @docsCategory(name: String!) on ENUM | FIELD_DEFINITION | INPUT_OBJECT | INTERFACE | OBJECT | UNION

enum OrderField { CREATED_AT UPDATED_AT }
enum OrderDirection { ASC DESC }
enum Affiliation { OWNER COLLABORATOR }

input Ord {
  field: OrderField
  direction: OrderDirection
}

type Query {
  things(orderBy: Ord = {field: UPDATED_AT, direction: DESC}, flag: Boolean = false): Thing
}

type Thing {
  items(
    orderBy: Ord = {field: CREATED_AT, direction: ASC}
    affiliations: [Affiliation] = [OWNER, COLLABORATOR]
    ids: [ID!] = ["a"]
    first: Int = 25
    flag: Boolean = false
    name: String = null
    after: String
  ): String
}
`

type Arg = { name: string; defaultValue?: string | boolean }

function defaultsByName(args: Arg[] | undefined): Record<string, string | boolean | undefined> {
  return Object.fromEntries((args || []).map((arg) => [arg.name, arg.defaultValue]))
}

describe('GraphQL argument default values', () => {
  test('keeps object, list, and scalar defaults on query and field arguments', async () => {
    const data = await processSchemas(IDL, [])

    const query = data.queries.find((q) => q.name === 'things')!
    expect(defaultsByName(query.args)).toEqual({
      orderBy: '{field: UPDATED_AT, direction: DESC}',
      flag: false,
    })

    const thing = data.objects.find((o) => o.name === 'Thing')!
    const items = thing.fields!.find((f) => f.name === 'items')!
    expect(defaultsByName(items.arguments as Arg[])).toEqual({
      orderBy: '{field: CREATED_AT, direction: ASC}',
      affiliations: '[OWNER, COLLABORATOR]',
      ids: '["a"]',
      first: '25',
      flag: false,
      name: undefined,
      after: undefined,
    })

    const { isValid, errors } = validateJson(schemaValidator.queries, query)
    expect(isValid, JSON.stringify(errors)).toBe(true)
  })
})
