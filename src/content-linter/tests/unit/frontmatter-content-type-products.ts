import fs from 'fs'
import os from 'os'
import path from 'path'

import { afterAll, beforeAll, beforeEach, describe, expect, test } from 'vitest'

import {
  frontmatterContentType,
  resetCache,
} from '@/content-linter/lib/linting-rules/frontmatter-content-type'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

function lint(name: string, fmLines: string[]): string[] {
  const lines = ['---', ...fmLines, '---', '', 'Some content.']
  const details: string[] = []
  // addError passes one error object, not the positional arguments RuleErrorCallback declares.
  const onError = ((error: { detail?: string }) => {
    details.push(error.detail || '')
  }) as unknown as RuleErrorCallback
  frontmatterContentType.function({ name, lines } as unknown as RuleParams, onError)
  return details
}

// prod has every required content-type directory plus one extra section.
// partial has only some content-type directories, like a product midway through restructuring.
describe('GHD065 - qualifying products', () => {
  const savedRoot = process.env.ROOT
  let tempRoot: string

  beforeAll(() => {
    tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'frontmatter-content-type-'))
    for (const dir of ['concepts', 'how-tos', 'reference', 'tutorials', 'extra-section']) {
      fs.mkdirSync(path.join(tempRoot, 'content', 'prod', dir), { recursive: true })
    }
    for (const dir of ['concepts', 'misc']) {
      fs.mkdirSync(path.join(tempRoot, 'content', 'partial', dir), { recursive: true })
    }
    process.env.ROOT = tempRoot
  })

  afterAll(() => {
    process.env.ROOT = savedRoot
    resetCache()
    fs.rmSync(tempRoot, { recursive: true, force: true })
  })

  beforeEach(() => {
    resetCache()
  })

  test('product with an extra directory still checks content-type directories', () => {
    const details = lint('content/prod/how-tos/x.md', ['title: How to'])
    expect(details.length).toBe(1)
    expect(details[0]).toContain('Missing contentType')
    expect(details[0]).toContain('"how-tos"')
  })

  test('product with an extra directory reports mismatched contentType', () => {
    const details = lint('content/prod/how-tos/x.md', ['title: How to', 'contentType: concepts'])
    expect(details.length).toBe(1)
    expect(details[0]).toContain('does not match expected "how-tos"')
  })

  test('fix hint targets the failing file, not the whole product', () => {
    const details = lint('content/prod/how-tos/x.md', ['title: How to'])
    expect(details[0]).toContain('--paths content/prod/how-tos/x.md`')
  })

  test('files in a directory that is not a content type are skipped', () => {
    expect(lint('content/prod/extra-section/x.md', ['title: Extra'])).toEqual([])
    expect(
      lint('content/prod/extra-section/x.md', ['title: Extra', 'contentType: how-tos']),
    ).toEqual([])
  })

  test('product missing required content-type directories is not checked', () => {
    expect(lint('content/partial/concepts/x.md', ['title: Concepts'])).toEqual([])
  })
})
