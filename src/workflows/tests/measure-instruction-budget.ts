import { describe, expect, test } from 'vitest'

import { countRules, matchesPath, globToRegExp } from '../measure-instruction-budget'

describe('globToRegExp', () => {
  test('** matches across path segments', () => {
    expect(globToRegExp('**').test('content/a/b.md')).toBe(true)
    expect(globToRegExp('content/**').test('content/a/b.md')).toBe(true)
    expect(globToRegExp('content/**').test('data/a/b.md')).toBe(false)
  })

  test('* matches within a single segment only', () => {
    expect(globToRegExp('package*.json').test('package-lock.json')).toBe(true)
    expect(globToRegExp('package*.json').test('package.json')).toBe(true)
    expect(globToRegExp('src/*.ts').test('src/index.ts')).toBe(true)
    expect(globToRegExp('src/*.ts').test('src/lib/index.ts')).toBe(false)
  })

  test('**/*.md matches markdown at any depth, including the repo root', () => {
    expect(globToRegExp('**/*.md').test('content/get-started/foo.md')).toBe(true)
    expect(globToRegExp('**/*.md').test('README.md')).toBe(true)
    expect(globToRegExp('**/*.md').test('content/foo.ts')).toBe(false)
  })
})

describe('matchesPath', () => {
  test('matches when any comma-separated glob matches', () => {
    expect(matchesPath('content/**,data/**,**/*.md', 'content/get-started/foo.md')).toBe(true)
    expect(matchesPath('content/**,data/**', 'data/reusables/x.md')).toBe(true)
    expect(matchesPath('src/**,.github/**', 'content/foo.md')).toBe(false)
  })

  test('normalizes backslash paths to POSIX separators', () => {
    expect(matchesPath('content/**', 'content\\get-started\\foo.md')).toBe(true)
  })
})

describe('countRules', () => {
  test('counts bullet and numbered list items', () => {
    const body = ['- first', '* second', '1. third', '2. fourth'].join('\n')
    expect(countRules(body)).toBe(4)
  })

  test('counts indented (nested) list items', () => {
    const body = ['- top', '  - nested', '    * deeper'].join('\n')
    expect(countRules(body)).toBe(3)
  })

  test('ignores list-like lines inside fenced code blocks', () => {
    const body = [
      '- a real rule',
      '```',
      '- not a rule',
      '1. also not a rule',
      '```',
      '- another rule',
    ].join('\n')
    expect(countRules(body)).toBe(2)
  })

  test('does not count headings or prose', () => {
    const body = ['# Heading', 'Some prose with - a dash mid-sentence.', '- one rule'].join('\n')
    expect(countRules(body)).toBe(1)
  })
})
