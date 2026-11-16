import { describe, expect, test } from 'vitest'

import { addFeatureParamToHref } from '@/frame/components/lib/add-feature-param-to-href'

const restLink =
  'https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#create-a-repository'

describe('addFeatureParamToHref', () => {
  test('keeps query and fragment when there is no feature param', () => {
    expect(addFeatureParamToHref(restLink, '')).toBe(restLink)
    expect(addFeatureParamToHref(restLink, '?foo=bar')).toBe(restLink)
  })

  test('adds feature param after the existing query and before the fragment', () => {
    expect(addFeatureParamToHref(restLink, '?feature=foo')).toBe(
      'https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28&feature=foo#create-a-repository',
    )
  })

  test('adds feature param before the fragment when there is no query', () => {
    expect(addFeatureParamToHref('https://docs.github.com/en/foo#section', '?feature=foo')).toBe(
      'https://docs.github.com/en/foo?feature=foo#section',
    )
  })

  test('adds feature param to a plain link', () => {
    expect(addFeatureParamToHref('https://docs.github.com/en/foo', '?feature=foo')).toBe(
      'https://docs.github.com/en/foo?feature=foo',
    )
  })

  test('keeps relative links relative', () => {
    expect(addFeatureParamToHref('/en/foo?tool=cli', '?feature=foo')).toBe(
      '/en/foo?tool=cli&feature=foo',
    )
  })

  test('replaces an existing feature param instead of duplicating it', () => {
    expect(
      addFeatureParamToHref('https://docs.github.com/en/foo?feature=old&tool=cli', '?feature=foo'),
    ).toBe('https://docs.github.com/en/foo?feature=foo&tool=cli')
  })

  test('leaves in-page fragment links unchanged', () => {
    expect(addFeatureParamToHref('#section', '?feature=foo')).toBe('#section')
  })

  test('leaves an empty href empty', () => {
    expect(addFeatureParamToHref('', '?feature=foo')).toBe('')
  })
})
