import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { liquidTagWhitespace } from '../../lib/linting-rules/liquid-tag-whitespace.js'

describe(liquidTagWhitespace.names.join(' - '), () => {
  test('liquid tags with correct whitespace pass', async () => {
    const markdown = [
      '{% data variables.location.product_location %}',
      '{% assign my_variable = "value" %}',
      '{% if user %}Hello, {{ user.name }}{% endif %}',
    ].join('\n')

    const result = await runRule(liquidTagWhitespace, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('liquid tags with incorrect whitespace fail', async () => {
    const markdown = [
      '{%data variables.location.product_location %}',
      '{% assign my_variable = "value"%}',
      '{% if user %}Hello, {{ user.name }} {%endif %}',
      '{%  data variables.location.product_location  %}',
      '{%-data variables.location.product_location -%}',
      '{%- assign my_variable = "value"-%}',
      '{%- if user -%}Hello, {{ user.name }} {%endif %}',
      '{%-  data variables.location.product_location  -%}',
    ].join('\n')

    const result = await runRule(liquidTagWhitespace, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(8)
    expect(errors[2].lineNumber).toBe(3)
    expect(errors[2].fixInfo).toEqual({
      deleteCount: 10,
      editColumn: 37,
      lineNumber: 3,
      insertText: '{% endif %}',
    })
  })

  test('liquid tags with multiple spaces between arguments fail', async () => {
    const markdown = [
      '{% assign  my_variable = "value" %}',
      '{% if  user %}Hello, {{ user.name }}{% endif %}',
    ].join('\n')

    const result = await runRule(liquidTagWhitespace, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[1].lineNumber).toBe(2)
    expect(errors[0].fixInfo).toEqual({
      deleteCount: 35,
      editColumn: 1,
      lineNumber: 1,
      insertText: '{% assign my_variable = "value" %}',
    })
  })

  test('liquid tags with single spaces between arguments pass', async () => {
    const markdown = [
      '{% assign my_variable = "value" %}',
      '{% if user %}Hello, {{ user.name }}{% endif %}',
    ].join('\n')

    const result = await runRule(liquidTagWhitespace, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})
