import { describe, expect, test } from 'vitest'

import { findDataSchemaKey } from '@/content-linter/lib/helpers/get-lintable-yml'

describe('findDataSchemaKey', () => {
  test('matches a file key that shares a prefix with an earlier directory key', () => {
    expect(findDataSchemaKey('data/tables/copilot/matrix-meta.yml')).toBe(
      'data/tables/copilot/matrix-meta.yml',
    )
  })

  test('matches files inside a directory key', () => {
    expect(findDataSchemaKey('data/tables/copilot/matrix/vs-code.yml')).toBe(
      'data/tables/copilot/matrix',
    )
    expect(findDataSchemaKey('data/features/some-feature.yml')).toBe('data/features')
    expect(findDataSchemaKey('data/variables/product.yml')).toBe('data/variables')
    expect(findDataSchemaKey('data/release-notes/enterprise-server/3-14/0.yml')).toBe(
      'data/release-notes',
    )
  })

  test('matches exact file keys', () => {
    expect(findDataSchemaKey('data/code-languages.yml')).toBe('data/code-languages.yml')
  })

  test('does not match a sibling path that only shares a string prefix', () => {
    expect(
      findDataSchemaKey('data/tables/copilot/matrix-other.yml', ['data/tables/copilot/matrix']),
    ).toBeUndefined()
  })

  test('returns undefined for paths without a schema', () => {
    expect(findDataSchemaKey('data/reusables/foo.yml')).toBeUndefined()
  })
})
