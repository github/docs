import { describe, expect, test } from 'vitest'

import {
  findIndicesOfSubstringInString,
  getIndicesOfLiquidVariable,
} from '@/content-render/scripts/reusables-cli/shared'

describe('getIndicesOfLiquidVariable', () => {
  test('finds data and indented_data_reference tags', () => {
    const contents = [
      '{% data reusables.foo.bar %}',
      '1. Step',
      '   {% indented_data_reference reusables.foo.bar spaces=3 %}',
    ].join('\n')
    const indices = getIndicesOfLiquidVariable('reusables.foo.bar', contents)
    expect(indices).toEqual([0, contents.indexOf('{% indented_data_reference')])
  })

  test('does not match a reusable that shares a prefix', () => {
    const contents = [
      '{% data reusables.foo.barbaz %}',
      '{% indented_data_reference reusables.foo.barbaz spaces=3 %}',
    ].join('\n')
    expect(getIndicesOfLiquidVariable('reusables.foo.bar', contents)).toEqual([])
  })

  test('ignores other tags', () => {
    const contents = [
      '{% octicon "check" aria-label="reusables.foo.bar" %}',
      '{% other_tag reusables.foo.bar spaces=3 %}',
    ].join('\n')
    expect(getIndicesOfLiquidVariable('reusables.foo.bar', contents)).toEqual([])
  })
})

describe('findIndicesOfSubstringInString', () => {
  const reusable = '1. On {% data variables.product.prodname_dotcom %}, navigate to the main page'

  test('finds a mixed-case needle', () => {
    const content = `Intro\n\n${reusable} of the repository.\n`
    expect(findIndicesOfSubstringInString(reusable, content)).toEqual([7])
  })

  test('ignores case on both sides', () => {
    const content = `Intro\n\n${reusable.toUpperCase()}\n`
    expect(findIndicesOfSubstringInString(reusable, content)).toEqual([7])
  })

  test('returns every occurrence', () => {
    const content = `${reusable}\n${reusable}\n`
    expect(findIndicesOfSubstringInString(reusable, content)).toEqual([0, reusable.length + 1])
  })

  test('returns an empty array when the needle is missing', () => {
    expect(findIndicesOfSubstringInString(reusable, 'Nothing to see here.')).toEqual([])
  })
})
