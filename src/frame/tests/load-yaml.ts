import { describe, expect, test } from 'vitest'

import { loadYaml } from '@/frame/lib/load-yaml'

describe('loadYaml', () => {
  test('returns undefined for empty or document-less content', () => {
    expect(loadYaml('')).toBeUndefined()
    expect(loadYaml('   \n\t')).toBeUndefined()
    expect(loadYaml('# comment only\n# another comment')).toBeUndefined()
  })

  test('throws on multiple YAML documents', () => {
    expect(() => loadYaml('a: 1\n---\nb: 2\n')).toThrow()
  })
})
