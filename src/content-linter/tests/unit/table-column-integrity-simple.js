import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { tableColumnIntegrity } from '../../lib/linting-rules/table-column-integrity'

describe(tableColumnIntegrity.names.join(' - '), () => {
  test('Valid table with consistent columns passes', async () => {
    const markdown = [
      '| Artist | Album | Year |',
      '|--------|-------|------|',
      '| Beyoncé | Lemonade | 2016 |',
      '| Kendrick Lamar | DAMN. | 2017 |',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Table with extra columns causes error', async () => {
    const markdown = ['| Name | Age |', '|------|-----|', '| Alice | 25 | Extra |'].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('Table row has 3 columns but header has 2')
    } else if (errors[0].errorDetail) {
      expect(errors[0].errorDetail).toContain('Table row has 3 columns but header has 2')
    } else {
      console.log('Error structure:', JSON.stringify(errors[0], null, 2))
      expect(errors[0]).toHaveProperty('detail')
    }
  })

  test('Table with missing columns causes error', async () => {
    const markdown = ['| Name | Age | City |', '|------|-----|------|', '| Bob | 30 |'].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('Table row has 2 columns but header has 3')
    } else if (errors[0].errorDetail) {
      expect(errors[0].errorDetail).toContain('Table row has 2 columns but header has 3')
    } else {
      console.log('Error structure:', JSON.stringify(errors[0], null, 2))
      expect(errors[0]).toHaveProperty('detail')
    }
  })

  test('Liquid-only rows are ignored', async () => {
    const markdown = [
      '| Feature | Status |',
      '|---------|--------|',
      '| {% ifversion ghes %} |',
      '| Advanced | Enabled |',
      '| {% endif %} |',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})
