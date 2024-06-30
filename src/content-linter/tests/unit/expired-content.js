import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import {
  expiredContent,
  expiringSoon,
  DAYS_TO_WARN_BEFORE_EXPIRED,
} from '../../lib/linting-rules/expired-content.js'

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
