import { readFileSync } from 'fs'

import { describe, expect, test } from 'vitest'

import { allVersions } from '@/versions/lib/all-versions'
import {
  getGraphqlSchema,
  getGraphqlChangelog,
  getGraphqlBreakingChanges,
  getPreviews,
} from '../lib/index'

interface GraphqlType {
  kind: string
  type: string
}

describe('graphql schema', () => {
  const graphqlTypes = (
    JSON.parse(readFileSync('src/graphql/lib/types.json', 'utf-8')) as GraphqlType[]
  ).map((item) => item.kind)
  for (const version in allVersions) {
    for (const type of graphqlTypes) {
      test(`getting the GraphQL ${type} schema works for ${version}`, async () => {
        const schema = getGraphqlSchema(version, type)
        expect(schema).toBeDefined()
      })
    }
  }

  test('getting the graphql changelog works for dotcom', async () => {
    const schema = getGraphqlChangelog('free-pro-team@latest')
    expect(schema).toBeDefined()
  })

  test('getting the graphql breaking changes works for every version', async () => {
    for (const version in allVersions) {
      const schema = getGraphqlBreakingChanges(version)
      expect(schema).toBeDefined()
    }
  })

  test('getting the graphql previews works for every version', async () => {
    for (const version in allVersions) {
      const schema = getPreviews(version)
      expect(schema).toBeDefined()
    }
  })
})
