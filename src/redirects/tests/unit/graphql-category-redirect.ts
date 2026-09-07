import { describe, expect, test, beforeEach } from 'vitest'

import {
  applyGraphqlCategoryRedirect,
  __resetGraphqlCategoryCacheForTests,
} from '../../lib/graphql-category-redirect'

describe('applyGraphqlCategoryRedirect', () => {
  beforeEach(() => {
    __resetGraphqlCategoryCacheForTests()
  })

  test('rewrites a legacy scalar URL with language prefix', () => {
    // Boolean is a built-in GraphQL scalar with no @docsCategory, so it falls
    // to the `other` bucket.
    expect(applyGraphqlCategoryRedirect('/en/graphql/reference/scalars#boolean')).toBe(
      '/en/graphql/reference/other#scalar-boolean',
    )
  })

  test('injects fallback language when input is languageless', () => {
    expect(applyGraphqlCategoryRedirect('/graphql/reference/scalars#boolean')).toBe(
      '/en/graphql/reference/other#scalar-boolean',
    )
  })

  test('honors a non-default fallback language', () => {
    expect(applyGraphqlCategoryRedirect('/graphql/reference/scalars#boolean', 'ja')).toBe(
      '/ja/graphql/reference/other#scalar-boolean',
    )
  })

  test('uses the category from the schema map when annotated', () => {
    // `Repository` is annotated with `@docsCategory(name: "repos")` upstream.
    expect(applyGraphqlCategoryRedirect('/en/graphql/reference/objects#repository')).toBe(
      '/en/graphql/reference/repos#object-repository',
    )
  })

  test('lower-cases the fragment when looking up', () => {
    expect(applyGraphqlCategoryRedirect('/en/graphql/reference/objects#Repository')).toBe(
      '/en/graphql/reference/repos#object-repository',
    )
  })

  test('handles `input-objects` kind segment', () => {
    // CustomPropertyValueInput is categorized as `repos` in the fpt schema.
    expect(
      applyGraphqlCategoryRedirect('/en/graphql/reference/input-objects#custompropertyvalueinput'),
    ).toBe('/en/graphql/reference/repos#input-object-custompropertyvalueinput')
  })

  test('redirects a bare kind page to the reference root', () => {
    expect(applyGraphqlCategoryRedirect('/en/graphql/reference/scalars')).toBe(
      '/en/graphql/reference',
    )
  })

  test('preserves enterprise-cloud version segment', () => {
    expect(
      applyGraphqlCategoryRedirect('/en/enterprise-cloud@latest/graphql/reference/scalars#boolean'),
    ).toBe('/en/enterprise-cloud@latest/graphql/reference/other#scalar-boolean')
  })

  test('preserves a supported enterprise-server version segment', () => {
    expect(
      applyGraphqlCategoryRedirect('/en/enterprise-server@3.21/graphql/reference/scalars#boolean'),
    ).toBe('/en/enterprise-server@3.21/graphql/reference/other#scalar-boolean')
  })

  test('returns null for an archived enterprise-server version', () => {
    expect(
      applyGraphqlCategoryRedirect('/en/enterprise-server@2.20/graphql/reference/scalars#boolean'),
    ).toBeNull()
  })

  test('returns null for non-graphql paths', () => {
    expect(applyGraphqlCategoryRedirect('/en/rest/repos')).toBeNull()
    expect(applyGraphqlCategoryRedirect('/en/graphql/reference/repos')).toBeNull()
    expect(applyGraphqlCategoryRedirect('/en/graphql/reference/other#scalar-boolean')).toBeNull()
  })

  test('returns null for malformed legacy paths', () => {
    expect(applyGraphqlCategoryRedirect('/en/graphql/reference/scalars/boolean')).toBeNull()
    expect(applyGraphqlCategoryRedirect('/en/graphql/reference')).toBeNull()
  })

  test('falls back to `other` when the type id is unknown', () => {
    expect(applyGraphqlCategoryRedirect('/en/graphql/reference/objects#doesnotexist')).toBe(
      '/en/graphql/reference/other#object-doesnotexist',
    )
  })
})
