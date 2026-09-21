import { readFileSync } from 'fs'

import { describe, expect, test } from 'vitest'

import { allVersions } from '@/versions/lib/all-versions'
import { CATEGORIES } from '../lib/categories'
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
    for (const category of CATEGORIES) {
      test(`getting the GraphQL ${category} schema works for ${version}`, async () => {
        const schema = getGraphqlSchema(version, category) as Record<string, unknown>
        expect(schema).toBeDefined()
      })
    }
    test(`every kind has at least one item across categories for ${version}`, async () => {
      const seenKinds = new Set<string>()
      for (const category of CATEGORIES) {
        const bucket = getGraphqlSchema(version, category) as Record<string, unknown[] | undefined>
        for (const kind of graphqlTypes) {
          if ((bucket[kind]?.length ?? 0) > 0) seenKinds.add(kind)
        }
      }
      for (const kind of graphqlTypes) {
        expect(seenKinds, `kind missing across all categories: ${kind}`).toContain(kind)
      }
    })
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
