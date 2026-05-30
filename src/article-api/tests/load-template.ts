import { describe, expect, test } from 'vitest'
import { loadTemplate } from '@/article-api/lib/load-template'

describe('loadTemplate', () => {
  test('loads an existing template file', () => {
    const content = loadTemplate('landing-page.template.md')
    expect(content).toContain('# {{ title }}')
    expect(content).toContain('{% for section in sections %}')
  })

  test('throws error for non-existent template', () => {
    expect(() => loadTemplate('non-existent-template.md')).toThrow()
  })

  test('returns template content as string', () => {
    const content = loadTemplate('landing-page.template.md')
    expect(typeof content).toBe('string')
    expect(content.length).toBeGreaterThan(0)
  })
})
