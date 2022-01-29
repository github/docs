import { expect } from '@jest/globals'
import { getLanguageCodeFromPath } from '../../middleware/detect-language.js'

describe('detect-language - getLanguageCodeFromPath', () => {
  test('should handle client-side routing path shape', () => {
    expect(getLanguageCodeFromPath('/_next/data/development/ja/articles/foo')).toBe('ja')
  })

  test('should not error on /_next/data/ input', () => {
    expect(getLanguageCodeFromPath('/_next/data/')).toBe('en')
  })

  test('should return for paths with an extension', () => {
    expect(getLanguageCodeFromPath('/ja.json')).toBe('ja')
    expect(getLanguageCodeFromPath('/_next/data/development/ja.json')).toBe('ja')
  })

  test('should return en for invalid languages', () => {
    expect(getLanguageCodeFromPath('/xx/articles/foo')).toBe('en')
    expect(getLanguageCodeFromPath('/_next/data/development/xx/articles/foo')).toBe('en')
  })
})
