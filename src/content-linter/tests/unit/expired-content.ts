import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import {
  expiredContent,
  expiringSoon,
  DAYS_TO_WARN_BEFORE_EXPIRED,
} from '../../lib/linting-rules/expired-content'

describe(expiredContent.names.join(' - '), () => {
  test('Date in the past triggers error', async () => {
    const markdown = [
      '',
      'This is some content that <!-- expires 2024-03-01 -->is',
      'expiring soon<!-- end expires 2024-03-01 --> never expires.',
    ].join('\n')
    const result = await runRule(expiredContent, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].errorRange).toEqual([27, 27])
    expect(errors[0].fixInfo).toBeNull()
  })

  test('Date in the future does not trigger error', async () => {
    const markdown = [
      '',
      'This is some content that <!-- expires 2099-03-01 -->is',
      'expiring soon<!-- end expires 2024-03-01 --> never expires.',
    ].join('\n')
    const result = await runRule(expiredContent, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('multiple spaces in HTML comment triggers error', async () => {
    const markdown = [
      '',
      'This is some content that <!--   expires 2024-03-01      -->is',
      'expiring soon<!-- end expires 2024-03-01 --> never expires.',
    ].join('\n')
    const result = await runRule(expiredContent, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].errorRange).toEqual([27, 34])
    expect(errors[0].fixInfo).toBeNull()
  })

  test('no surrounding spaces in HTML comment triggers error', async () => {
    const markdown = [
      '',
      'This is some content that <!--expires 2024-03-01-->is',
      'expiring soon<!-- end expires 2024-03-01 --> never expires.',
    ].join('\n')
    const result = await runRule(expiredContent, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].errorRange).toEqual([27, 25])
    expect(errors[0].fixInfo).toBeNull()
  })

  test('HTML tag on its own line triggers error', async () => {
    const markdown = [
      '',
      '<!-- expires 2024-03-01 -->',
      `This is expiring soon.`,
      '<!-- end expires 2024-03-01 -->',
    ].join('\n')
    const result = await runRule(expiredContent, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].errorRange).toEqual([1, 27])
    expect(errors[0].fixInfo).toBeNull()
  })

  test('expired range after a future range in the same HTML block triggers error', async () => {
    const markdown = [
      '',
      '<table>',
      '<!-- expires 2099-01-01 -->',
      '<tr><td>a</td></tr>',
      '<!-- end expires 2099-01-01 -->',
      '<!-- expires 2024-03-01 -->',
      '<tr><td>b</td></tr>',
      '<!-- end expires 2024-03-01 -->',
      '</table>',
    ].join('\n')
    const result = await runRule(expiredContent, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(6)
    expect(errors[0].errorRange).toEqual([1, 27])
  })

  test('expired range after a future range in the same paragraph triggers error', async () => {
    const markdown = [
      '',
      'Some text <!-- expires 2099-03-01 -->a<!-- end expires 2099-03-01 --> and',
      'more text <!-- expires 2024-03-01 -->b<!-- end expires 2024-03-01 -->.',
    ].join('\n')
    const result = await runRule(expiredContent, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    expect(errors[0].errorRange).toEqual([11, 27])
  })

  test('HTML tag split across lines limits the range to its first line', async () => {
    const markdown = [
      '',
      '<table>',
      '<!-- expires 2099-01-01 -->',
      '<tr><td>a</td></tr>',
      '<!-- end expires 2099-01-01 -->',
      '<!-- expires 2024-03-01',
      '-->',
      '<tr><td>b</td></tr>',
      '<!-- end expires 2024-03-01 -->',
      '</table>',
    ].join('\n')
    const result = await runRule(expiredContent, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(6)
    expect(errors[0].errorRange).toEqual([1, 23])
  })
})

describe(expiringSoon.names.join(' - '), () => {
  test('Date more than number of days to warn does not trigger warning', async () => {
    const formattedDate = getFormattedDate(1)
    const markdown = [
      '',
      `This is some content that <!-- expires ${formattedDate} -->is`,
      `expiring soon<!-- end expires ${formattedDate} --> never expires.`,
    ].join('\n')
    const result = await runRule(expiringSoon, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Date equivalent to number of days to warn does trigger warning', async () => {
    const formattedDate = getFormattedDate()
    const markdown = [
      '',
      `This is some content that <!-- expires ${formattedDate} -->is`,
      `expiring soon<!-- end expires ${formattedDate} --> never expires.`,
    ].join('\n')
    const result = await runRule(expiringSoon, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].errorRange).toEqual([27, 27])
    expect(errors[0].fixInfo).toBeNull()
  })

  test('Date less than number of days to warn does trigger warning', async () => {
    const formattedDate = getFormattedDate(-1)
    const markdown = [
      '',
      `This is some content that <!-- expires ${formattedDate} -->is`,
      `expiring soon<!-- end expires ${formattedDate} --> never expires.`,
    ].join('\n')
    const result = await runRule(expiringSoon, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].errorRange).toEqual([27, 27])
    expect(errors[0].fixInfo).toBeNull()
  })
  test('HTML tag on its own line triggeres warning', async () => {
    const formattedDate = getFormattedDate(-1)
    const markdown = [
      '',
      `<!-- expires ${formattedDate} -->`,
      `This is expiring soon.`,
      `<!-- end expires ${formattedDate}`,
    ].join('\n')
    const result = await runRule(expiringSoon, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].errorRange).toEqual([1, 27])
    expect(errors[0].fixInfo).toBeNull()
  })

  test('HTML tag on a later line of a paragraph triggers warning', async () => {
    const formattedDate = getFormattedDate(-1)
    const markdown = [
      '',
      'Intro sentence.',
      `More text <!-- expires ${formattedDate} -->x<!-- end expires ${formattedDate} -->.`,
    ].join('\n')
    const result = await runRule(expiringSoon, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    expect(errors[0].errorRange).toEqual([11, 27])
  })

  test('HTML tag on a later line of an HTML block triggers warning', async () => {
    const formattedDate = getFormattedDate(-1)
    const markdown = [
      '',
      '<table>',
      '<tr><td>a</td></tr>',
      `<!-- expires ${formattedDate} -->`,
      '<tr><td>b</td></tr>',
      `<!-- end expires ${formattedDate} -->`,
      '</table>',
    ].join('\n')
    const result = await runRule(expiringSoon, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(4)
    expect(errors[0].errorRange).toEqual([1, 27])
  })

  test('expiring range after a later range in the same HTML block triggers warning', async () => {
    const formattedDate = getFormattedDate(-1)
    const markdown = [
      '',
      '<table>',
      '<!-- expires 2099-01-01 -->',
      '<tr><td>a</td></tr>',
      '<!-- end expires 2099-01-01 -->',
      `<!-- expires ${formattedDate} -->`,
      '<tr><td>b</td></tr>',
      `<!-- end expires ${formattedDate} -->`,
      '</table>',
    ].join('\n')
    const result = await runRule(expiringSoon, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(6)
    expect(errors[0].errorRange).toEqual([1, 27])
  })

  test('HTML tag split across lines limits the range to its first line', async () => {
    const formattedDate = getFormattedDate(-1)
    const markdown = [
      '',
      `<!-- expires ${formattedDate}`,
      '-->',
      'This is expiring soon.',
      `<!-- end expires ${formattedDate} -->`,
    ].join('\n')
    const result = await runRule(expiringSoon, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].errorRange).toEqual([1, 23])
  })
})

function getFormattedDate(additionalDays = 0) {
  const today = new Date()
  today.setDate(today.getDate() + DAYS_TO_WARN_BEFORE_EXPIRED + additionalDays)
  return today
    .toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .split('/')
    .reverse()
    .join('-')
}
