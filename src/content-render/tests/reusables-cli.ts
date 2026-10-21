import { describe, expect, test } from 'vitest'

import { getIndicesOfLiquidVariable } from '@/content-render/scripts/reusables-cli/shared'

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
